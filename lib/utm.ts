// UTM / klik-id videreførsel — sikker for Google Ads.
//
// Designprincipper (for at undgå falske "Compromised site"-flag):
//  - Streng allowlist: kun kendte sporingsparametre forwardes, aldrig
//    vilkårlige query-strenge (ingen open-redirect-lignende mønstre).
//  - Værdier saniteres og længdebegrænses.
//  - Kun intern, samme-origin navigation får halen påført.
//  - Links i HTML forbliver rene; halen tilføjes først ved et ægte
//    bruger-klik (ingen cloaking, ingen server-redirects).
//  - Gemmes i sessionStorage (forsvinder når fanen lukkes).

const STORAGE_KEY = "mg_tracking";

// Kun disse parametre føres videre.
const ALLOWLIST = new Set<string>([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "gclsrc",
  "dclid",
  "gad_source",
  "gad_campaignid",
  "msclkid",
]);

const MAX_LEN = 256;
// Konservativt tegnsæt for en dekodet værdi.
const SAFE_VALUE = /^[\p{L}\p{N} ._\-:/+%|,@]*$/u;

function cleanValue(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const v = raw.trim();
  if (!v || v.length > MAX_LEN) return null;
  if (!SAFE_VALUE.test(v)) return null;
  return v;
}

export type Tracking = Record<string, string>;

/** Udtræk kun allowlistede, rene sporingsparametre fra en query-streng. */
export function extractTracking(search: string): Tracking {
  const out: Tracking = {};
  const sp = new URLSearchParams(search || "");
  for (const key of ALLOWLIST) {
    if (!sp.has(key)) continue;
    const cleaned = cleanValue(sp.get(key));
    if (cleaned) out[key] = cleaned;
  }
  return out;
}

/** Gem sporingsparametre fra den nuværende URL (kald ved landing). */
export function captureTracking(): void {
  try {
    if (typeof window === "undefined") return;
    const found = extractTracking(window.location.search);
    if (Object.keys(found).length > 0) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    }
  } catch {
    /* sessionStorage utilgængelig — ignorér stille */
  }
}

/** Hent gemte sporingsparametre (re-valideres). */
export function getStoredTracking(): Tracking {
  try {
    if (typeof window === "undefined") return {};
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const out: Tracking = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (!ALLOWLIST.has(k)) continue;
      const cleaned = cleanValue(v);
      if (cleaned) out[k] = cleaned;
    }
    return out;
  } catch {
    return {};
  }
}

/** Kun intern, samme-origin sti (ikke #anker, mailto:, tel:, http(s):). */
export function isInternalHref(href: unknown): href is string {
  return typeof href === "string" && href.startsWith("/") && !href.startsWith("//");
}

/** Flet sporingshalen ind i en intern href uden at overskrive eksisterende. */
export function withTracking(href: string, tracking: Tracking): string {
  if (!isInternalHref(href) || Object.keys(tracking).length === 0) return href;
  const [pathAndQuery, hash = ""] = href.split("#");
  const [path, existingQuery = ""] = pathAndQuery.split("?");
  const params = new URLSearchParams(existingQuery);
  for (const [k, v] of Object.entries(tracking)) {
    if (!params.has(k)) params.set(k, v);
  }
  const qs = params.toString();
  return path + (qs ? `?${qs}` : "") + (hash ? `#${hash}` : "");
}

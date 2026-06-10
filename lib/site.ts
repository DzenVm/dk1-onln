// Central konfiguration for sitet. Ét sted at ændre brand, URL og kontakt.

export const SITE = {
  name: "Spilnord",
  // Brug NEXT_PUBLIC_SITE_URL i produktion (Vercel), ellers et fornuftigt fallback.
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://marevgam.live",
  locale: "da_DK",
  lang: "da",
  email: "hej@marevgam.live",
  description:
    "Uafhængig guide til onlinekasinoer med dansk licens (Spillemyndigheden): sammenlign kampagner, betalingsmetoder og regler. 18+. Vi er medie, ikke spiludbyder.",
  keywords:
    "onlinekasino Danmark,kasino med dansk licens,Spillemyndigheden,registreringsbonus,lovlige slots,ansvarligt spil",
  // Driftsselskab bag sitet.
  company: {
    legalName: "DOLAK trade s.r.o.",
    legalNameFull: "DOLAK trade s.r.o.",
    address: "Klicperova 2576/9, Východní Předměstí, 301 00 Plzeň, Tjekkiet",
    street: "Klicperova 2576/9, Východní Předměstí",
    city: "Plzeň",
    postalCode: "301 00",
    country: "CZ",
    ico: "29079217",
  },
  // Officielle, danske myndigheds- og hjælpelinjer.
  authorities: {
    regulator: { label: "Spillemyndigheden", url: "https://www.spillemyndigheden.dk" },
    help: { label: "StopSpillet", url: "https://www.stopspillet.dk" },
    selfExclusion: { label: "ROFUS", url: "https://www.rofus.nu" },
  },
} as const;

export const NAV_FOOTER = [
  { href: "/om-os", label: "Om os" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/vilkaar", label: "Vilkår" },
  { href: "/privatliv", label: "Privatliv" },
  { href: "/ansvarligt-spil", label: "Ansvarligt spil" },
] as const;

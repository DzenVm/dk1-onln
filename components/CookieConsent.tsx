"use client";

import { useEffect, useState } from "react";

/**
 * GDPR-cookiesamtykke med knapper.
 * - Nødvendige cookies er altid slået til.
 * - Statistik og marketing kan til-/fravælges.
 * - Valget gemmes i en cookie (180 dage) og opdaterer Google Consent Mode v2,
 *   så sitet er klar til Google Ads / Analytics uden at indlæse noget før samtykke.
 */

const COOKIE_NAME = "spilnord_consent";
const MAX_AGE = 60 * 60 * 24 * 180; // 180 dage

type Consent = {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
};

function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(COOKIE_NAME + "="));
  if (!match) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(match.split("=")[1]));
    return { necessary: true, statistics: !!parsed.statistics, marketing: !!parsed.marketing };
  } catch {
    return null;
  }
}

function writeConsent(c: Consent) {
  document.cookie =
    `${COOKIE_NAME}=` +
    encodeURIComponent(JSON.stringify(c)) +
    `; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax`;
}

function applyToGoogle(c: Consent) {
  // gtag defineres som en stub i layout (Consent Mode). Opdaterer kun samtykke-signaler.
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", {
      analytics_storage: c.statistics ? "granted" : "denied",
      ad_storage: c.marketing ? "granted" : "denied",
      ad_user_data: c.marketing ? "granted" : "denied",
      ad_personalization: c.marketing ? "granted" : "denied",
    });
  }
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [decided, setDecided] = useState(true);

  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      setStatistics(existing.statistics);
      setMarketing(existing.marketing);
      applyToGoogle(existing);
      setDecided(true);
      setOpen(false);
    } else {
      setDecided(false);
      setOpen(true);
    }
  }, []);

  function save(c: Consent) {
    writeConsent(c);
    applyToGoogle(c);
    setStatistics(c.statistics);
    setMarketing(c.marketing);
    setDecided(true);
    setOpen(false);
    setShowOptions(false);
  }

  const acceptAll = () => save({ necessary: true, statistics: true, marketing: true });
  const rejectAll = () => save({ necessary: true, statistics: false, marketing: false });
  const saveChoice = () => save({ necessary: true, statistics, marketing });

  if (!open) {
    // Når et valg er truffet, vises en lille knap til at åbne indstillinger igen.
    if (!decided) return null;
    return (
      <button
        type="button"
        className="lz-cc-reopen"
        onClick={() => {
          setShowOptions(true);
          setOpen(true);
        }}
        aria-label="Åbn cookieindstillinger"
      >
        🍪 Cookieindstillinger
      </button>
    );
  }

  return (
    <div className="lz-cc" role="dialog" aria-modal="false" aria-label="Cookiesamtykke">
      <div className="lz-cc__panel">
        <h2 className="lz-cc__title">Vi respekterer dit privatliv</h2>
        <p className="lz-cc__text">
          Vi bruger nødvendige cookies, for at sitet virker. Med dit samtykke bruger vi
          desuden cookies til statistik og marketing (bl.a. Google) for at måle og forbedre
          indholdet. Du kan ændre dit valg når som helst. Læs mere i vores{" "}
          <a href="/privatliv">privatlivspolitik</a>.
        </p>

        {showOptions && (
          <div className="lz-cc__options">
            <label className="lz-cc__opt">
              <input type="checkbox" checked disabled readOnly />
              <span>
                <strong>Nødvendige</strong> — kræves for grundlæggende funktioner og sikkerhed.
                Altid aktive.
              </span>
            </label>
            <label className="lz-cc__opt">
              <input
                type="checkbox"
                checked={statistics}
                onChange={(e) => setStatistics(e.target.checked)}
              />
              <span>
                <strong>Statistik</strong> — anonyme målinger af, hvordan sitet bruges, så vi kan
                forbedre det.
              </span>
            </label>
            <label className="lz-cc__opt">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
              />
              <span>
                <strong>Marketing</strong> — måling af annoncer og relevans (Google Ads). Sættes
                kun med dit samtykke.
              </span>
            </label>
          </div>
        )}

        <div className="lz-cc__actions">
          <button type="button" className="lz-btn lz-btn--primary" onClick={acceptAll}>
            Accepter alle
          </button>
          <button type="button" className="lz-btn lz-btn--ghost" onClick={rejectAll}>
            Kun nødvendige
          </button>
          {showOptions ? (
            <button type="button" className="lz-btn lz-btn--ghost" onClick={saveChoice}>
              Gem valg
            </button>
          ) : (
            <button
              type="button"
              className="lz-cc__settings-link"
              onClick={() => setShowOptions(true)}
            >
              Tilpas indstillinger
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

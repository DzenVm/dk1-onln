// Central konfiguration for sitet. Ét sted at ændre brand, URL og kontakt.

export const SITE = {
  name: "Spilnord",
  // Brug NEXT_PUBLIC_SITE_URL i produktion (Vercel), ellers et fornuftigt fallback.
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://spilnord.dk",
  locale: "da_DK",
  lang: "da",
  email: "hej@spilnord.dk",
  description:
    "Uafhængig guide til onlinekasinoer med dansk licens (Spillemyndigheden): sammenlign kampagner, betalingsmetoder og regler. 18+. Vi er medie, ikke spiludbyder.",
  keywords:
    "onlinekasino Danmark,kasino med dansk licens,Spillemyndigheden,registreringsbonus,lovlige slots,ansvarligt spil",
  // Driftsselskab — uændret fra koncernen bag sitet.
  company: {
    legalName: "EKIPAZH EU sp. z o.o.",
    legalNameFull: "EKIPAZH EU SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    address: "ul. Przemiarki 23/8, 30-384 Kraków, Polen",
    street: "ul. Przemiarki 23/8",
    city: "Kraków",
    postalCode: "30-384",
    country: "PL",
    krs: "0001022762",
    nip: "6762637696",
    regon: "524615411",
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

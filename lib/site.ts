// Central konfiguration for sitet. Ét sted at ændre brand, URL og kontakt.

export const SITE = {
  // Sitet har intet brand/navn — kun en beskrivende titel og en juridisk udgiver.
  title: "Guide til onlinekasino i Danmark",
  shortName: "Kasinoguide",
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
  // Officielle, danske myndigheds- og hjælpelinjer (kræves i markedsføring
  // af spil: 18+, StopSpillet og ROFUS — jf. Spillemyndighedens regler).
  authorities: {
    regulator: { label: "Spillemyndigheden", url: "https://www.spillemyndigheden.dk" },
    help: {
      label: "StopSpillet",
      url: "https://www.stopspillet.dk",
      phone: "70 22 28 25",
      phoneHref: "tel:+4570222825",
    },
    selfExclusion: { label: "ROFUS", url: "https://www.rofus.nu" },
    treatment: { label: "Center for Ludomani", url: "https://ludomani.dk" },
  },
} as const;

export const NAV_FOOTER = [
  { href: "/om-os", label: "Om os" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/vilkaar", label: "Vilkår" },
  { href: "/privatliv", label: "Privatliv" },
  { href: "/ansvarligt-spil", label: "Ansvarligt spil" },
] as const;

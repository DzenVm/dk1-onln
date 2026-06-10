# Guide til onlinekasino i Danmark

SSR-website bygget med **Next.js 16 (App Router)** og **React 19**. Dansk sprog,
målrettet det danske marked (Spillemyndigheden), klar til **Google Ads**.

Sitet er en dansk lokalisering af konceptet bag `pt1-onln` (Portugal → Danmark):
samme struktur og design, oversat indhold, danske myndigheder og betalingsmetoder.

## Funktioner

- **Server-side rendering** (App Router, server components — alle sider prerenderes til HTML).
- **100 % lokalt, ingen CDN** — system-fonts, lokal CSS/JS, ingen eksterne aktiver.
  Der indlæses ingen tredjepartsscripts, før brugeren giver samtykke.
- **Cookiesamtykke med knapper** (`components/CookieConsent.tsx`):
  *Accepter alle*, *Kun nødvendige* og *Tilpas indstillinger* (statistik/marketing).
  Valget gemmes i en cookie i 180 dage og styrer **Google Consent Mode v2**
  (`ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization`).
  Standard er *denied*, indtil brugeren accepterer — korrekt for Google Ads i EU.
- **SEO**: metadata, Open Graph, JSON-LD (Organization, FAQPage, BreadcrumbList),
  `robots.txt`, `sitemap.xml`, `manifest.webmanifest`.
- **Ansvarligt spil / 18+** gennemgående: ROFUS, StopSpillet, Spillemyndigheden.

## Sider

| Rute | Indhold |
| --- | --- |
| `/` | Forside: hero, fordele, tjekliste, FAQ, vaner |
| `/vurdering` | Redaktionel vurdering med tilbudskort (888, Betano) |
| `/videre/[slug]` | Bro-/mellemside (18+ påmindelse) før udbyderen — `noindex` |
| `/om-os`, `/kontakt`, `/vilkaar`, `/privatliv`, `/ansvarligt-spil` | Indholds- og juridiske sider |

## Tilpasning

- **Brand, URL, selskab, myndigheder:** `lib/site.ts`
- **Tilbud/udbydere:** `lib/offers.ts` (sæt `target` til dit affiliate-link)
- **Design:** `app/globals.css` (mørkt tema `#07060b` + guld)
- **Google Ads/Analytics:** indsæt dit gtag-/GTM-tag i `app/layout.tsx`.
  Consent Mode-standarderne er allerede sat; banneret opdaterer samtykket.

## Udvikling

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produktionsbuild
npm start        # kør produktionsbuild
```

## Deploy til Vercel

1. Importér repoet i Vercel (framework registreres automatisk som Next.js).
2. Sæt miljøvariablen `NEXT_PUBLIC_SITE_URL` til dit endelige domæne
   (f.eks. `https://marevgam.live`) — bruges til canonical-URL'er, sitemap og JSON-LD.
3. Deploy. Ingen yderligere konfiguration kræves.

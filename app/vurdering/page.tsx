import Link from "next/link";
import type { Metadata } from "next";
import { OFFERS } from "@/lib/offers";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vores vurdering af kasinoer",
  description:
    "Redaktionel sammenligning af onlinekasinoer med licens fra Spillemyndigheden i Danmark: 888.dk og Betano.dk. 18+.",
  alternates: { canonical: "/vurdering" },
};

export default function VurderingPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Vurdering", item: `${SITE.url}/vurdering` },
    ],
  };

  return (
    <section className="lz-sheet lz-sheet--narrow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="lz-wrap">
        <nav className="lz-crumb" aria-label="Brødkrumme">
          <Link href="/">Forside</Link> / Vurdering
        </nav>
        <h1 className="lz-h1">Vores vurdering af kasinoer</h1>
        <p className="lz-intro" style={{ maxWidth: "65ch" }}>
          Redaktionel og uafhængig sammenligning af udbydere med licens fra
          Spillemyndigheden. Vi offentliggør ikke faste kampagnebeløb: kampagnerne ændrer
          sig og har egne vilkår. Bekræft altid tilbuddet, licensen og betingelserne på det
          officielle site, før du spiller. At spille for penge indebærer mulige tab.{" "}
          <strong>18+.</strong>
        </p>

        <div className="lz-deck">
          {OFFERS.map((o) => (
            <article className="lz-cardx" key={o.slug}>
              <div className="lz-cardx__bar">
                <span className="lz-cardx__rank">{o.rank}</span>
                <span>{o.licenseLine}</span>
              </div>
              <div className="lz-cardx__body">
                <div className="lz-cardx__brand">
                  <span className="lz-cardx__logo" style={{ background: o.logoBg }}>
                    {o.logo}
                  </span>
                  <span className="lz-cardx__name">{o.name}</span>
                  <span className="lz-score">
                    <span className="lz-score__num">{o.score}</span>
                    <span className="lz-stars" aria-label={o.scoreLabel}>
                      ★★★★★
                    </span>
                  </span>
                </div>
                <div className="lz-cardx__side">
                  <table className="lz-table">
                    <tbody>
                      {o.rows.map((row) => (
                        <tr key={row.label}>
                          <th>{row.label}</th>
                          <td>{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="lz-terms">{o.terms}</p>
                  <Link
                    className="lz-btn lz-btn--primary lz-btn--block"
                    href={`/videre/${o.slug}`}
                  >
                    Se tilbud {o.name}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="lz-callout">
          <strong>Sådan giver vi point.</strong> Vi kombinerer fire faktorer, der anvendes
          ens for alle: licens og sikkerhed, bonussens rimelighed, udbetalingshastighed og
          mobiloplevelse. Rækkefølgen kan ændre sig, når udbydernes betingelser ændrer sig.
        </div>

        <p style={{ marginTop: "2rem" }}>
          <Link
            href="/"
            style={{ color: "var(--gold-light)", fontWeight: 600 }}
          >
            ← Tilbage til guiden
          </Link>
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om os",
  description:
    "Spilnord er et uafhængigt informationsmedie om onlinekasinoer med dansk licens. Vi er ikke en spiludbyder.",
  alternates: { canonical: "/om-os" },
};

export default function OmOsPage() {
  return (
    <section className="lz-sheet lz-sheet--narrow">
      <div className="lz-wrap">
        <nav className="lz-crumb" aria-label="Brødkrumme">
          <Link href="/">Forside</Link> / Om os
        </nav>
        <h1 className="lz-h1">Om {SITE.name}</h1>
        <div className="lz-prose">
          <p>
            {SITE.name} er et uafhængigt informationsmedie om onlinekasinoer med licens fra
            Spillemyndigheden i Danmark. Vi er ikke en spiludbyder, vi tager ikke imod
            væddemål og vi behandler ikke betalinger. Al spilaktivitet sker hos den
            licenserede udbyder.
          </p>

          <h2>Hvad vi gør</h2>
          <p>
            Vi forklarer, hvordan det lovlige marked fungerer: licens, betalingsmetoder,
            udbetalinger, bonusvilkår og — vigtigst af alt — ansvarligt spil. Målet er, at du
            kan træffe en informeret beslutning med koldt overlæg.
          </p>

          <h2>Sådan vurderer vi</h2>
          <p>
            Vores redaktionelle vurdering bygger på fire faktorer, der anvendes ens for alle
            udbydere: licens og sikkerhed, bonussens rimelighed, udbetalingshastighed og
            mobiloplevelse. Rækkefølgen kan ændre sig, når udbydernes betingelser ændrer sig.
          </p>

          <h2>Uafhængighed og finansiering</h2>
          <p>
            Nogle links på sitet kan være aflønnede (affiliate). Det påvirker ikke prisen for
            dig og fritager dig ikke fra at læse den valgte udbyders vilkår. Vi udvælger og
            beskriver udbydere ud fra de samme kriterier, uanset om et link er aflønnet.
          </p>

          <h2>Udgiver</h2>
          <p>
            {SITE.name} udgives af {SITE.company.legalName}, {SITE.company.address}. IČO{" "}
            {SITE.company.ico}.
          </p>
          <p>
            Spørgsmål? Skriv til os på{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> eller via{" "}
            <Link href="/kontakt">kontaktsiden</Link>.
          </p>

          <p style={{ marginTop: "1.5rem" }}>
            <strong>18+.</strong> Spil med omtanke. Har du brug for hjælp, så se{" "}
            <Link href="/ansvarligt-spil">Ansvarligt spil</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

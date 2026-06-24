import SmartLink from "@/components/SmartLink";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vilkår",
  description: "Vilkår for brug af sitet.",
  alternates: { canonical: "/vilkaar" },
};

export default function VilkaarPage() {
  return (
    <section className="lz-sheet lz-sheet--narrow">
      <div className="lz-wrap">
        <nav className="lz-crumb" aria-label="Brødkrumme">
          <SmartLink href="/">Forside</SmartLink> / Vilkår
        </nav>
        <h1 className="lz-h1">Vilkår for brug</h1>
        <div className="lz-prose">
          <p>
            Ved at bruge dette site accepterer du nedenstående vilkår. Læs dem, før du bruger
            sitet.
          </p>

          <h2>1. Formål og målgruppe</h2>
          <p>
            Dette site er et uafhængigt informationsmedie om onlinekasinoer med dansk licens.
            Indholdet er udelukkende til information og henvender sig til personer på 18 år og
            derover. Vi er ikke en spiludbyder, tager ikke imod væddemål og behandler ikke
            betalinger.
          </p>

          <h2>2. Ingen garanti</h2>
          <p>
            Kampagner, bonusser, betalingsmetoder og vilkår ændrer sig ofte. Vi bestræber os
            på at holde indholdet korrekt, men kan ikke garantere, at det altid er fuldstændigt
            eller aktuelt. De gældende oplysninger er altid dem, der står på udbyderens
            officielle site. Intet på sitet er et løfte om gevinst.
          </p>

          <h2>3. Eksterne links</h2>
          <p>
            Sitet indeholder links til tredjeparter. Nogle links kan være aflønnede
            (affiliate). Vi er ikke ansvarlige for indhold, vilkår eller praksis på eksterne
            sites. Læs altid udbyderens egne vilkår.
          </p>

          <h2>4. Ansvarligt spil</h2>
          <p>
            Spil indebærer en risiko for tab og kan blive vanedannende. Spil kun for penge, du
            har råd til at miste. Se <SmartLink href="/ansvarligt-spil">Ansvarligt spil</SmartLink> for
            værktøjer og hjælpelinjer, herunder {SITE.authorities.help.label} og{" "}
            {SITE.authorities.selfExclusion.label}.
          </p>

          <h2>5. Ansvarsbegrænsning</h2>
          <p>
            Udgiveren kan ikke holdes ansvarlig for tab eller skade, der opstår som følge af
            brug af sitet eller af beslutninger truffet på baggrund af indholdet.
          </p>

          <h2>6. Ændringer</h2>
          <p>
            Vi kan opdatere disse vilkår. Den seneste version gælder altid og offentliggøres
            på denne side.
          </p>

          <h2>7. Kontakt</h2>
          <p>
            Spørgsmål til vilkårene? Skriv til{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

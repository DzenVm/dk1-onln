import SmartLink from "@/components/SmartLink";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ansvarligt spil",
  description:
    "Værktøjer og hjælpelinjer for ansvarligt spil i Danmark: ROFUS, StopSpillet og Spillemyndigheden. 18+.",
  alternates: { canonical: "/ansvarligt-spil" },
};

export default function AnsvarligtSpilPage() {
  const { regulator, help, selfExclusion, treatment } = SITE.authorities;
  return (
    <section className="lz-sheet lz-sheet--narrow">
      <div className="lz-wrap">
        <nav className="lz-crumb" aria-label="Brødkrumme">
          <SmartLink href="/">Forside</SmartLink> / Ansvarligt spil
        </nav>
        <h1 className="lz-h1">Ansvarligt spil</h1>
        <div className="lz-prose">
          <p>
            Spil skal være underholdning — ikke en måde at tjene penge på. At spille for
            rigtige penge indebærer altid en risiko for tab. Behandl kasinoet som en
            fritidsudgift med en fast grænse. <strong>Kun 18+.</strong>
          </p>

          <h2>Sæt grænser, før du spiller</h2>
          <ul>
            <li>Fastsæt et budget i kroner og hold dig til det.</li>
            <li>Sæt indbetalings-, tabs- og tidsgrænser i din konto hos udbyderen.</li>
            <li>Jagt aldrig tab — at øge indsatsen for at vinde tilbage gør det værre.</li>
            <li>Hold pauser, og spil aldrig påvirket eller i affekt.</li>
          </ul>

          <h2>Advarselstegn</h2>
          <p>
            Søg hjælp tidligt, hvis du genkender ét eller flere af disse tegn: du skjuler dit
            spil, låner penge for at spille, bruger mere end planlagt, eller svigter arbejde,
            søvn eller relationer på grund af spil.
          </p>

          <h2>Selvudelukkelse (ROFUS)</h2>
          <p>
            {selfExclusion.label} er Spillemyndighedens register, hvor du frivilligt kan
            udelukke dig fra alt spil med dansk licens — midlertidigt eller permanent. Du kan
            tilmelde dig på{" "}
            <a href={selfExclusion.url} target="_blank" rel="noopener noreferrer">
              rofus.nu
            </a>
            .
          </p>

          <h2>Få hjælp</h2>
          <ul>
            <li>
              <a href={help.url} target="_blank" rel="noopener noreferrer">
                {help.label}
              </a>{" "}
              — Spillemyndighedens nationale, gratis og anonyme hjælpelinje for
              spilafhængighed. Ring <a href={help.phoneHref}>tlf. {help.phone}</a> (alle
              hverdage) eller brug chatten på stopspillet.dk.
            </li>
            <li>
              <a href={selfExclusion.url} target="_blank" rel="noopener noreferrer">
                {selfExclusion.label}
              </a>{" "}
              — Register Over Frivilligt Udelukkede Spillere; frivillig selvudelukkelse fra
              alt spil med dansk licens, midlertidigt eller permanent.
            </li>
            <li>
              <a href={treatment.url} target="_blank" rel="noopener noreferrer">
                {treatment.label}
              </a>{" "}
              — gratis og professionel behandling af ludomani for spillere og pårørende.
            </li>
            <li>
              <a href={regulator.url} target="_blank" rel="noopener noreferrer">
                {regulator.label}
              </a>{" "}
              — den danske spillemyndighed; her kan du tjekke licenser.
            </li>
          </ul>

          <p style={{ marginTop: "1.5rem" }}>
            Hjælpen er gratis og fortrolig. Mindreårige må ikke spille. Bed om hjælp, før
            situationen forværres.
          </p>
        </div>
      </div>
    </section>
  );
}

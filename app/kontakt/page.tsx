import SmartLink from "@/components/SmartLink";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt redaktionen.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <section className="lz-sheet lz-sheet--narrow">
      <div className="lz-wrap">
        <nav className="lz-crumb" aria-label="Brødkrumme">
          <SmartLink href="/">Forside</SmartLink> / Kontakt
        </nav>
        <h1 className="lz-h1">Kontakt</h1>
        <div className="lz-prose">
          <p>
            Har du en rettelse, et spørgsmål om indholdet eller en henvendelse om samarbejde?
            Skriv til redaktionen — vi svarer så hurtigt, vi kan.
          </p>

          <h2>E-mail</h2>
          <p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>

          <h2>Udgiver</h2>
          <p>
            {SITE.company.legalName}
            <br />
            {SITE.company.address}
            <br />
            IČO {SITE.company.ico}
          </p>

          <h2>Vigtigt</h2>
          <p>
            Vi er et informationsmedie og kan ikke hjælpe med konti, indbetalinger,
            udbetalinger eller bonusser hos en udbyder. Den slags skal rettes til udbyderens
            egen kundeservice. Har du brug for hjælp med spilrelaterede problemer, så kontakt{" "}
            <a href={SITE.authorities.help.url} target="_blank" rel="noopener noreferrer">
              {SITE.authorities.help.label}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

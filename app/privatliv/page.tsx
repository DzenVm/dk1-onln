import SmartLink from "@/components/SmartLink";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privatlivspolitik",
  description: "Sådan behandler sitet cookies og personoplysninger.",
  alternates: { canonical: "/privatliv" },
};

export default function PrivatlivPage() {
  return (
    <section className="lz-sheet lz-sheet--narrow">
      <div className="lz-wrap">
        <nav className="lz-crumb" aria-label="Brødkrumme">
          <SmartLink href="/">Forside</SmartLink> / Privatliv
        </nav>
        <h1 className="lz-h1">Privatlivspolitik</h1>
        <div className="lz-prose">
          <p>
            Denne politik beskriver, hvordan vi behandler oplysninger og bruger
            cookies. Vi behandler så få oplysninger som muligt og kun med et klart formål.
          </p>

          <h2>Dataansvarlig</h2>
          <p>
            {SITE.company.legalName}, {SITE.company.address}. Kontakt:{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2>Cookies</h2>
          <p>Vi bruger tre kategorier af cookies:</p>
          <ul>
            <li>
              <strong>Nødvendige</strong> — kræves for, at sitet virker og er sikkert. De
              kan ikke fravælges. Vi gemmer bl.a. dit cookievalg.
            </li>
            <li>
              <strong>Statistik</strong> — anonyme målinger af, hvordan sitet bruges, så vi
              kan forbedre det. Sættes kun med dit samtykke.
            </li>
            <li>
              <strong>Marketing</strong> — måling af annoncers effekt og relevans, bl.a. via
              Google Ads. Sættes kun med dit samtykke.
            </li>
          </ul>
          <p>
            Statistik- og marketingcookies aktiveres først, når du giver samtykke i
            cookiebanneret. Vi bruger Google Consent Mode, så ingen sporing sker, før du har
            accepteret. Du kan til enhver tid ændre eller trække dit samtykke tilbage via
            knappen »Cookieindstillinger« nederst til venstre.
          </p>

          <h2>Dine rettigheder</h2>
          <p>
            Efter databeskyttelsesforordningen (GDPR) har du ret til indsigt, berigtigelse,
            sletning og begrænsning samt ret til at gøre indsigelse. Skriv til{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> for at udøve dine rettigheder.
            Du kan også klage til Datatilsynet.
          </p>

          <h2>Eksterne sites</h2>
          <p>
            Når du klikker videre til en udbyder, gælder dennes egen privatlivspolitik. Vi er
            ikke ansvarlige for tredjeparters behandling af dine oplysninger.
          </p>

          <h2>Ændringer</h2>
          <p>
            Vi kan opdatere politikken. Den seneste version offentliggøres altid på denne
            side.
          </p>
        </div>
      </div>
    </section>
  );
}

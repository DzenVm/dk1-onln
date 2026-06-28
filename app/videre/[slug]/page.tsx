import SmartLink from "@/components/SmartLink";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOffer, OFFERS } from "@/lib/offers";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return OFFERS.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOffer(slug);
  return {
    title: offer ? `Videre til ${offer.name}` : "Videre",
    robots: { index: true, follow: true },
    alternates: { canonical: `/videre/${slug}` },
  };
}

export default async function BridgePage({ params }: Params) {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) notFound();

  return (
    <section className="lz-sheet lz-sheet--narrow">
      <div className="lz-wrap" style={{ textAlign: "center" }}>
        <span className="lz-eyebrow">Du forlader sitet</span>
        <h1 className="lz-h1">Videre til {offer.name}</h1>
        <p className="lz-intro" style={{ margin: "1rem auto 0", maxWidth: "54ch" }}>
          Du sendes nu til {offer.name}s officielle, danske site. Registrering, indbetaling
          og spil sker udelukkende hos udbyderen — vi behandler ikke betalinger. Læs
          udbyderens vilkår, og bekræft licensen hos Spillemyndigheden, før du spiller.
        </p>

        <div className="lz-callout" style={{ textAlign: "left", margin: "1.6rem auto", maxWidth: "54ch" }}>
          <strong>Husk:</strong> Spil er for personer over 18 år og skal være underholdning,
          ikke en indtægtskilde. Fastsæt et budget på forhånd. Har du brug for hjælp, så
          kontakt <a href="https://www.stopspillet.dk" target="_blank" rel="noopener noreferrer">StopSpillet</a>{" "}
          eller registrér dig i <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer">ROFUS</a>.
        </div>

        <div className="lz-hero__cta">
          <a
            className="lz-btn lz-btn--primary"
            href={offer.target}
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            Fortsæt til {offer.name}
          </a>
          <SmartLink className="lz-btn lz-btn--ghost" href="/vurdering">
            Tilbage til vurderingen
          </SmartLink>
        </div>

        <p className="lz-hero__note">{offer.terms}</p>
      </div>
    </section>
  );
}

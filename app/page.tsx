import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide til onlinekasino i Danmark",
  alternates: { canonical: "/" },
};

const FEATURES = [
  {
    title: "Licens kan kontrolleres",
    body: "Før du indbetaler, så sammenhold udbyderens selskabsnavn med Spillemyndighedens offentlige register. De, der arbejder inden for loven, skjuler ikke licensnummeret.",
  },
  {
    title: "Midler og data beskyttet",
    body: "Adskilte konti, GDPR og eksterne revisioner er en del af den regulerede pakke — men oplys aldrig PIN eller bekræftelseskoder til andre.",
  },
  {
    title: "Grænser inden for rækkevidde",
    body: "Pauser, indbetalingslofter og selvudelukkelse via ROFUS er rettigheder. Find disse muligheder i kontoområdet, før du hæver indsatserne.",
  },
  {
    title: "Vilkår på klart dansk",
    body: "Bonus, gennemspilskrav (rollover) og betalingsundtagelser skal være skrevet forståeligt. Lyder noget tvetydigt, så bed supporten om en forklaring, før du accepterer.",
  },
];

const CHECKLIST = [
  {
    h: "Spillemyndighedens rammer.",
    p: "Spillemyndigheden afgør, hvem der må henvende sig til spillere i Danmark. At sammenholde selskabsnavnet med den officielle liste er det første filter.",
  },
  {
    h: "En reelt lokal oplevelse.",
    p: "Udbydere rettet mod det danske marked viser typisk priser i kroner, dansksproget brugerflade og ofte MobilePay eller Dankort — tjek det i indbetalingsvinduet.",
  },
  {
    h: "Kampagner og det med småt.",
    p: "Iøjnefaldende procenter skjuler korte frister, udelukkede spil og indsatslofter under gennemspilskravet. Gem PDF'en med vilkår, så undgår du tvivl senere.",
  },
  {
    h: "Slots, borde og live.",
    p: "Udvalget varierer med udbydernes licenser. Den oplyste RTP er en statistisk indikator, ikke et løfte om gevinst; i live-kasinoet er tempoet og minimumsindsatserne anderledes.",
  },
  {
    h: "Hæv dine gevinster.",
    p: "Identitetsverifikation, historik for ansvarligt spil og modtagerbank påvirker fristerne. Brug altid rigtige oplysninger ved registrering, så den første udbetaling ikke blokeres.",
  },
  {
    h: "Uden for det lovlige kort.",
    p: "Tilbud med aggressive kryptobonusser eller uigennemsigtige licenser risikerer at stå uden national beskyttelse. Denne guide fokuserer på det, der er gennemsigtigt over for dansk lov.",
  },
];

const FAQ = [
  {
    q: "Hvad er egentlig et »lovligt« kasino i Danmark?",
    a: "Det er en fjernspiludbyder med gyldig licens fra Spillemyndigheden til det danske publikum. Tjek altid på myndighedens portal og det officielle domæne, før du deler dokumenter. Uden for dette kredsløb er forbrugerbeskyttelsen langt svagere.",
  },
  {
    q: "Slots, automatborde og live: hvad er forskellen i praksis?",
    a: "Slots og RNG følger faste udbetalingstabeller i softwaren; live-kasino filmer rigtige croupierer, med langsommere tempo og andre minimumsindsatser. I enhver variant er resultatet tilfældigt — der findes ingen ufejlbarlig formel. RTP er et teoretisk langtidsgennemsnit.",
  },
  {
    q: "Bonus, free spins og gennemspil: hvor er det med småt?",
    a: "Find udløbsdatoen, de spil der ikke tæller med, den maksimale indsats under gennemspil og om indbetalingsmetoden diskvalificerer tilbuddet. At sige nej til bonuspakken er stadig en gyldig mulighed, hvis du foretrækker kun at spille med rigtigt saldo.",
  },
  {
    q: "MobilePay, Dankort og den første udbetaling: hvad kan jeg forvente?",
    a: "Det er almindeligt at kombinere kort, bankoverførsel og lokale løsninger. Den første udbetaling kan tage tid, mens udbyderen afslutter identitetsverifikationen. Send aldrig SMS-koder eller kortoplysninger til »assistenter« på sociale medier.",
  },
  {
    q: "App eller browser: ændrer reglerne sig?",
    a: "Konto, grænser for ansvarligt spil og juridiske vilkår gælder på samme måde. Foretræk private netværk og skærmlås; offentligt wi-fi er ikke stedet at indtaste følsomme oplysninger.",
  },
  {
    q: "Samme brand har sport og kasino: kan jeg kombinere bonusser?",
    a: "Ikke altid. Fælles saldo betyder ikke fælles regler: free bets, minimumsodds og bidrag til gennemspil er forskellige. Åbn den rigtige sektion af kampagnen, før du accepterer.",
  },
  {
    q: "Er dette site en udbyder, eller behandler I betalinger?",
    a: "Nej. Vi udgiver analyser og links; registrering, indbetaling og spil sker udelukkende på det licenserede site. Nogle links kan være aflønnede — det fritager dig ikke fra at læse den valgte udbyders aftale.",
  },
  {
    q: "Hvor søger jeg hjælp, hvis jeg mister kontrollen?",
    a: "Brug kontoens grænser, tal med udbyderens support og kontakt uafhængige linjer for ansvarligt spil som StopSpillet. Hjælpen er gratis og fortrolig. Mindreårige må ikke spille.",
  },
];

const HABITS = [
  {
    n: "01",
    h: "Lukket budget",
    p: "Fastsæt et loft i kroner, før du går ind i lobbyen, og behandl kasinoet som en fritidsudgift, aldrig som en indtægtskilde.",
  },
  {
    n: "02",
    h: "Uret i sigte",
    p: "Alarmer på 30 til 45 minutter afbryder stille maratonsessioner foran skærmen.",
  },
  {
    n: "03",
    h: "Længere pause",
    p: "Har du brug for en lang pause, så følg udbyderens flow for selvudelukkelse og registrér dig i ROFUS hos Spillemyndigheden.",
  },
  {
    n: "04",
    h: "Tal tidligt",
    p: "Familie, læge eller anonyme linjer hjælper, når spillet fylder i samtaler, søvn eller økonomi. Bed om hjælp, før situationen forværres.",
  },
];

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      {/* Hero */}
      <section className="lz-sheet lz-hero">
        <div className="lz-wrap lz-hero__grid">
          <div className="lz-hero__copy">
            <span className="lz-eyebrow">Lovligt marked · Spillemyndigheden · 2026</span>
            <h1 className="lz-h1">Onlinekasinoer i Danmark</h1>
            <p className="lz-intro">
              Vi samler det væsentlige om udbydere med licens fra Spillemyndigheden —
              kampagner, udbetalinger og ansvarligt spil — så du kan beslutte med koldt
              overlæg. Indhold kun for personer over 18 år.
            </p>
            <div className="lz-hero__cta">
              <Link className="lz-btn lz-btn--primary" href="/vurdering">
                Kom godt i gang
              </Link>
              <a className="lz-btn lz-btn--ghost" href="#guide">
                Læs guiden
              </a>
            </div>
            <p className="lz-hero__note">
              Vi er et uafhængigt informationsmedie, ikke en spiludbyder.
            </p>
          </div>
          <figure className="lz-hero__media" aria-hidden="true">
            <picture>
              <source srcSet="/images/hero-characters.webp" type="image/webp" />
              <img
                src="/images/hero-characters.png"
                alt=""
                width={900}
                height={852}
                loading="eager"
                decoding="async"
              />
            </picture>
          </figure>
        </div>
      </section>

      {/* Features */}
      <section className="lz-section" id="guide">
        <div className="lz-wrap">
          <div className="lz-section__head">
            <h2 className="lz-h2">Hvad ændrer sig, når kasinoet har dansk licens</h2>
            <p className="lz-lead">
              Spillemyndighedens tilsyn stiller klare krav: fra reklame til klagebehandling
              er rammen en anden end på »grå« sider.
            </p>
          </div>
          <div className="lz-grid">
            {FEATURES.map((f) => (
              <article className="lz-feature" key={f.title}>
                <div className="lz-feature__icon" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="lz-feature__h">{f.title}</h3>
                <p className="lz-feature__p">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="lz-section">
        <div className="lz-wrap">
          <div className="lz-section__head">
            <h2 className="lz-h2">Tjekliste før du opretter konto</h2>
            <p className="lz-lead">
              Redaktionel oversigt — erstatter hverken tilsynsmyndigheden eller den aftale,
              du indgår med udbyderen.
            </p>
          </div>
          <ol className="lz-check">
            {CHECKLIST.map((c) => (
              <li className="lz-check__item" key={c.h}>
                <strong>{c.h}</strong>
                {c.p}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="lz-section">
        <div className="lz-wrap">
          <div className="lz-section__head">
            <h2 className="lz-h2">Almindelige spørgsmål om onlinekasino i Danmark</h2>
            <p className="lz-lead">
              Svar i journalistisk tone til dig, der søger på licenseret kasino,
              registreringsbonus eller lovlige slots. Denne guide driver hverken spil eller
              pung og lover ikke gevinster. At spille for rigtige penge indebærer mulige tab.
              Kun 18+.
            </p>
          </div>
          <div className="lz-faq">
            {FAQ.map((item) => (
              <details className="lz-faq__item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <div className="lz-callout">
            Udtryk som »top-kasino« skifter betydning alt efter ugens kampagne. Brug{" "}
            <Link href="/vurdering">vores vurdering</Link> som rettesnor og bekræft værdierne
            hos udbyderen, før du spiller.
          </div>
        </div>
      </section>

      {/* Habits */}
      <section className="lz-section">
        <div className="lz-wrap">
          <div className="lz-section__head">
            <h2 className="lz-h2">Fire vaner som Spillemyndigheden også anbefaler</h2>
            <p className="lz-lead">
              Små rutiner mindsker impulsivitet — de erstatter ikke de officielle værktøjer
              til grænser og udelukkelse.
            </p>
          </div>
          <div className="lz-habits">
            {HABITS.map((h) => (
              <article className="lz-habit" key={h.n}>
                <div className="lz-habit__num">{h.n}</div>
                <h3 className="lz-habit__h">{h.h}</h3>
                <p className="lz-habit__p">{h.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}

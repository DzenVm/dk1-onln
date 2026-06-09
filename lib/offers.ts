// Redaktionelle data for vurderingssiden og bro-siderne (/videre/[slug]).
// Beløb og kampagner er bevidst ikke fastlåst — de bekræftes hos udbyderen.

export type Offer = {
  slug: string;
  rank: number;
  name: string;
  logo: string;
  logoBg: string;
  score: string;
  scoreLabel: string;
  licenseLine: string;
  // Den officielle destination. Erstat med dit affiliate-link når det er klar.
  target: string;
  rows: { label: string; value: string }[];
  terms: string;
};

export const OFFERS: Offer[] = [
  {
    slug: "888",
    rank: 1,
    name: "888 Casino",
    logo: "888",
    logoBg: "#2d9f78",
    score: "4.7",
    scoreLabel: "Vurdering 4,7 ud af 5",
    licenseLine: "Licens fra Spillemyndigheden (domæne 888.dk)",
    target: "https://www.888.dk",
    rows: [
      { label: "Tilbud", value: "Velkomsttilbud til nye registreringer" },
      { label: "Betalinger", value: "MobilePay · Dankort · Visa · Mastercard" },
      { label: "Udbetaling", value: "Typisk 1–3 hverdage" },
      { label: "Udvalg", value: "Slots, roulette, blackjack og live-kasino" },
      { label: "Licens", value: "Licens fra Spillemyndigheden (domæne 888.dk)" },
    ],
    terms:
      "Beløb og betingelser fastsættes på det officielle site og er underlagt gennemspil og verifikation. Vilkår gælder. 18+.",
  },
  {
    slug: "betano",
    rank: 2,
    name: "Betano",
    logo: "Bet",
    logoBg: "#c9a44c",
    score: "4.6",
    scoreLabel: "Vurdering 4,6 ud af 5",
    licenseLine: "Licens fra Spillemyndigheden (domæne betano.dk)",
    target: "https://www.betano.dk",
    rows: [
      { label: "Tilbud", value: "Kasino-registreringskampagne" },
      { label: "Betalinger", value: "MobilePay · Dankort · Bankoverførsel" },
      { label: "Udbetaling", value: "Typisk 24–48 timer" },
      { label: "Udvalg", value: "Kasino, slots og live (også sport under samme brand)" },
      { label: "Licens", value: "Licens fra Spillemyndigheden (domæne betano.dk)" },
    ],
    terms:
      "Se det aktuelle beløb og de fulde vilkår på det officielle site, før du accepterer. Vilkår gælder. 18+.",
  },
];

export function getOffer(slug: string): Offer | undefined {
  return OFFERS.find((o) => o.slug === slug);
}

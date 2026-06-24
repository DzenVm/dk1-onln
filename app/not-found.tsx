import SmartLink from "@/components/SmartLink";

export default function NotFound() {
  return (
    <section className="lz-sheet">
      <div className="lz-wrap" style={{ textAlign: "center", paddingTop: "3rem" }}>
        <span className="lz-eyebrow">Fejl 404</span>
        <h1 className="lz-h1">Siden blev ikke fundet</h1>
        <p
          className="lz-intro"
          style={{ margin: "1rem auto 1.5rem", maxWidth: "48ch" }}
        >
          Den side, du leder efter, findes ikke eller er blevet flyttet.
        </p>
        <SmartLink className="lz-btn lz-btn--primary" href="/">
          Tilbage til forsiden
        </SmartLink>
      </div>
    </section>
  );
}

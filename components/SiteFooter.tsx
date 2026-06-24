import SmartLink from "@/components/SmartLink";
import { SITE, NAV_FOOTER } from "@/lib/site";

export default function SiteFooter() {
  const { regulator, help, selfExclusion, treatment } = SITE.authorities;
  const c = SITE.company;
  return (
    <footer className="lz-foot" aria-label="Sidefod">
      <div className="lz-wrap">
        <div className="lz-foot__grid">
          <div>
            <h2 className="lz-foot__h">Juridisk meddelelse</h2>
            <p className="lz-foot__p">
              Dette site henvender sig til personer over 18 år. Vi udgiver informativt
              indhold; vi modtager ikke væddemål på dette domæne. Søg professionel hjælp,
              hvis spillet ikke længere kan styres.
            </p>
          </div>
          <div>
            <h2 className="lz-foot__h">Ansvarligt spil</h2>
            <p className="lz-foot__p">
              Fastsæt et udgiftsloft og en varighed for sessionen, før du spiller på et
              andet site. Jagt ikke tab. Til en lang pause kan du bruge udbyderens lovlige
              værktøjer og de uafhængige linjer.
            </p>
          </div>
          <div>
            <h2 className="lz-foot__h">Advarselstegn</h2>
            <p className="lz-foot__p">
              At skjule væddemål, låne penge for at spille eller svigte forpligtelser på
              grund af spil fortjener en samtale tidligt. De angivne kontakter er gratis og
              fortrolige.
            </p>
          </div>
        </div>

        <p className="lz-foot__tag">
          Spil kan blive til afhængighed — behandl kasinoet som fritid med en grænse, aldrig
          som indtægt.
        </p>

        <div className="lz-foot__rg">
          <p
            className="lz-foot__rg-inner"
            role="group"
            aria-label="Aldersgrænse og officielle hjælperessourcer"
          >
            <span className="lz-foot__age" aria-label="Kun for personer over 18 år">
              18+
            </span>
            <span className="lz-foot__sep" aria-hidden="true">
              |
            </span>
            <a href={regulator.url} target="_blank" rel="noopener noreferrer">
              {regulator.label}
            </a>
            <span className="lz-foot__sep" aria-hidden="true">
              |
            </span>
            <a href={help.url} target="_blank" rel="noopener noreferrer">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.65"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9.25" />
                <circle cx="12" cy="9" r="2.15" fill="currentColor" stroke="none" />
                <path d="M7.5 18.5c.85-2.6 2.35-4 4.5-4s3.65 1.4 4.5 4" />
              </svg>
              <span>{help.label}</span>
            </a>
            <span className="lz-foot__sep" aria-hidden="true">
              |
            </span>
            <a href={selfExclusion.url} target="_blank" rel="noopener noreferrer">
              {selfExclusion.label}
            </a>
            <span className="lz-foot__sep" aria-hidden="true">
              |
            </span>
            <a href={treatment.url} target="_blank" rel="noopener noreferrer">
              {treatment.label}
            </a>
          </p>
          <p className="lz-foot__rg-text">
            Hjælpelinjen {help.label}:{" "}
            <a href={help.phoneHref}>tlf. {help.phone}</a> (Spillemyndighedens hjælpelinje
            mod spilafhængighed) ·{" "}
            <a href={selfExclusion.url} target="_blank" rel="noopener noreferrer">
              {selfExclusion.label}
            </a>{" "}
            — Register Over Frivilligt Udelukkede Spillere ·{" "}
            <a href={treatment.url} target="_blank" rel="noopener noreferrer">
              {treatment.label}
            </a>{" "}
            — gratis behandling af ludomani. Spil med omtanke.
          </p>
        </div>

        <div className="lz-foot__legal">
          <p>
            © {new Date().getFullYear()} — {c.legalName}, {c.address}. IČO {c.ico}.
            Alle rettigheder forbeholdes.
          </p>
          <nav className="lz-foot__links" aria-label="Links i sidefod">
            {NAV_FOOTER.map((item) => (
              <SmartLink key={item.href} href={item.href}>
                {item.label}
              </SmartLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

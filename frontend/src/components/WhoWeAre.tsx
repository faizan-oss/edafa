import { whoWeAre } from "../content";

export function WhoWeAre() {
  return (
    <section className="sec" id="who" aria-labelledby="who-heading">
      <div className="wrap who-grid">
        <div>
          <span className="tag">{whoWeAre.section}</span>
          <h2 id="who-heading">{whoWeAre.heading}</h2>
        </div>
        <div>
          <p>{whoWeAre.body}</p>
          <div className="stack" aria-label="What we work with">
            {whoWeAre.stack.map((item) => (
              <div key={`${item.name}-${item.label}`}>
                <b>{item.name}</b>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

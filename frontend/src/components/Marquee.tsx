import { marqueeItems } from "../content";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            <span className="plus">+</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

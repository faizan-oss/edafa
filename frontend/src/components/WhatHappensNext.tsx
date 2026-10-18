import { useEffect, useRef } from "react";
import { whatHappensNext } from "../content";

type WhatHappensNextProps = {
  onTellUs: () => void;
};

export function WhatHappensNext({ onTellUs }: WhatHappensNextProps) {
  const trackerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tracker = trackerRef.current;
    if (!tracker) {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      tracker.classList.add("go");
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tracker.classList.add("go");
            obs.disconnect();
          }
        });
      },
      { threshold: 0.45 },
    );

    observer.observe(tracker);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sec next" id="next" aria-labelledby="next-heading">
      <div className="wrap">
        <div className="next-head">
          <div>
            <span className="tag">{whatHappensNext.section}</span>
            <h2 id="next-heading">{whatHappensNext.heading}</h2>
          </div>
          <p className="next-lede">{whatHappensNext.lede}</p>
        </div>

        <div className="tracker" id="tracker" ref={trackerRef}>
          <div className="rail" aria-hidden="true">
            <i className="fill" />
            <i className="runner" />
          </div>
          <ol>
            {whatHappensNext.stops.map((stop) => (
              <li key={stop.title}>
                <span className="dot" />
                <span className="when">{stop.when}</span>
                <h3>{stop.title}</h3>
                <p>{stop.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="dontneed">
          <p className="dn-label">{whatHappensNext.dontNeed.label}</p>
          <ul>
            {whatHappensNext.dontNeed.items.map((item) => (
              <li key={item}>
                <s>{item}</s>
              </li>
            ))}
          </ul>
          <button type="button" className="btn" onClick={onTellUs}>
            {whatHappensNext.cta}
          </button>
        </div>
      </div>
    </section>
  );
}

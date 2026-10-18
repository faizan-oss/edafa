import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  doorOrder,
  doors,
  serviceImages,
  type DoorKey,
} from "../content";
import { EmNote } from "./EmNote";
import { ServicePicture } from "./ServicePicture";
import { VerdictGlyph } from "./VerdictGlyph";

type DoorsProps = {
  selected: DoorKey;
  onSelect: (key: DoorKey) => void;
};

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

function doorCopy(key: DoorKey) {
  return doors[key];
}

export function Doors({ selected, onSelect }: DoorsProps) {
  const stackRef = useRef<HTMLDivElement>(null);
  const selectedIndex = doorOrder.indexOf(selected);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileStack = window.matchMedia("(max-width: 960px)");
    let ticking = false;

    const stackFx = () => {
      ticking = false;
      const items = [...stack.querySelectorAll<HTMLElement>(":scope > .stack-item")];

      items.forEach((item, index) => {
        const card = item.firstElementChild as HTMLElement | null;
        const next = items[index + 1];
        if (!card) {
          return;
        }

        if (!next || reduce || !mobileStack.matches) {
          card.style.filter = "";
          card.style.transform = "";
          return;
        }

        const rect = card.getBoundingClientRect();
        const nextRect = next.getBoundingClientRect();
        const overlap = Math.max(0, Math.min(1, (rect.bottom - nextRect.top) / rect.height));
        card.style.filter =
          overlap > 0
            ? `blur(${(overlap * 9).toFixed(2)}px) brightness(${(1 - overlap * 0.35).toFixed(3)})`
            : "";
        card.style.transform = overlap > 0 ? `scale(${(1 - overlap * 0.05).toFixed(4)})` : "";
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(stackFx);
      }
    };

    const onChange = () => stackFx();

    stackFx();
    window.addEventListener("scroll", onScroll, { passive: true });
    mobileStack.addEventListener("change", onChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      mobileStack.removeEventListener("change", onChange);
    };
  }, []);

  function choose(key: DoorKey, focus = false) {
    onSelect(key);
    window.plausible?.("service_pick", { props: { service: doorCopy(key).title } });
    if (focus) {
      document.getElementById(`pt-${doorOrder.indexOf(key)}`)?.focus();
    }
  }

  function onTabKey(event: React.KeyboardEvent, index: number) {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      choose(doorOrder[(index + 1) % doorOrder.length], true);
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      choose(doorOrder[(index + doorOrder.length - 1) % doorOrder.length], true);
    }
  }

  return (
    <section className="sec" id="doors" style={{ paddingTop: "clamp(2rem, 5vw, 3rem)" }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="tag">{doors.section}</span>
            <h2>{doors.heading}</h2>
          </div>
        </div>

        <div className="picker" id="picker">
          <div className="pick-list" role="tablist" aria-label="Services" aria-orientation="vertical">
            {doorOrder.map((key, index) => {
              const copy = doorCopy(key);
              const on = key === selected;
              return (
                <button
                  key={key}
                  type="button"
                  className={`pick${on ? " on" : ""}`}
                  role="tab"
                  id={`pt-${index}`}
                  aria-selected={on}
                  aria-controls={`pp-${index}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => choose(key)}
                  onKeyDown={(event) => onTabKey(event, index)}
                >
                  <span className="pt">
                    <span className="tag">{copy.tag}</span>
                    <span className="pn">{copy.title}</span>
                    <span className="pl">{copy.line}</span>
                  </span>
                  <VerdictGlyph as="i" />
                </button>
              );
            })}
            <p className="pick-note">{doors.closing}</p>
          </div>

          <div className="pick-stage">
            {doorOrder.map((key, index) => {
              const copy = doorCopy(key);
              const on = key === selected;
              return (
                <article
                  key={key}
                  className={`pane${on ? " on" : ""}`}
                  role="tabpanel"
                  id={`pp-${index}`}
                  aria-labelledby={`pt-${index}`}
                >
                  <div className="pane-img">
                    <ServicePicture
                      image={serviceImages[key]}
                      sizes="(min-width: 961px) 760px, 92vw"
                      loading={index === selectedIndex ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="pane-body">
                    <ul>
                      {copy.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <p className="note">
                      <EmNote text={copy.footer} em={copy.footerEm} />
                    </p>
                    <Link className="btn" to={copy.href}>
                      {copy.cta}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="stack-list" ref={stackRef}>
          {doorOrder.map((key, index) => {
            const copy = doorCopy(key);
            return (
              <div key={key} className="stack-item" style={{ ["--i" as string]: index }}>
                <article className="scard" id={key === "build" ? "build-door" : undefined}>
                  <div className="txt">
                    <span className="tag">{copy.tag}</span>
                    <h3>{copy.title}</h3>
                    <p className="who">{copy.line}</p>
                    <ul>
                      {copy.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <p className="note">
                      <EmNote text={copy.footer} em={copy.footerEm} />
                    </p>
                    <Link className="btn" to={copy.href}>
                      {copy.cta}
                    </Link>
                  </div>
                  <div className="img">
                    <ServicePicture
                      image={serviceImages[key]}
                      sizes="(max-width: 960px) 92vw, 540px"
                    />
                  </div>
                </article>
              </div>
            );
          })}
        </div>
        <p className="doors-note">{doors.closing}</p>
      </div>
    </section>
  );
}

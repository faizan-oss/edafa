import { useEffect, useRef, useState } from "react";
import { beforeYouHirePage } from "../../byhuContent";

type IndexItem = (typeof beforeYouHirePage.index)[number];

type ByhuIndexProps = {
  items: readonly IndexItem[];
};

export function ByhuIndex({ items }: ByhuIndexProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const id = entry.target.id;
          setActiveId(id);

          if (window.innerWidth <= 900) {
            const link = linkRefs.current.get(id);
            link?.scrollIntoView({
              block: "nearest",
              inline: "center",
              behavior: reduce ? "auto" : "smooth",
            });
          }
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="byhu-index" aria-label="On this page">
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeId === item.id ? "is-on" : undefined}
              ref={(node) => {
                if (node) {
                  linkRefs.current.set(item.id, node);
                } else {
                  linkRefs.current.delete(item.id);
                }
              }}
            >
              <span className="n">{item.number}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

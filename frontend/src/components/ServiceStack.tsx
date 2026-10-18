import { useEffect, useRef } from "react";

type ServiceStackProps = {
  children: React.ReactNode;
};

/** Sticky stack with blur/scale on overlap. Gated to ≤960px, matching the landing prototype. */
export function ServiceStack({ children }: ServiceStackProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stack = ref.current;
    if (!stack) {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileStack = window.matchMedia("(max-width: 960px)");
    let ticking = false;

    const stackFx = () => {
      ticking = false;
      const items = [...stack.querySelectorAll<HTMLElement>(":scope > .service-stack-item")];

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
        card.style.transformOrigin = "50% 0";
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(stackFx);
      }
    };

    stackFx();
    window.addEventListener("scroll", onScroll, { passive: true });
    mobileStack.addEventListener("change", stackFx);

    return () => {
      window.removeEventListener("scroll", onScroll);
      mobileStack.removeEventListener("change", stackFx);
    };
  }, []);

  return (
    <div ref={ref} className="service-stack">
      {children}
    </div>
  );
}

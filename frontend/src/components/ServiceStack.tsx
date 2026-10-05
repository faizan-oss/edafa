import { useEffect, useRef } from "react";

type ServiceStackProps = {
  children: React.ReactNode;
};

export function ServiceStack({ children }: ServiceStackProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stack = ref.current;
    if (!stack) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const items = [...stack.querySelectorAll<HTMLElement>(":scope > .service-stack-item")];

      items.forEach((item, index) => {
        const card = item.firstElementChild as HTMLElement | null;
        if (!card) {
          return;
        }

        const next = items[index + 1];
        if (!next) {
          card.style.filter = "";
          return;
        }

        const currentBox = item.getBoundingClientRect();
        const nextBox = next.getBoundingClientRect();
        const covered = (currentBox.bottom - nextBox.top) / currentBox.height;

        if (covered < 0.5) {
          card.style.filter = "";
          return;
        }

        const amount = Math.min(1, (covered - 0.5) / 0.5);
        card.style.filter = `blur(${(amount * 10).toFixed(2)}px)`;
      });
    };

    const onScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div ref={ref} className="service-stack">
      {children}
    </div>
  );
}

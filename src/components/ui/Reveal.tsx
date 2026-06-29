"use client";

import { useEffect, useRef, useState } from "react";

export type RevealVariant = "fade" | "up" | "left" | "right";

type RevealProps = {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  immediate?: boolean;
};

const hiddenTransform: Record<RevealVariant, string> = {
  fade: "none",
  up: "translateY(28px)",
  left: "translateX(-40px)",
  right: "translateX(40px)",
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    if (immediate) {
      const timer = window.setTimeout(() => setVisible(true), delay);
      return () => window.clearTimeout(timer);
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate, delay, reducedMotion]);

  const style: React.CSSProperties = reducedMotion
    ? {}
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : hiddenTransform[variant],
        transitionProperty: "opacity, transform",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

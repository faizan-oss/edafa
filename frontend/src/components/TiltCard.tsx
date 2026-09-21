import {
  useEffect,
  useRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "article" | "aside" | "li" | "div";
  maxTilt?: number;
};

export function TiltCard({
  children,
  className = "",
  onClick,
  as = "div",
  maxTilt = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLElement | null>(null);
  const frameRef = useRef(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const enabledRef = useRef(false);
  const activeRef = useRef(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    enabledRef.current = !reducedMotion && !coarsePointer;

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      if (ref.current) {
        ref.current.style.transform = "";
      }
    };
  }, []);

  function startLoop() {
    if (frameRef.current || !enabledRef.current) {
      return;
    }

    const tick = () => {
      const element = ref.current;
      if (!element) {
        frameRef.current = 0;
        return;
      }

      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.14;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.14;

      const { x, y } = currentRef.current;
      const settled =
        Math.abs(x - targetRef.current.x) < 0.01 && Math.abs(y - targetRef.current.y) < 0.01;

      if (settled) {
        currentRef.current.x = targetRef.current.x;
        currentRef.current.y = targetRef.current.y;
      }

      if (Math.abs(x) < 0.01 && Math.abs(y) < 0.01 && !activeRef.current) {
        element.style.transform = "";
        element.style.setProperty("--tilt-x", "50%");
        element.style.setProperty("--tilt-y", "50%");
        frameRef.current = 0;
        return;
      }

      element.style.transform = `perspective(900px) rotateX(${y.toFixed(2)}deg) rotateY(${x.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
      element.style.setProperty("--tilt-x", `${((x / maxTilt) * 50 + 50).toFixed(1)}%`);
      element.style.setProperty("--tilt-y", `${((y / maxTilt) * -50 + 50).toFixed(1)}%`);

      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);
  }

  function handleMove(event: MouseEvent<HTMLElement>) {
    if (!enabledRef.current) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    targetRef.current.x = (px - 0.5) * maxTilt * 2;
    targetRef.current.y = (0.5 - py) * maxTilt * 2;
    activeRef.current = true;
    startLoop();
  }

  function handleLeave() {
    targetRef.current.x = 0;
    targetRef.current.y = 0;
    activeRef.current = false;
    startLoop();
  }

  const classNames = `tilt-card ${className}`.trim();
  const style = {
    "--tilt-x": "50%",
    "--tilt-y": "50%",
  } as CSSProperties;

  const shared = {
    className: classNames,
    style,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
  };

  if (as === "li") {
    return (
      <li
        ref={(node) => {
          ref.current = node;
        }}
        {...shared}
      >
        {children}
      </li>
    );
  }

  if (as === "aside") {
    return (
      <aside
        ref={(node) => {
          ref.current = node;
        }}
        {...shared}
      >
        {children}
      </aside>
    );
  }

  if (as === "article") {
    return (
      <article
        ref={(node) => {
          ref.current = node;
        }}
        {...shared}
      >
        {children}
      </article>
    );
  }

  return (
    <div
      ref={(node) => {
        ref.current = node;
      }}
      {...shared}
    >
      {children}
    </div>
  );
}

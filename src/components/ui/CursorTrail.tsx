"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type TrailParticle = {
  x: number;
  y: number;
};

const PARTICLE_COUNT = 18;
const HEAD_LERP = 0.10;
const TRAIL_LERP = 0.08;
const BASE_SIZE = 14;

function drawWaterDrop(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string,
  angle: number,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.scale(size * 1.15, size * 0.9);

  ctx.beginPath();
  ctx.moveTo(0, -0.78);
  ctx.bezierCurveTo(0.1, -0.5, 0.28, -0.22, 0.54, 0.12);
  ctx.bezierCurveTo(0.62, 0.36, 0.38, 0.56, 0, 0.54);
  ctx.bezierCurveTo(-0.4, 0.56, -0.6, 0.34, -0.46, 0.06);
  ctx.bezierCurveTo(-0.3, -0.28, -0.1, -0.55, 0, -0.78);
  ctx.closePath();

  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

export function CursorTrail() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<TrailParticle[]>(
    Array.from({ length: PARTICLE_COUNT }, () => ({ x: 0, y: 0 })),
  );
  const coordsRef = useRef({ x: 0, y: 0 });
  const colorRef = useRef("#000000");
  const frameRef = useRef(0);
  const activeRef = useRef(false);
  const visibleRef = useRef(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    colorRef.current = pathname === "/" ? "#ffffff" : "#000000";
  }, [pathname]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (reducedMotion || coarsePointer) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    activeRef.current = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      coordsRef.current.x = event.clientX;
      coordsRef.current.y = event.clientY;
      visibleRef.current = true;

      if (!initializedRef.current) {
        particlesRef.current.forEach((particle) => {
          particle.x = event.clientX;
          particle.y = event.clientY;
        });
        initializedRef.current = true;
      }
    };

    const onLeave = () => {
      visibleRef.current = false;
      initializedRef.current = false;
    };

    const animate = () => {
      if (!activeRef.current) {
        return;
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (visibleRef.current) {
        const particles = particlesRef.current;
        const baseColor = colorRef.current;
        const cursor = coordsRef.current;

        particles[0].x += (cursor.x - particles[0].x) * HEAD_LERP;
        particles[0].y += (cursor.y - particles[0].y) * HEAD_LERP;

        let x = particles[0].x;
        let y = particles[0].y;

        for (let index = 0; index < particles.length; index += 1) {
          particles[index].x = x;
          particles[index].y = y;

          const next = particles[index + 1] ?? particles[0];
          x += (next.x - x) * TRAIL_LERP;
          y += (next.y - y) * TRAIL_LERP;
        }

        for (let index = particles.length - 1; index >= 0; index -= 1) {
          const scale = (BASE_SIZE * (particles.length - index)) / particles.length;
          const leaderX = index === 0 ? cursor.x : particles[index - 1].x;
          const leaderY = index === 0 ? cursor.y : particles[index - 1].y;
          const dx = leaderX - particles[index].x;
          const dy = leaderY - particles[index].y;
          const angle = Math.atan2(dy, dx) - Math.PI / 2;

          drawWaterDrop(
            ctx,
            particles[index].x,
            particles[index].y,
            scale,
            baseColor,
            angle,
          );
        }
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    resize();
    frameRef.current = window.requestAnimationFrame(animate);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    return () => {
      activeRef.current = false;
      window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
}

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Subtle trailing ring. Sits on top of the native cursor (never replaces it),
 * lags slightly with easing, and grows a touch over links and buttons.
 * Hidden on touch / coarse pointers via CSS, and under reduced motion.
 */
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const ring = ringRef.current;
    if (!ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest('a, button, [data-cursor="hover"]');
      ring.classList.toggle("is-hovering", !!interactive);
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  if (reduce) return null;
  return <div ref={ringRef} className="cursor-ring" aria-hidden />;
}

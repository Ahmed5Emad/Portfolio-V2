import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (prefersReduced || isTouchDevice) return;

    const style = document.createElement("style");
    style.id = "custom-cursor-hide";
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, [data-cursor-magnetic]"
      );
      if (target) {
        cursor.style.setProperty("--cursor-scale", "1.8");
        cursor.style.setProperty("--cursor-blend", "difference");
      } else {
        cursor.style.removeProperty("--cursor-scale");
        cursor.style.removeProperty("--cursor-blend");
      }
    };

    const trailAnim = () => {
      if (trail) {
        trail.animate(
          [
            { transform: `translate(${posRef.current.x}px, ${posRef.current.y}px)` },
          ],
          { duration: 600, fill: "forwards", easing: "ease-out" }
        );
      }
      requestAnimationFrame(trailAnim);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    const raf = requestAnimationFrame(trailAnim);

    return () => {
      const s = document.getElementById("custom-cursor-hide");
      if (s) s.remove();
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold mix-blend-difference transition-[width,height] duration-200"
        style={{
          transform: "translate(0, 0) scale(var(--cursor-scale, 1))",
          willChange: "transform",
        }}
      />
      <div
        ref={trailRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/30"
        style={{ willChange: "transform" }}
      />
    </>
  );
}

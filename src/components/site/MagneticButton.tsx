import { useRef, type ReactNode, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "gradient" | "ghost";

/**
 * Pill button that "magnetically" leans toward the cursor while hovered, then
 * springs back on leave. Renders as <a> when `href` is set, else <button>.
 * The visual fill/glow lives in CSS (`.btn-*`); this only adds the magnetism.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size,
  arrow = true,
  strength = 16,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: "sm";
  arrow?: boolean;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  // The gradient CTA stays put — its hover "wow" lives in CSS instead.
  const magnetic = variant !== "gradient";

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el || !magnetic) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  const cls = [
    "btn",
    `btn-${variant}`,
    size === "sm" ? "btn-sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // The gradient CTA gets a per-letter "roll" on hover: each character flips up
  // while an identical copy rolls in from below, staggered left to right.
  const rollable = variant === "gradient" && typeof children === "string";
  const label = rollable ? (
    <span className="btn-roll" aria-label={children as string}>
      {(children as string).split("").map((ch, i) =>
        ch === " " ? (
          <span key={i} className="btn-roll-space">
            &nbsp;
          </span>
        ) : (
          <span
            key={i}
            className="btn-roll-char"
            aria-hidden
            style={{ "--d": `${i * 0.028}s` } as React.CSSProperties}
          >
            <span className="t">{ch}</span>
            <span className="b">{ch}</span>
          </span>
        )
      )}
    </span>
  ) : (
    <span>{children}</span>
  );

  const inner = (
    <>
      {label}
      {arrow && <ArrowUpRight className="btn-arrow" size={18} />}
    </>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={cls}
        onMouseMove={onMove}
        onMouseLeave={reset}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      className={cls}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {inner}
    </button>
  );
}

import { useRef, type ReactNode, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";

export type ButtonVariant = "primary" | "gradient" | "ghost";

export interface ButtonProps {
  children: ReactNode;
  /** Renders an `<a>` when set, otherwise a `<button>`. */
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: "sm" | "md";
  /** Trailing up-right arrow that nudges on hover. */
  arrow?: boolean;
  /** Pixels of cursor-follow lean while hovered. Ignored for `gradient`. */
  strength?: number;
  className?: string;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

/**
 * Pill button. Leans "magnetically" toward the cursor while hovered, then
 * springs back on leave. The fill sweep and glow live in CSS (`.btn-*`); this
 * component only adds the magnetism and the per-letter roll on the gradient
 * variant.
 */
export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  arrow = true,
  strength = 16,
  className = "",
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  // The gradient CTA stays put; its hover payoff is the letter roll instead.
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

  const cls = ["btn", `btn-${variant}`, size === "sm" ? "btn-sm" : "", className]
    .filter(Boolean)
    .join(" ");

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
        aria-label={ariaLabel}
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
      type={type}
      className={cls}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {inner}
    </button>
  );
}

export default Button;

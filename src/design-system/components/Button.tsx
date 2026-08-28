import { useRef, type MouseEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "motion/react";
import { LoaderCircle, type LucideIcon } from "lucide-react";

export type ButtonIntent =
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger"
  | "gradient";
export type ButtonFill = "solid" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children?: ReactNode;
  /** Semantic role. Default `primary`. `gradient` is the signature hero CTA. */
  intent?: ButtonIntent;
  /** `solid` or `outline`. Ignored for `tertiary` (soft fill) and `gradient`. */
  fill?: ButtonFill;
  size?: ButtonSize;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  /** Square button, icon only. Requires `aria-label`. */
  iconOnly?: boolean;
  /** Shows a spinner and blocks interaction. */
  loading?: boolean;
  disabled?: boolean;
  /** Stretch to the container width. */
  block?: boolean;
  /** Cursor-follow lean on hover. Default true; off for `gradient` and reduced motion. */
  magnetic?: boolean;
  strength?: number;
  /** Internal route path -> renders a router `<Link>`. */
  to?: string;
  /** External URL -> renders a plain `<a>`. */
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  "aria-label"?: string;
}

const ICON_SIZE: Record<ButtonSize, number> = { sm: 15, md: 16, lg: 18 };

/**
 * The one button. `intent` x `fill` gives the appearance; `to` / `href` / neither
 * decides the element (router link / anchor / button). The fill sweep and glows
 * live in CSS (`.btn--*`); this adds the magnetic lean and loading/disabled logic.
 */
export function Button({
  children,
  intent = "primary",
  fill = "solid",
  size = "md",
  iconLeft: IconLeft,
  iconRight: IconRight,
  iconOnly = false,
  loading = false,
  disabled = false,
  block = false,
  magnetic = true,
  strength = 14,
  to,
  href,
  onClick,
  type = "button",
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  const inactive = disabled || loading;
  const useMagnet =
    magnetic && !reduce && !inactive && intent !== "gradient";

  const appearance =
    intent === "gradient"
      ? "btn--gradient"
      : intent === "tertiary"
        ? "btn--tertiary"
        : `btn--${intent}-${fill}`;

  const cls = [
    "btn",
    appearance,
    size !== "md" && `btn--${size}`,
    block && "btn--block",
    iconOnly && "btn--icon-only",
    loading && "btn--loading",
    inactive && "btn--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el || !useMagnet) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  const isz = ICON_SIZE[size];
  const left = loading ? (
    <LoaderCircle className="btn__icon btn__spin" size={isz} aria-hidden />
  ) : IconLeft ? (
    <IconLeft className="btn__icon" size={isz} aria-hidden />
  ) : null;
  const right = IconRight ? (
    <IconRight className="btn__icon btn__icon--right" size={isz} aria-hidden />
  ) : null;

  const inner = iconOnly ? (
    left ?? right
  ) : (
    <>
      {left}
      {children != null && <span className="btn__label">{children}</span>}
      {right}
    </>
  );

  const shared = {
    ref,
    className: cls,
    "aria-label": ariaLabel,
    "aria-busy": loading || undefined,
    onMouseMove: onMove,
    onMouseLeave: reset,
  };

  if (inactive) {
    return (
      <button {...shared} type={type} disabled>
        {inner}
      </button>
    );
  }
  if (to) {
    return (
      <Link {...shared} to={to} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a {...shared} href={href} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button {...shared} type={type} onClick={onClick}>
      {inner}
    </button>
  );
}

export default Button;

import type { CSSProperties, ReactNode } from "react";

export interface ChipProps {
  children: ReactNode;
  /**
   * `solid` (default): opaque pill for use on the page (`.tag`).
   * `glass`: translucent pill for use over imagery / dark visuals (`.case-pill`).
   */
  variant?: "solid" | "glass";
  /** Only affects the `glass` variant, which has a smaller size. */
  size?: "sm" | "md";
  /** When set, the chip renders as a link. */
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  style?: CSSProperties;
}

/** Small rounded label: tags, categories, metadata. Renders a link when `href` is set. */
export function Chip({
  children,
  variant = "solid",
  size = "md",
  href,
  target,
  rel,
  className = "",
  style,
}: ChipProps) {
  const cls = (
    variant === "glass"
      ? ["case-pill", size === "sm" ? "case-pill--sm" : "", className]
      : ["tag", className]
  )
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={cls} href={href} target={target} rel={rel} style={style}>
        {children}
      </a>
    );
  }

  return (
    <span className={cls} style={style}>
      {children}
    </span>
  );
}

export default Chip;

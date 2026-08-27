import type { CSSProperties, ElementType, ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  /** Element or component to render as. Defaults to `div`. */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

/**
 * Elevated surface: bordered, soft shadow, and an accent glow on hover
 * (`.glow-card`). Padding and internal layout are left to the caller.
 */
export function Card({ as, children, className = "", style }: CardProps) {
  const Tag = as ?? "div";
  return (
    <Tag
      className={["glow-card", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </Tag>
  );
}

export default Card;

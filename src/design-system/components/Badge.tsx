import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export interface BadgeProps {
  children: ReactNode;
  /**
   * `kicker` (default): compact glossy pill.
   * `section`: same treatment, plus the bottom margin used above section titles.
   */
  variant?: "kicker" | "section";
  icon?: LucideIcon;
  /**
   * Leading dot. `accent` is a static glowing dot; `pulse` is the animated
   * "available" ping.
   */
  dot?: "accent" | "pulse";
  className?: string;
}

/** Glossy bevelled pill used for section kickers and status labels. */
export function Badge({
  children,
  variant = "kicker",
  icon: Icon,
  dot,
  className = "",
}: BadgeProps) {
  const base = variant === "section" ? "services-badge" : "kicker";

  return (
    <span className={[base, className].filter(Boolean).join(" ")}>
      {Icon ? (
        <Icon size={variant === "section" ? 16 : 15} strokeWidth={1.75} />
      ) : null}
      {dot === "accent" ? <span className="kicker-dot" /> : null}
      {dot === "pulse" ? <span className="pulse-dot" /> : null}
      {children}
    </span>
  );
}

export default Badge;

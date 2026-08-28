import { Link, useLocation } from "react-router-dom";
import { Boxes } from "lucide-react";

/**
 * Dev-only shortcut to the /styleguide reference page. Rendered from `main.tsx`
 * behind `import.meta.env.DEV`, so it is stripped from production builds.
 */
export default function StyleGuideLink() {
  const { pathname } = useLocation();
  if (pathname === "/styleguide") return null;

  return (
    <Link
      to="/styleguide"
      aria-label="Open the design system reference"
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 999,
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "9px 14px",
        borderRadius: 999,
        fontSize: 13,
        fontFamily: "var(--font-mono)",
        letterSpacing: "-0.01em",
        color: "var(--color-text-primary)",
        background:
          "color-mix(in srgb, var(--color-bg-surface) 82%, transparent)",
        border: "1px solid var(--color-border-strong)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "var(--shadow-md)",
        textDecoration: "none",
      }}
    >
      <Boxes size={15} strokeWidth={1.75} />
      Design system
    </Link>
  );
}

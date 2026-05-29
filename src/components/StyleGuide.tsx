import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "../theme/ThemeContext";

/* ----------------------------------------------------------------------------
 * Token catalogs — kept here (not in index.css) so the showcase stays in sync
 * by referencing the same CSS variable names the system exposes.
 * --------------------------------------------------------------------------*/

const SEMANTIC_SURFACES = [
  { name: "bg-page", var: "--color-bg-page" },
  { name: "bg-surface", var: "--color-bg-surface" },
  { name: "bg-elevated", var: "--color-bg-elevated" },
  { name: "bg-inverse", var: "--color-bg-inverse" },
];

const SEMANTIC_TEXT = [
  { name: "text-primary", var: "--color-text-primary" },
  { name: "text-secondary", var: "--color-text-secondary" },
  { name: "text-tertiary", var: "--color-text-tertiary" },
  { name: "text-muted", var: "--color-text-muted" },
];

const ACCENTS = [
  { name: "accent", var: "--color-accent" },
  { name: "accent-hover", var: "--color-accent-hover" },
  { name: "orange", var: "--color-orange" },
  { name: "pink", var: "--color-pink" },
  { name: "purple", var: "--color-purple" },
  { name: "success", var: "--color-success" },
  { name: "danger", var: "--color-danger" },
  { name: "warning", var: "--color-warning" },
];

const PALETTE = [
  { name: "charcoal", hex: "#0a0a0a" },
  { name: "warm-grey", hex: "#f5f5f7" },
  { name: "soft-beige", hex: "#faf7f2" },
  { name: "electric-blue", hex: "#3b82f6" },
  { name: "blue-deep", hex: "#0050bd" },
  { name: "orange", hex: "#d94a1e" },
  { name: "pink", hex: "#d04aee" },
  { name: "purple", hex: "#8a38f5" },
];

const TYPE_SCALE = [
  { name: "6xl", var: "--text-6xl", weight: "--weight-medium" },
  { name: "5xl", var: "--text-5xl", weight: "--weight-medium" },
  { name: "4xl", var: "--text-4xl", weight: "--weight-medium" },
  { name: "3xl", var: "--text-3xl", weight: "--weight-medium" },
  { name: "2xl", var: "--text-2xl", weight: "--weight-medium" },
  { name: "xl", var: "--text-xl", weight: "--weight-medium" },
  { name: "lg", var: "--text-lg", weight: "--weight-regular" },
  { name: "base", var: "--text-base", weight: "--weight-regular" },
  { name: "sm", var: "--text-sm", weight: "--weight-regular" },
  { name: "xs", var: "--text-xs", weight: "--weight-regular" },
];

const SPACING = [
  ["1", "4px"], ["2", "8px"], ["3", "12px"], ["4", "16px"], ["5", "20px"],
  ["6", "24px"], ["8", "32px"], ["9", "36px"], ["10", "40px"], ["12", "48px"],
  ["14", "56px"], ["18", "72px"], ["28", "112px"],
];

const RADII = [
  ["xs", "--radius-xs"], ["sm", "--radius-sm"], ["md", "--radius-md"],
  ["lg", "--radius-lg"], ["xl", "--radius-xl"], ["2xl", "--radius-2xl"],
  ["3xl", "--radius-3xl"],
];

const SHADOWS = [
  ["xs", "--shadow-xs"], ["sm", "--shadow-sm"],
  ["md", "--shadow-md"], ["lg", "--shadow-lg"],
];

/* ----------------------------------------------------------------------------
 * Layout primitives
 * --------------------------------------------------------------------------*/

function Section({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "var(--space-18)" }}>
      <div style={{ marginBottom: "var(--space-6)" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "var(--tracking)",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: "var(--space-2)",
          }}
        >
          {kicker}
        </div>
        <h2 style={{ fontSize: "var(--text-2xl)" }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Card({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: "var(--color-bg-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Swatch({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <div style={{ height: 72, background: `var(${value})` }} />
      <div style={{ padding: "var(--space-3)" }}>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: "var(--weight-medium)",
            fontSize: "var(--text-sm)",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            color: "var(--color-text-tertiary)",
          }}
        >
          {value}
        </div>
      </div>
    </Card>
  );
}

const GRID = (min: number): React.CSSProperties => ({
  display: "grid",
  gap: "var(--space-4)",
  gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`,
});

/* ----------------------------------------------------------------------------
 * Page
 * --------------------------------------------------------------------------*/

export default function StyleGuide() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ minHeight: "100%", background: "var(--color-bg-page)" }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: "blur(12px)",
          background: "color-mix(in srgb, var(--color-bg-page) 80%, transparent)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "var(--space-4) var(--space-6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-lg)",
                fontWeight: "var(--weight-medium)",
                letterSpacing: "var(--tracking)",
              }}
            >
              Noah Calvert
            </div>
            <div
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--color-text-tertiary)",
              }}
            >
              Design System
            </div>
          </div>
          <button
            onClick={toggleTheme}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "var(--space-2) var(--space-4)",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--color-border-strong)",
              background: "var(--color-bg-surface)",
              color: "var(--color-text-primary)",
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--weight-medium)",
              cursor: "pointer",
            }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <main
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--space-18) var(--space-6)",
        }}
      >
        {/* Hero */}
        <div style={{ marginBottom: "var(--space-28)" }}>
          <h1
            style={{
              fontSize: "var(--text-6xl)",
              fontWeight: "var(--weight-medium)",
              maxWidth: 720,
            }}
          >
            A clean, token-driven foundation.
          </h1>
          <p
            style={{
              marginTop: "var(--space-6)",
              fontSize: "var(--text-xl)",
              color: "var(--color-text-secondary)",
              maxWidth: 560,
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Three layers — primitives, semantic tokens, and scales — pulled from
            the live site palette and wired into Tailwind. Toggle the theme to
            watch every token swap.
          </p>
        </div>

        <Section kicker="Layer 1" title="Primitive palette">
          <div style={GRID(140)}>
            {PALETTE.map((c) => (
              <Card key={c.name}>
                <div style={{ height: 72, background: c.hex }} />
                <div style={{ padding: "var(--space-3)" }}>
                  <div
                    style={{
                      fontWeight: "var(--weight-medium)",
                      fontSize: "var(--text-sm)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {c.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      color: "var(--color-text-tertiary)",
                    }}
                  >
                    {c.hex}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section kicker="Layer 2" title="Semantic — surfaces">
          <div style={GRID(160)}>
            {SEMANTIC_SURFACES.map((s) => (
              <Swatch key={s.name} label={s.name} value={s.var} />
            ))}
          </div>
        </Section>

        <Section kicker="Layer 2" title="Semantic — text">
          <Card style={{ padding: "var(--space-6)" }}>
            {SEMANTIC_TEXT.map((t) => (
              <div
                key={t.name}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "var(--space-4)",
                  padding: "var(--space-2) 0",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-text-tertiary)",
                    width: 130,
                    flexShrink: 0,
                  }}
                >
                  {t.name}
                </span>
                <span
                  style={{
                    color: `var(${t.var})`,
                    fontSize: "var(--text-lg)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  The quick brown fox jumps over the lazy dog.
                </span>
              </div>
            ))}
          </Card>
        </Section>

        <Section kicker="Layer 2" title="Semantic — accents & status">
          <div style={GRID(140)}>
            {ACCENTS.map((a) => (
              <Swatch key={a.name} label={a.name} value={a.var} />
            ))}
          </div>
        </Section>

        <Section kicker="Layer 3" title="Type scale">
          <Card style={{ padding: "var(--space-6)" }}>
            {TYPE_SCALE.map((t) => (
              <div
                key={t.name}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "var(--space-6)",
                  padding: "var(--space-2) 0",
                  borderBottom: "1px solid var(--color-border-subtle)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-text-tertiary)",
                    width: 48,
                    flexShrink: 0,
                  }}
                >
                  {t.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: `var(${t.var})`,
                    fontWeight: `var(${t.weight})`,
                    letterSpacing: "var(--tracking)",
                    lineHeight: "var(--leading-tight)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Designing in systems
                </span>
              </div>
            ))}
            <div
              style={{
                marginTop: "var(--space-5)",
                display: "flex",
                gap: "var(--space-8)",
                flexWrap: "wrap",
                color: "var(--color-text-tertiary)",
                fontSize: "var(--text-sm)",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)" }}>
                Display — Clash Grotesk
              </span>
              <span style={{ fontFamily: "var(--font-sans)" }}>
                Sans — Geist
              </span>
              <span style={{ fontFamily: "var(--font-body)" }}>
                Body — Inter
              </span>
              <span style={{ fontFamily: "var(--font-mono)" }}>
                Mono — system
              </span>
            </div>
          </Card>
        </Section>

        <Section kicker="Layer 3" title="Spacing">
          <Card style={{ padding: "var(--space-6)" }}>
            {SPACING.map(([name, px]) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-4)",
                  padding: "var(--space-1) 0",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-text-tertiary)",
                    width: 80,
                  }}
                >
                  space-{name}
                </span>
                <div
                  style={{
                    height: 16,
                    width: px,
                    background: "var(--color-accent)",
                    borderRadius: "var(--radius-xs)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {px}
                </span>
              </div>
            ))}
          </Card>
        </Section>

        <Section kicker="Layer 3" title="Radius">
          <div style={GRID(140)}>
            {RADII.map(([name, v]) => (
              <Card key={name} style={{ padding: "var(--space-4)" }}>
                <div
                  style={{
                    height: 64,
                    background: "var(--color-accent-subtle)",
                    border: "1.5px solid var(--color-accent)",
                    borderRadius: `var(${v})`,
                  }}
                />
                <div
                  style={{
                    marginTop: "var(--space-3)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-text-tertiary)",
                  }}
                >
                  radius-{name}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section kicker="Layer 3" title="Elevation">
          <div style={GRID(180)}>
            {SHADOWS.map(([name, v]) => (
              <div
                key={name}
                style={{
                  background: "var(--color-bg-surface)",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: `var(${v})`,
                  padding: "var(--space-6)",
                  height: 96,
                  display: "flex",
                  alignItems: "flex-end",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-text-tertiary)",
                }}
              >
                shadow-{name}
              </div>
            ))}
          </div>
        </Section>

        <Section kicker="Composed" title="Sample components">
          <div style={GRID(280)}>
            {/* Buttons */}
            <Card style={{ padding: "var(--space-6)" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                  alignItems: "flex-start",
                }}
              >
                <button style={btnPrimary}>
                  Primary action
                </button>
                <button style={btnGhost}>Secondary</button>
                <a style={linkStyle} href="#">
                  View case study <ArrowUpRight size={16} />
                </a>
              </div>
            </Card>

            {/* Tags */}
            <Card style={{ padding: "var(--space-6)" }}>
              <div
                style={{
                  display: "flex",
                  gap: "var(--space-2)",
                  flexWrap: "wrap",
                }}
              >
                {["Branding", "Product", "Webflow", "Motion"].map((t) => (
                  <span key={t} style={tag}>
                    {t}
                  </span>
                ))}
              </div>
            </Card>

            {/* Mini work card */}
            <Card>
              <div
                style={{
                  height: 120,
                  background:
                    "linear-gradient(135deg, var(--color-accent), var(--color-purple))",
                }}
              />
              <div style={{ padding: "var(--space-5)" }}>
                <h3 style={{ fontSize: "var(--text-xl)" }}>Crometix</h3>
                <p
                  style={{
                    marginTop: "var(--space-2)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-secondary)",
                    lineHeight: "var(--leading-normal)",
                  }}
                >
                  Brand identity and product design for a fintech platform.
                </p>
              </div>
            </Card>
          </div>
        </Section>

        <footer
          style={{
            paddingTop: "var(--space-12)",
            borderTop: "1px solid var(--color-border)",
            color: "var(--color-text-tertiary)",
            fontSize: "var(--text-sm)",
          }}
        >
          Foundation only — drop real sections in next. Every value above is a
          CSS variable; nothing is hard-coded in components.
        </footer>
      </main>
    </div>
  );
}

const btnPrimary: React.CSSProperties = {
  padding: "var(--space-3) var(--space-5)",
  borderRadius: "var(--radius-full)",
  border: "none",
  background: "var(--color-accent)",
  color: "var(--color-text-on-accent)",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-sm)",
  fontWeight: "var(--weight-medium)",
  cursor: "pointer",
};

const btnGhost: React.CSSProperties = {
  padding: "var(--space-3) var(--space-5)",
  borderRadius: "var(--radius-full)",
  border: "1px solid var(--color-border-strong)",
  background: "transparent",
  color: "var(--color-text-primary)",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-sm)",
  fontWeight: "var(--weight-medium)",
  cursor: "pointer",
};

const linkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--space-1)",
  color: "var(--color-text-link)",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-sm)",
  fontWeight: "var(--weight-medium)",
  textDecoration: "none",
};

const tag: React.CSSProperties = {
  padding: "var(--space-1) var(--space-3)",
  borderRadius: "var(--radius-full)",
  background: "var(--color-accent-subtle)",
  color: "var(--color-accent)",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-xs)",
  fontWeight: "var(--weight-medium)",
};

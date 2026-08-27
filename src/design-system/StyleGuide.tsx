import { useState } from "react";
import { Moon, Sun, Boxes, User, ArrowRight } from "lucide-react";
import { Button, Chip, Field, Card, Badge } from "./index";

/* --------------------------------------------------------------------------
 * Token catalogs. Each references the same CSS variable the system exposes,
 * so this page can never drift from the real values.
 * ------------------------------------------------------------------------ */

const SURFACES = ["bg-page", "bg-surface", "bg-elevated", "bg-inverse"];
const TEXTS = ["text-primary", "text-secondary", "text-tertiary", "text-muted"];
const ACCENTS = [
  "accent",
  "accent-hover",
  "orange",
  "pink",
  "purple",
  "success",
  "danger",
  "warning",
];
const TYPE = ["6xl", "5xl", "4xl", "3xl", "2xl", "xl", "lg", "base", "sm", "xs"];
const SPACE: [string, string][] = [
  ["2", "8px"], ["3", "12px"], ["4", "16px"], ["5", "20px"],
  ["6", "24px"], ["8", "32px"], ["10", "40px"], ["12", "48px"],
];
const RADII = ["sm", "md", "lg", "xl", "2xl", "3xl"];
const SHADOWS = ["xs", "sm", "md", "lg"];

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "var(--space-18)" }}>
      <h2
        style={{
          fontSize: "var(--text-sm)",
          fontFamily: "var(--font-mono)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--color-accent)",
          marginBottom: "var(--space-6)",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

const grid = (min: number): React.CSSProperties => ({
  display: "grid",
  gap: "var(--space-4)",
  gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`,
});

const specimen: React.CSSProperties = {
  padding: "var(--space-5)",
  borderRadius: "var(--radius-lg)",
  border: "1px solid var(--color-border)",
  background: "var(--color-bg-surface)",
  display: "flex",
  flexWrap: "wrap",
  gap: "var(--space-4)",
  alignItems: "center",
};

export default function StyleGuide() {
  // Local override so the page can preview both themes without touching the
  // app-wide theme wiring. Works because the CSS keys off `[data-theme]`.
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div
      data-theme={theme}
      style={{
        minHeight: "100vh",
        background: "var(--color-bg-page)",
        color: "var(--color-text-primary)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        className="container"
        style={{ paddingTop: "var(--space-18)", paddingBottom: "var(--space-28)" }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "var(--space-6)",
            marginBottom: "var(--space-18)",
          }}
        >
          <div>
            <h1 style={{ fontSize: "var(--text-4xl)", fontWeight: 500 }}>
              Design system
            </h1>
            <p style={{ color: "var(--color-text-tertiary)", marginTop: "var(--space-2)" }}>
              Tokens and components. Everything on this page is imported from{" "}
              <code style={{ fontFamily: "var(--font-mono)" }}>src/design-system</code>.
            </p>
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "var(--space-3) var(--space-4)",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--color-border-strong)",
              background: "transparent",
              color: "var(--color-text-primary)",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </header>

        {/* ---- Tokens ---- */}
        <Row title="Color / surfaces">
          <div style={grid(150)}>
            {SURFACES.map((n) => (
              <Swatch key={n} name={n} />
            ))}
          </div>
        </Row>
        <Row title="Color / text">
          <div style={grid(150)}>
            {TEXTS.map((n) => (
              <Swatch key={n} name={n} />
            ))}
          </div>
        </Row>
        <Row title="Color / accents">
          <div style={grid(120)}>
            {ACCENTS.map((n) => (
              <Swatch key={n} name={n} />
            ))}
          </div>
        </Row>

        <Row title="Type scale">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {TYPE.map((n) => (
              <div key={n} style={{ display: "flex", alignItems: "baseline", gap: "var(--space-5)" }}>
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-text-muted)",
                    width: 40,
                  }}
                >
                  {n}
                </code>
                <span style={{ fontSize: `var(--text-${n})`, lineHeight: 1.1 }}>
                  Digital masterpieces
                </span>
              </div>
            ))}
          </div>
        </Row>

        <Row title="Spacing">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {SPACE.map(([n, px]) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                <code style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--color-text-muted)", width: 56 }}>
                  {n} · {px}
                </code>
                <span
                  style={{
                    height: 16,
                    width: `var(--space-${n})`,
                    background: "var(--color-accent)",
                    borderRadius: 3,
                  }}
                />
              </div>
            ))}
          </div>
        </Row>

        <Row title="Radius">
          <div style={grid(120)}>
            {RADII.map((n) => (
              <div key={n} style={{ textAlign: "center" }}>
                <div
                  style={{
                    height: 72,
                    background: "var(--color-bg-elevated)",
                    border: "1px solid var(--color-border-strong)",
                    borderRadius: `var(--radius-${n})`,
                    marginBottom: "var(--space-2)",
                  }}
                />
                <code style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>
                  {n}
                </code>
              </div>
            ))}
          </div>
        </Row>

        <Row title="Elevation">
          <div style={grid(150)}>
            {SHADOWS.map((n) => (
              <div key={n} style={{ textAlign: "center" }}>
                <div
                  style={{
                    height: 72,
                    background: "var(--color-bg-surface)",
                    borderRadius: "var(--radius-lg)",
                    boxShadow: `var(--shadow-${n})`,
                    marginBottom: "var(--space-3)",
                  }}
                />
                <code style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>
                  {n}
                </code>
              </div>
            ))}
          </div>
        </Row>

        {/* ---- Components ---- */}
        <Row title="Button">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <div style={specimen}>
              <Button arrow={false}>Primary</Button>
              <Button variant="gradient" arrow={false}>Gradient</Button>
              <Button variant="ghost" arrow={false}>Ghost</Button>
            </div>
            <div style={specimen}>
              <Button size="sm" arrow={false}>Small primary</Button>
              <Button size="sm" variant="ghost" arrow={false}>Small ghost</Button>
              <Button size="sm">With arrow</Button>
              <Button href="#" variant="ghost" arrow={false}>As link</Button>
            </div>
          </div>
        </Row>

        <Row title="Chip">
          <div style={specimen}>
            <Chip>Product design</Chip>
            <Chip>Design systems</Chip>
            <Chip>Brand</Chip>
          </div>
          <div
            style={{
              ...specimen,
              marginTop: "var(--space-4)",
              background:
                "linear-gradient(135deg, #1d2b4a, #0c1322)",
              borderColor: "transparent",
            }}
          >
            <Chip variant="glass">Glass</Chip>
            <Chip variant="glass" size="sm">
              Glass sm
            </Chip>
          </div>
        </Row>

        <Row title="Badge">
          <div style={specimen}>
            <Badge>Plain kicker</Badge>
            <Badge icon={User}>With icon</Badge>
            <Badge dot="accent">With dot</Badge>
            <Badge dot="pulse">Available for work</Badge>
            <Badge variant="section" icon={Boxes}>Section badge</Badge>
          </div>
        </Row>

        <Row title="Field">
          <div style={{ display: "grid", gap: "var(--space-4)", maxWidth: 420 }}>
            <Field placeholder="Your name" />
            <Field type="email" placeholder="Your email" />
            <Field as="textarea" placeholder="Your message..." />
          </div>
        </Row>

        <Row title="Card">
          <div style={grid(220)}>
            <Card style={{ padding: "var(--space-6)" }}>
              <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 500 }}>Card title</h3>
              <p style={{ marginTop: "var(--space-2)", color: "var(--color-text-secondary)", fontSize: "var(--text-sm)" }}>
                Bordered surface with a soft shadow and an accent glow on hover.
              </p>
              <div style={{ marginTop: "var(--space-4)" }}>
                <Button size="sm" variant="ghost" arrow={false}>
                  Action <ArrowRight size={14} />
                </Button>
              </div>
            </Card>
          </div>
        </Row>
      </div>
    </div>
  );
}

function Swatch({ name }: { name: string }) {
  return (
    <div>
      <div
        style={{
          height: 64,
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border)",
          background: `var(--color-${name})`,
        }}
      />
      <code
        style={{
          display: "block",
          marginTop: "var(--space-2)",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-xs)",
          color: "var(--color-text-tertiary)",
        }}
      >
        {name}
      </code>
    </div>
  );
}

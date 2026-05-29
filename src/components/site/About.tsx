import { User } from "lucide-react";
import Reveal from "./Reveal";
import ScrollText from "./ScrollText";
import { PROFILE } from "../../data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: "var(--space-12)",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.3fr)",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Portrait placeholder */}
          <Reveal>
            <div
              className="glow-card"
              style={{
                aspectRatio: "4 / 5",
                background:
                  "linear-gradient(160deg, var(--color-bg-elevated), var(--color-bg-surface))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                className="gradient-text"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: "var(--weight-medium)",
                  fontSize: "clamp(4rem, 12vw, 8rem)",
                  letterSpacing: "var(--tracking)",
                }}
              >
                NC
              </span>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <span className="kicker">
                <User size={15} strokeWidth={1.75} />
                About me
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                style={{
                  marginTop: "var(--space-4)",
                  fontSize: "clamp(1.75rem, 4vw, var(--text-4xl))",
                  fontWeight: "var(--weight-medium)",
                  lineHeight: "var(--leading-snug)",
                }}
              >
                Hey, I'm {PROFILE.name.split(" ")[0]} — a{" "}
                <span className="gradient-text">{PROFILE.role.toLowerCase()}</span>{" "}
                based in {PROFILE.location}.
              </h2>
            </Reveal>

            <ScrollText
              text="I design clear, scalable, system-driven interfaces — and the brands around them. From product UX and design systems to identity work and hand-built websites, I care about the whole arc: how it feels, how it reads, and how it ships."
              style={{
                marginTop: "var(--space-6)",
                fontSize: "var(--text-lg)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-text-primary)",
                maxWidth: "54ch",
              }}
            />

            <ScrollText
              text="Currently leading UI/UX & graphic design at Sky Systemz."
              style={{
                marginTop: "var(--space-4)",
                fontSize: "var(--text-lg)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-text-primary)",
                maxWidth: "54ch",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

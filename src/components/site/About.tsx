import { User } from "lucide-react";
import Reveal from "./Reveal";
import { Card, Badge } from "../../design-system";
import { PROFILE } from "../../data/content";

const bioParagraph = {
  fontSize: "var(--text-lg)",
  lineHeight: "var(--leading-relaxed)",
  color: "var(--color-text-primary)",
  maxWidth: "54ch",
} as const;

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
            <Card
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
            </Card>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <Badge icon={User}>About me</Badge>
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
                Hey, I'm {PROFILE.name.split(" ")[0]}, a{" "}
                <span className="gradient-text">{PROFILE.role.toLowerCase()}</span>{" "}
                based in {PROFILE.location}.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p style={{ ...bioParagraph, marginTop: "var(--space-6)" }}>
                Thanks for stopping by and digging through the work. I started in
                graphic design, working across print, brand, and web, then moved
                into UI/UX and design systems. The longer I did it, the more I got
                pulled toward the harder part: not how a product looks, but how it
                works and how it holds together as it grows.
              </p>
              <p style={{ ...bioParagraph, marginTop: "var(--space-4)" }}>
                Since then I've worked with startups and a growing SaaS company,
                taking products from rough idea through launch and the long
                stretch of iteration after. Today I'm Lead UX Designer at Sky
                Systemz, focused on UI/UX and design systems, always aiming for
                something that feels obvious to use and earns its keep for the
                business behind it.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

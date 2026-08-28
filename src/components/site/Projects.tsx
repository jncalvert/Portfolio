import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase, Palette } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ScrollText from "./ScrollText";
import { Chip, Badge, PreviewCard } from "../../design-system";
import { CASE_STUDIES, GALLERY, type CaseStudy } from "../../data/content";

// Per-project palette: card tint + the "screenshot" gradient and glow color.
// Kept dark so the overlaid title / summary stay readable.
const CASE_THEMES = [
  { tint: "linear-gradient(125deg, #101725 0%, #08080c 66%)", screen: "linear-gradient(135deg, #141d33, #0a0f1c)", glow: "#2f5bd0" },
  { tint: "linear-gradient(125deg, #1a1c20 0%, #08080c 66%)", screen: "linear-gradient(135deg, #262a30, #121316)", glow: "#7f8794" },
  { tint: "linear-gradient(125deg, #1c130d 0%, #08080c 66%)", screen: "linear-gradient(135deg, #281a12, #120c08)", glow: "#b04e22" },
  { tint: "linear-gradient(125deg, #171021 0%, #08080c 66%)", screen: "linear-gradient(135deg, #1f1530, #0f0a18)", glow: "#8038c0" },
];

// Placeholder tints for the Brand & identity tiles, until real thumbnails land.
const WORK_THEMES = [
  { tint: "linear-gradient(125deg, #15203a 0%, #0a0a0e 64%)", screen: "linear-gradient(135deg, #1d2b4a, #0c1322)", glow: "#3b6ef5" },
  { tint: "linear-gradient(125deg, #2a1d15 0%, #0a0a0e 64%)", screen: "linear-gradient(135deg, #3a241a, #16100c)", glow: "#d9622e" },
  { tint: "linear-gradient(125deg, #221830 0%, #0a0a0e 64%)", screen: "linear-gradient(135deg, #2c1d3e, #140e1c)", glow: "#a64ae0" },
  { tint: "linear-gradient(125deg, #13261f 0%, #0a0a0e 64%)", screen: "linear-gradient(135deg, #1b3a2c, #0c1714)", glow: "#34c98a" },
  { tint: "linear-gradient(125deg, #262a30 0%, #0a0a0e 64%)", screen: "linear-gradient(135deg, #3a3f47, #16181c)", glow: "#9aa3b2" },
];

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="services-head">
          <Reveal>
            <Badge variant="section" icon={Briefcase}>
              Selected work
            </Badge>
          </Reveal>
          <div className="services-title-row">
            <Reveal delay={0.06}>
              <h2 className="services-title">Case studies</h2>
            </Reveal>
            <ScrollText
              className="services-lead"
              text="Four projects that show the range end to end: a multi-brand design system, two products designed and shipped from zero, and a brand built into code."
            />
          </div>
        </div>

        <div className="case-list">
          {CASE_STUDIES.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.06}>
              <CaseCard project={p} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Visual & brand work */}
        <div style={{ marginTop: "var(--space-28)" }}>
          <SectionHeading
            kicker="Also"
            title="Brand & identity"
            icon={Palette}
            lead="Logos, identities, and visual systems from outside the product work."
          />
          <BrandGrid />
        </div>
      </div>
    </section>
  );
}

// Brand & identity: a plain, calm image grid. Placeholder tints stand in until
// the real project thumbnails are dropped in.
function BrandGrid() {
  return (
    <div className="brand-grid">
      {GALLERY.map((w, i) => {
        const theme = WORK_THEMES[i % WORK_THEMES.length];
        return (
          <Reveal key={w.name} delay={(i % 3) * 0.06}>
            <PreviewCard
              title={w.name}
              subtitle={w.tags.join(" · ")}
              tint={theme.screen}
              glow={theme.glow}
            />
          </Reveal>
        );
      })}
    </div>
  );
}

function CaseCard({ project, index }: { project: CaseStudy; index: number }) {
  const theme = CASE_THEMES[index % CASE_THEMES.length];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const inner = (
    <>
      <div className="case-visual">
        <div className="case-screen">
          <div className="case-screen-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="case-screen-body" style={{ background: theme.screen }}>
            <div className="case-screen-glow" style={{ background: theme.glow }} />
            <div className="case-screen-ui">
              <div className="case-screen-pills">
                {project.tags.map((t) => (
                  <Chip key={t} variant="glass" size="sm">
                    {t}
                  </Chip>
                ))}
              </div>
              <span className="l1" />
              <span className="l2" />
              <span className="mock-btn" />
            </div>
          </div>
        </div>
        <div className="case-blur case-blur--top" />
        <div className="case-blur case-blur--bottom" />
      </div>

      <div className="case-overlay">
        <div className="case-tags">
          {project.tags.slice(0, 2).map((t) => (
            <Chip key={t} variant="glass">
              {t}
            </Chip>
          ))}
        </div>
        <div className="case-meta">
          <p className="case-desc">{project.summary}</p>
          <h3 className="case-title">{project.name}</h3>
        </div>
      </div>
    </>
  );

  return (
    <Link to={`/work/${project.slug}`} className="case-card-link">
      <motion.div
        ref={ref}
        className="case-card"
        style={{ background: theme.tint, scale }}
      >
        {inner}
      </motion.div>
    </Link>
  );
}

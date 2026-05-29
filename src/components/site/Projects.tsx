import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Briefcase, Palette } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ScrollText from "./ScrollText";
import { PROJECTS, OTHER_WORK, type Project } from "../../data/content";

// Per-project palette: card tint + the "screenshot" gradient and glow color.
const CASE_THEMES = [
  { tint: "linear-gradient(125deg, #15203a 0%, #0a0a0e 64%)", screen: "linear-gradient(135deg, #1d2b4a, #0c1322)", glow: "#3b6ef5" },
  { tint: "linear-gradient(125deg, #262a30 0%, #0a0a0e 64%)", screen: "linear-gradient(135deg, #3a3f47, #16181c)", glow: "#9aa3b2" },
  { tint: "linear-gradient(125deg, #2a1d15 0%, #0a0a0e 64%)", screen: "linear-gradient(135deg, #3a241a, #16100c)", glow: "#d9622e" },
  { tint: "linear-gradient(125deg, #221830 0%, #0a0a0e 64%)", screen: "linear-gradient(135deg, #2c1d3e, #140e1c)", glow: "#a64ae0" },
];

// Palette for the Other-work deck (reuses the case-card look).
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
            <span className="services-badge">
              <Briefcase size={16} />
              Selected work
            </span>
          </Reveal>
          <div className="services-title-row">
            <Reveal delay={0.06}>
              <h2 className="services-title">Our Projects</h2>
            </Reveal>
            <ScrollText
              className="services-lead"
              text="See some of our selected projects we launched."
            />
          </div>
        </div>

        <div className="case-list">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.06}>
              <CaseCard project={p} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Other work */}
        <div style={{ marginTop: "var(--space-28)" }}>
          <SectionHeading
            kicker="Other work"
            title="Brand & identity projects"
            icon={Palette}
            lead="Identity systems and logos shaped for brands across sport, retail, and lifestyle."
          />
          <WorkDeck />
        </div>
      </div>
    </section>
  );
}

// Brand mockups as tall portrait cards. A tall track is pinned; as it scrolls
// the cards peel off a diagonal cascade pile one at a time into a horizontal fan.
function WorkDeck() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const count = OTHER_WORK.length;

  return (
    <div className="work-scroll" ref={ref}>
      <div className="work-pin">
        <div className="work-stack">
          {OTHER_WORK.map((w, i) => (
            <WorkCard
              key={w.name}
              work={w}
              i={i}
              count={count}
              theme={WORK_THEMES[i % WORK_THEMES.length]}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Final fan: card centres step 60% of a card-width apart (cards overlap ~40%).
const FAN_STEP = 60;
// Pile (progress 0): each card behind the front is nudged up-left, tilted and
// shrunk by its depth so the set reads as a diagonal cascade.
const PILE_X = 9;
const PILE_Y = 7;
const PILE_ROT = 3;
const PILE_SCALE = 0.05;
// Each card deals out over this slice of scroll; starts are staggered so they
// unstack one at a time, front (last) card first.
const DEAL_DUR = 0.36;

function WorkCard({
  work,
  i,
  count,
  theme,
  progress,
}: {
  work: (typeof OTHER_WORK)[number];
  i: number;
  count: number;
  theme: (typeof WORK_THEMES)[number];
  progress: MotionValue<number>;
}) {
  const center = (count - 1) / 2;
  // depth in the pile / deal order — the front card (highest i) has depth 0 and
  // deals out first; cards further back follow in sequence.
  const depth = count - 1 - i;
  const start = count > 1 ? (depth * (1 - DEAL_DUR)) / (count - 1) : 0;
  const end = start + DEAL_DUR;
  const range: [number, number] = [start, end];

  const x = useTransform(progress, range, [`${-depth * PILE_X}%`, `${(i - center) * FAN_STEP}%`]);
  const y = useTransform(progress, range, [`${-depth * PILE_Y}%`, "0%"]);
  const rotate = useTransform(progress, range, [-depth * PILE_ROT, 0]);
  const scale = useTransform(progress, range, [1 - depth * PILE_SCALE, 1]);

  return (
    <motion.div
      className="work-card"
      style={{ x, y, rotate, scale, zIndex: i }}
    >
      <div className="work-card-art" style={{ background: theme.screen }}>
        <div className="work-card-glow" style={{ background: theme.glow }} />
        <div className="work-card-mock" />
      </div>
      <div className="work-card-scrim" />
      <div className="work-card-body">
        <div className="case-tags">
          {work.tags.slice(0, 2).map((t) => (
            <span key={t} className="case-pill case-pill--sm">
              {t}
            </span>
          ))}
        </div>
        <h3 className="work-card-title">{work.name}</h3>
      </div>
    </motion.div>
  );
}

function CaseCard({ project, index }: { project: Project; index: number }) {
  const theme = CASE_THEMES[index % CASE_THEMES.length];
  const ref = useRef<HTMLAnchorElement & HTMLDivElement>(null);
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
                  <span key={t} className="case-pill case-pill--sm">
                    {t}
                  </span>
                ))}
              </div>
              <span className="l1" />
              <span className="l2" />
              <span className="btn" />
            </div>
          </div>
        </div>
        <div className="case-blur case-blur--top" />
        <div className="case-blur case-blur--bottom" />
      </div>

      <div className="case-overlay">
        <div className="case-tags">
          {project.tags.slice(0, 2).map((t) => (
            <span key={t} className="case-pill">
              {t}
            </span>
          ))}
        </div>
        <div className="case-meta">
          <p className="case-desc">{project.summary}</p>
          <h3 className="case-title">{project.name}</h3>
        </div>
      </div>
    </>
  );

  const style = { background: theme.tint, scale };

  return project.href ? (
    <motion.a
      ref={ref}
      href={project.href}
      className="case-card"
      style={style}
    >
      {inner}
    </motion.a>
  ) : (
    <motion.div ref={ref} className="case-card" style={style}>
      {inner}
    </motion.div>
  );
}

import { Boxes } from "lucide-react";
import Reveal from "./Reveal";
import ScrollText from "./ScrollText";
import { Badge } from "../../design-system";
import { DISCIPLINES } from "../../data/content";

// --- Generated card visuals --------------------------------------------------

type Tok = [cls: string, text: string];

// Tokenized source for the animated code editor (Web Dev).
const CODE: Tok[][] = [
  [["kw", "import"], ["punct", " { "], ["", "motion"], ["punct", " } "], ["kw", "from"], ["str", ' "motion/react"'], ["punct", ";"]],
  [],
  [["kw", "export default function"], ["fn", " Hero"], ["punct", "() {"]],
  [["", "  "], ["kw", "const"], ["", " ref = "], ["fn", "useRef"], ["punct", "("], ["kw", "null"], ["punct", ");"]],
  [],
  [["", "  "], ["kw", "return"], ["punct", " ("]],
  [["", "    "], ["punct", "<"], ["fn", "motion.section"], ["", " "], ["fn", "layout"], ["punct", ">"]],
  [["", "      "], ["punct", "<"], ["fn", "h1"], ["punct", ">"], ["", "Ship it."], ["punct", "</"], ["fn", "h1"], ["punct", ">"], ["caret", ""]],
  [["", "    "], ["punct", "</"], ["fn", "motion.section"], ["punct", ">"]],
  [["", "  "], ["punct", ");"]],
  [["punct", "}"]],
  [],
];

function CodeLines({ pass }: { pass: string }) {
  return (
    <>
      {CODE.map((line, i) => (
        <span className="ln" key={`${pass}-${i}`}>
          {line.length === 0
            ? " "
            : line.map(([cls, text], j) =>
                cls === "caret" ? (
                  <span className="code-caret" key={j} />
                ) : cls === "" ? (
                  <span key={j}>{text}</span>
                ) : (
                  <span className={`tok-${cls}`} key={j}>
                    {text}
                  </span>
                )
              )}
        </span>
      ))}
    </>
  );
}

// Bar heights (%) for the closeup UI chart, with staggered animation delays.
const BARS = [42, 64, 50, 78, 58, 92, 70, 84];

function SkillVisual({ id }: { id: string }) {
  if (id === "webdev") {
    return (
      <div className="services-visual sv-code">
        <div className="mock-win">
          <div className="mock-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="mock-label">Hero.tsx</span>
          </div>
          <div className="code-body">
            <div className="code-scroll">
              <CodeLines pass="a" />
              <CodeLines pass="b" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "website") {
    return (
      <div className="services-visual sv-site">
        <div className="mock-win">
          <div className="mock-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="mock-url">noahcalvert.com</span>
          </div>
          <div className="site-page">
            <div className="site-glow" />
            <div className="site-nav">
              <span className="site-brand">
                <span className="site-mark" />
                System
              </span>
              <span className="site-links">
                <span>Foundations</span>
                <span>Components</span>
                <span>Tokens</span>
              </span>
              <span className="site-cta">v2.4</span>
            </div>
            <div className="site-hero">
              <span className="site-eyebrow">Design system</span>
              <div className="site-display">
                One system, <b>three brands</b>
              </div>
              <div className="site-sub">
                Tokens and components in Figma, shipped to engineering as code.
              </div>
              <div className="site-actions">
                <span className="site-btn primary">Get the package</span>
                <span className="site-btn ghost">Docs</span>
              </div>
            </div>
            <div className="site-strip">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "ux") {
    return (
      <div className="services-visual sv-ui">
        <div className="ui-card">
          <div className="ui-top">
            <div className="ui-avas">
              <span />
              <span />
              <span />
            </div>
            <span className="ui-live">Live</span>
          </div>
          <div className="ui-value">
            12,480
            <span className="ui-delta">+12.4%</span>
          </div>
          <div className="ui-chart">
            {BARS.map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%`, animationDelay: `${i * 0.18}s` }}
              />
            ))}
          </div>
          <div className="ui-seg">
            <span className="on" />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }

  // Brand Identity: glass orb (drawn via CSS pseudo-elements).
  return (
    <div className="services-visual sv-orb">
      <div className="sv-noise" />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="services-head">
          <Reveal>
            <Badge variant="section" icon={Boxes}>
              Expertise
            </Badge>
          </Reveal>
          <div className="services-title-row">
            <Reveal delay={0.06}>
              <h2 className="services-title">What I do</h2>
            </Reveal>
            <ScrollText
              className="services-lead"
              text="I started in graphic design and moved into product. That path is the point: systems thinking with visual craft, and the engineering to ship both."
            />
          </div>
        </div>

        <div className="services-grid">
          {DISCIPLINES.map((skill, i) => (
            <Reveal key={skill.id} delay={i * 0.08}>
              <article className="service-card">
                <SkillVisual id={skill.id} />
                <div className="service-body">
                  <h3>{skill.title}</h3>
                  <p>{skill.blurb}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

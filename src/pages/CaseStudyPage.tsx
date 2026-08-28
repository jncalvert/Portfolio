import { useEffect, type ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../components/site/Reveal";
import { Button, Chip, PreviewCard } from "../design-system";
import { CASE_STUDIES } from "../data/content";

// Placeholder art per slot, until real screenshots go in.
const VISUALS = [
  { bg: "linear-gradient(135deg, #1d2b4a, #0c1322)", glow: "#3b6ef5" },
  { bg: "linear-gradient(135deg, #3a3f47, #16181c)", glow: "#9aa3b2" },
  { bg: "linear-gradient(135deg, #3a241a, #16100c)", glow: "#d9622e" },
  { bg: "linear-gradient(135deg, #2c1d3e, #140e1c)", glow: "#a64ae0" },
];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal>
      <section className="cs-section">
        <h2 className="cs-h2">{title}</h2>
        <p className="cs-body">{children}</p>
      </section>
    </Reveal>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams();
  const index = CASE_STUDIES.findIndex((c) => c.slug === slug);
  const study = CASE_STUDIES[index];

  useEffect(() => {
    if (study) document.title = `${study.name} · Noah Calvert`;
    return () => {
      document.title = "Noah Calvert, Portfolio";
    };
  }, [study]);

  if (!study) return <Navigate to="/" replace />;

  const visual = VISUALS[index % VISUALS.length];
  const others = CASE_STUDIES.filter((c) => c.slug !== study.slug);

  return (
    <div className="cs-page">
      <header className="cs-bar">
        <div className="container cs-bar-inner">
          <Button
            to="/#work"
            intent="secondary"
            fill="outline"
            size="sm"
            iconLeft={ArrowLeft}
          >
            All work
          </Button>
          <Button to="/#contact" intent="secondary" fill="outline" size="sm">
            Contact
          </Button>
        </div>
      </header>

      <main className="container cs-main">
        <Reveal>
          <p className="cs-kicker">{study.discipline}</p>
          <h1 className="cs-title">{study.name}</h1>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="cs-meta">
            {study.context && <span>{study.context}</span>}
            {study.role && <span>{study.role}</span>}
            <span>{study.status}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="cs-tags">
            {study.tags.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="cs-visual" style={{ background: visual.bg }} />
        </Reveal>

        {study.problem && <Section title="The problem">{study.problem}</Section>}

        {study.contributions && study.contributions.length > 0 && (
          <Reveal>
            <section className="cs-section">
              <h2 className="cs-h2">What I did</h2>
              <ul className="cs-list">
                {study.contributions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {study.outcome && <Section title="Outcome">{study.outcome}</Section>}

        {study.confidential && (
          <Reveal>
            <p className="cs-note">
              Some details are kept general for confidentiality. Happy to walk
              through the specifics in a conversation.
            </p>
          </Reveal>
        )}

        <Reveal>
          <section className="cs-more">
            <h2 className="cs-h2">More work</h2>
            <div className="cs-more-grid">
              {others.map((c) => {
                const v = VISUALS[CASE_STUDIES.indexOf(c) % VISUALS.length];
                return (
                  <PreviewCard
                    key={c.slug}
                    to={`/work/${c.slug}`}
                    title={c.name}
                    subtitle={c.discipline}
                    tint={v.bg}
                    glow={v.glow}
                  />
                );
              })}
            </div>
          </section>
        </Reveal>
      </main>
    </div>
  );
}

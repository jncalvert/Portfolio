import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { EXPERIENCE } from "../../data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          kicker="Career"
          title="Experience"
          icon={GraduationCap}
          lead="A few years designing, shipping, and leading across product, web, and brand."
        />

        <div>
          {EXPERIENCE.map((role, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={role.title + role.period} delay={i * 0.05}>
                <div className="accordion-item">
                  <button
                    className="accordion-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--space-1)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1.25rem, 3vw, var(--text-2xl))",
                          fontWeight: "var(--weight-medium)",
                          lineHeight: 1.1,
                        }}
                      >
                        {role.title}
                      </span>
                      <span
                        style={{
                          fontSize: "var(--text-sm)",
                          color: "var(--color-text-tertiary)",
                        }}
                      >
                        {role.company}
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--space-5)",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        className="exp-period"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "var(--text-sm)",
                          color: "var(--color-text-tertiary)",
                        }}
                      >
                        {role.period}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        style={{ display: "inline-flex" }}
                      >
                        <Plus size={22} />
                      </motion.span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          style={{
                            paddingBottom: "var(--space-8)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "var(--space-4)",
                            maxWidth: "60ch",
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              fontSize: "var(--text-lg)",
                              lineHeight: "var(--leading-relaxed)",
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            {role.blurb}
                          </p>
                          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                            {role.tags.map((t) => (
                              <span key={t} className="tag">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

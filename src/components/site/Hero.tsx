import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE, HERO, DISCIPLINES } from "../../data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

// Static headline: staggered line reveal on load.
const HEAD_LINES = HERO.headline;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const plumeARef = useRef<HTMLDivElement>(null);
  const plumeBRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  // A spotlight that smoothly follows the cursor, plus gentle counter-parallax
  // on the ambient plumes. Everything is driven by transforms in a single rAF
  // loop so it stays GPU-composited.
  useEffect(() => {
    const section = sectionRef.current;
    const spot = spotRef.current;
    const a = plumeARef.current;
    const b = plumeBRef.current;
    if (!section || !spot || !a || !b) return;

    let w = section.offsetWidth;
    let h = section.offsetHeight;
    let tx = 0.5; // target, normalized 0…1
    let ty = 0.4;
    let x = tx; // smoothed
    let y = ty;
    let raf = 0;

    // Track on window - the fixed header overlaps the hero, so listening on the
    // section itself would fire mouseleave (and reset the spotlight) whenever the
    // cursor crossed onto a header element sitting on top of it.
    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      w = r.width;
      h = r.height;
      tx = (e.clientX - r.left) / r.width;
      ty = (e.clientY - r.top) / r.height;
    };
    const loop = () => {
      x += (tx - x) * 0.09;
      y += (ty - y) * 0.09;
      spot.style.transform = `translate3d(${x * w}px, ${y * h}px, 0)`;
      const dx = x - 0.5;
      const dy = y - 0.5;
      a.style.transform = `translate3d(${dx * -44}px, ${dy * -38}px, 0)`;
      b.style.transform = `translate3d(${dx * 64}px, ${dy * 56}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Full-bleed ambient - deep black with a cursor-tracked spotlight */}
      <div className="hero-ambient" aria-hidden>
        <div ref={plumeARef} className="hero-parallax">
          <div className="hero-plume hero-plume--1" />
        </div>
        <div ref={plumeBRef} className="hero-parallax">
          <div className="hero-plume hero-plume--2" />
        </div>
        <div ref={spotRef} className="hero-spotlight" />
        <div className="hero-vignette" />
        <div className="hero-fade" />
        <div className="hero-noise" />
      </div>

      <div className="container hero-inner">
        {/* Top band - headline + supporting copy */}
        <div className="hero-top">
          <div>
            <h1 className="hero-headline">
              {HEAD_LINES.map((line, i) => (
                <span key={line} className="line">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.1 + i * 0.12 }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <motion.div
            className="hero-aside"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          >
            <p>
              {PROFILE.tagline}
              {PROFILE.taglineMuted && (
                <span className="muted"> {PROFILE.taglineMuted}</span>
              )}
            </p>
            <hr />
            <div className="hero-social-row">
              <span className="label">Find me at</span>
              <div className="hero-socials">
                {PROFILE.socials.map((s) => (
                  <a
                    key={s.label}
                    className="hero-social"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom band - services list + featured card */}
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
        >
          <div className="hero-services">
            <span className="hero-eyebrow">What I do</span>
            <ul>
              {DISCIPLINES.map((s, i) => (
                <li key={s.id}>
                  <span className="dash" style={{ animationDelay: `${i * 0.45}s` }} />
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <a className="hero-feature" href="#work">
            <span className="thumb" />
            <span className="meta">
              <strong>{HERO.featured.title}</strong>
              <span>{HERO.featured.note}</span>
            </span>
            <span className="go">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

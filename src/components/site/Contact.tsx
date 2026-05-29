import { useState, type FormEvent } from "react";
import { ArrowUp } from "lucide-react";
import Reveal from "./Reveal";
import ScrollText from "./ScrollText";
import MagneticButton from "./MagneticButton";
import { PROFILE } from "../../data/content";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "someone"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="section" style={{ paddingBottom: "var(--space-12)" }}>
      <div className="container">
        <Reveal>
          <span className="kicker">
            <span className="pulse-dot" />
            Available for work
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2
            style={{
              marginTop: "var(--space-5)",
              fontSize: "clamp(3rem, 11vw, 9rem)",
              fontWeight: "var(--weight-medium)",
              letterSpacing: "var(--tracking)",
              lineHeight: 0.95,
            }}
          >
            Let's <span className="gradient-text">work</span>
          </h2>
        </Reveal>

        <ScrollText
          text="Like my work? Send me a message and let's build something that performs."
          style={{
            marginTop: "var(--space-6)",
            fontSize: "var(--text-xl)",
            color: "var(--color-text-primary)",
            maxWidth: "40ch",
          }}
        />

        {/* Form */}
        <Reveal delay={0.18}>
          <form
            onSubmit={onSubmit}
            style={{
              marginTop: "var(--space-12)",
              display: "grid",
              gap: "var(--space-4)",
              gridTemplateColumns: "1fr 1fr",
              maxWidth: 720,
            }}
            className="contact-form"
          >
            <input
              className="field"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="field"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="field"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              style={{
                gridColumn: "1 / -1",
                height: "auto",
                paddingTop: "var(--space-4)",
                paddingBottom: "var(--space-4)",
                borderRadius: "var(--radius-2xl)",
                resize: "vertical",
                fontFamily: "var(--font-body)",
              }}
            />
            <div style={{ gridColumn: "1 / -1" }}>
              <MagneticButton variant="gradient">Send message</MagneticButton>
            </div>
          </form>
        </Reveal>

        {/* Footer bar */}
        <div
          style={{
            marginTop: "var(--space-28)",
            paddingTop: "var(--space-8)",
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-6)",
          }}
        >
          <a
            href={`mailto:${PROFILE.email}`}
            className="gradient-text"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.25rem, 4vw, var(--text-3xl))",
              fontWeight: "var(--weight-medium)",
              textDecoration: "none",
            }}
          >
            {PROFILE.email}
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            {PROFILE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="tag"
                style={{ height: 40, padding: "0 var(--space-4)" }}
              >
                {s.label}
              </a>
            ))}
            <MagneticButton
              href="#top"
              variant="ghost"
              size="sm"
              arrow={false}
              className="back-to-top"
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                Back to top <ArrowUp size={15} />
              </span>
            </MagneticButton>
          </div>
        </div>

        <div
          style={{
            marginTop: "var(--space-8)",
            fontSize: "var(--text-sm)",
            color: "var(--color-text-muted)",
          }}
        >
          © {new Date().getFullYear()} {PROFILE.name}. Designed & built from scratch.
        </div>
      </div>
    </footer>
  );
}

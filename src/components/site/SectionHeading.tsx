import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import ScrollText from "./ScrollText";

/** Section header molecule: glossy badge (icon + label) over a large display
 *  title, with an optional lead paragraph and/or action aligned to the right —
 *  matching the "What I do" / "Our Projects" headers. */
export default function SectionHeading({
  kicker,
  title,
  icon: Icon,
  lead,
  action,
}: {
  kicker: string;
  title: string;
  icon?: LucideIcon;
  lead?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="services-head">
      <Reveal>
        <span className="services-badge">
          {Icon ? <Icon size={16} /> : <span className="kicker-dot" />}
          {kicker}
        </span>
      </Reveal>
      <div className="services-title-row">
        <Reveal delay={0.06}>
          <h2 className="services-title">{title}</h2>
        </Reveal>
        {(lead || action) && (
          <div className="section-head-aside">
            {lead && <ScrollText className="services-lead" text={lead} />}
            {action && <Reveal delay={0.12}>{action}</Reveal>}
          </div>
        )}
      </div>
    </div>
  );
}

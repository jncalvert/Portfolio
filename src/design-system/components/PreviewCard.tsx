import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export interface PreviewCardProps {
  title: string;
  subtitle?: string;
  /** Internal route. When set, the card becomes a link with a hover affordance. */
  to?: string;
  /** Image URL for the preview tile. */
  image?: string;
  /** Fallback tint (CSS background) shown when there is no image. */
  tint?: string;
  /** Soft glow colour behind the tint placeholder. */
  glow?: string;
}

/**
 * Media-first card: a preview tile (image, or a tinted placeholder) with a
 * title and optional subtitle below. Renders a router link when `to` is set.
 */
export function PreviewCard({
  title,
  subtitle,
  to,
  image,
  tint,
  glow,
}: PreviewCardProps) {
  const body = (
    <>
      <span
        className="pcard-art"
        style={image ? { backgroundImage: `url(${image})` } : { background: tint }}
      >
        {!image && glow && (
          <span className="pcard-glow" style={{ background: glow }} />
        )}
        {to && <ArrowUpRight className="pcard-arrow" size={16} aria-hidden />}
      </span>
      <span className="pcard-text">
        <span className="pcard-title">{title}</span>
        {subtitle && <span className="pcard-sub">{subtitle}</span>}
      </span>
    </>
  );

  return to ? (
    <Link to={to} className="pcard">
      {body}
    </Link>
  ) : (
    <article className="pcard">{body}</article>
  );
}

export default PreviewCard;

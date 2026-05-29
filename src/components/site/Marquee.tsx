import type { ReactNode } from "react";

/** Infinite horizontal marquee. Renders the track twice for a seamless loop;
 *  pauses on hover (see `.marquee` CSS). */
export default function Marquee({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track" aria-hidden={false}>
        {children}
      </div>
      <div className="marquee-track" aria-hidden>
        {children}
      </div>
    </div>
  );
}

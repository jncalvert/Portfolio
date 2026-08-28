import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * On forward navigation (link click), jump to the top of the new page, or to
 * the hash target if the URL carries one. On back / forward (POP), do nothing
 * and let the browser restore the previous scroll position.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType === "POP") return;

    if (hash) {
      const id = hash.slice(1);
      let tries = 0;
      const jump = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
        } else if (tries++ < 10) {
          requestAnimationFrame(jump);
        } else {
          window.scrollTo(0, 0);
        }
      };
      requestAnimationFrame(jump);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, navType]);

  return null;
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./theme/ThemeContext.tsx";

const root = createRoot(document.getElementById("root")!);

const render = (node: React.ReactNode) =>
  root.render(
    <StrictMode>
      <ThemeProvider>{node}</ThemeProvider>
    </StrictMode>,
  );

// /styleguide renders the design-system reference page. The whole branch sits
// behind `import.meta.env.DEV`, so it is dead-code-eliminated from the
// production build: never reachable and never bundled on the deployed site.
if (import.meta.env.DEV && window.location.pathname.replace(/\/+$/, "") === "/styleguide") {
  import("./design-system/StyleGuide.tsx").then((m) => render(<m.default />));
} else {
  render(<App />);
}

import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MotionConfig } from "motion/react";
import "./index.css";
import App from "./App.tsx";
import CaseStudyPage from "./pages/CaseStudyPage.tsx";
import ScrollManager from "./components/site/ScrollManager.tsx";
import { ThemeProvider } from "./theme/ThemeContext.tsx";

// Design-system reference page + its floating shortcut. Dev-only and
// code-split, so neither is reachable or bundled on the deployed site.
const StyleGuide = import.meta.env.DEV
  ? lazy(() => import("./design-system/StyleGuide.tsx"))
  : null;
const StyleGuideLink = import.meta.env.DEV
  ? lazy(() => import("./components/dev/StyleGuideLink.tsx"))
  : null;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <ScrollManager />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/work/:slug" element={<CaseStudyPage />} />
            {StyleGuide && (
              <Route
                path="/styleguide"
                element={
                  <Suspense fallback={null}>
                    <StyleGuide />
                  </Suspense>
                }
              />
            )}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          {StyleGuideLink && (
            <Suspense fallback={null}>
              <StyleGuideLink />
            </Suspense>
          )}
        </BrowserRouter>
      </MotionConfig>
    </ThemeProvider>
  </StrictMode>,
);

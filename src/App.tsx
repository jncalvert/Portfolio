import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import CustomCursor from "./components/site/CustomCursor";
import Header from "./components/site/Header";
import Hero from "./components/site/Hero";
import Skills from "./components/site/Skills";
import Projects from "./components/site/Projects";
import About from "./components/site/About";
import Experience from "./components/site/Experience";
import Contact from "./components/site/Contact";

export default function App() {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, smoothWheel: true, anchors: { offset: -16 } }}
    >
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
      <div
        className="page-blur-bottom"
        aria-hidden
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />
    </ReactLenis>
  );
}

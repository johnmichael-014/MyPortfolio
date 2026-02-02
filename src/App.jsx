import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

// ✅ Import Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

function App() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      const yOffset = -80; // adjust for fixed navbar
      const y = projectsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero scrollToProjects={scrollToProjects} />
      <About />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Skills />
      <Certificates />
      <Contact />

      {/* ✅ Add Vercel Analytics at the bottom */}
      <Analytics />
    </div>
  );
}

export default App;

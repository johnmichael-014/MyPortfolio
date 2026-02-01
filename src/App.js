import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <section id="Hero">
        <Hero />
      </section>
     
      <section id="Projects">
        <Projects />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Certificates">
        <Certificates />
      </section>
       <section id="About">
        <About />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
}

export default App;

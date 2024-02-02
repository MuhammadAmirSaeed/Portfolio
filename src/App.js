import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tec from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/index";

function App() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <NavBar />
        <Hero />
      </div>
      <div>
        <About />
        <Experience />
        <Tec />
        <Works />
        <Feedbacks />
      </div>
      <div className="relative z-0">
        <Contact />
        {/* <StarsCanvas /> */}
      </div>
      hello
    </div>
  );
}

export default App;

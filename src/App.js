import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tec from "./components/Tech";
import Works from "./components/Works";
// import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import Stars from "./components/canvas/Stars";
import Footer from "./components/Footer/Footer";

function App ()
{
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
        <NavBar />
        <Hero />
      </div>
      <div>
        <About />
         <Experience />  
        <Tec />
        <Works />
      </div>
      <div className="relative z-0">
        <Contact />
        <Stars />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;

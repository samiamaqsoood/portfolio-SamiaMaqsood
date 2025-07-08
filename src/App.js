import ExperiencePage from "pages/ExperiencePage";
import "./App.css";
import GlassIcons from "./components/GlassIcons";
import GooeyNavCall from "./components/GooeyNavCall";
import HomePage from "./pages/HomePage";
import AboutPage from "pages/AboutPage";
import ProjectsPage from "pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "pages/ContactPage";
import SplashCursor from './components/SplashCursorFolder/SplashCursor'
import MyStack from "pages/MyStack";

import { useState, useEffect } from "react";

function App() {
  
const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust breakpoint
    };

    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (

    <div className="App">
       {!isMobile && <SplashCursor />}
      {/* <SplashCursor /> */}
       <GooeyNavCall />
        <GlassIcons />

        <section id="home" >
        <HomePage />
        </section>

        <section id="about">
        <AboutPage />
        </section>

         <section id="projects">
        <ProjectsPage />
        </section>

        <section id="experience">
        <ExperiencePage />
        </section>

        <section id="experience" >
        <MyStack />
        </section>

        <section id="resume">
        <ResumePage />
        </section>

        <section id="contact">
        <ContactPage />
        </section>

    

    </div>
  );
}

export default App;

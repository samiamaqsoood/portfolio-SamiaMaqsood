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


function App() {
  return (

    <div className="App">
      <SplashCursor />
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

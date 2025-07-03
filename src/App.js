import ExperiencePage from "pages/ExperiencePage";
import "./App.css";
import GlassIcons from "./components/GlassIcons";
import GooeyNavCall from "./components/GooeyNavCall";
import HomePage from "./pages/HomePage";
import AboutPage from "pages/AboutPage";


function App() {
  return (

    <div className="App">
       <GooeyNavCall />
        <GlassIcons />

        <section id="home" >
        <HomePage />
        </section>

        <section id="about">
        <AboutPage />
        </section>

        <section id="experience"> hello
        <ExperiencePage />
        </section>
    

    </div>
  );
}

export default App;

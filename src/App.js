import "./App.css";
import Home from "./components/Home";
import GlassIcons from "./components/GlassIcons";
import GooeyNavCall from "./components/GooeyNavCall";
import About_ThreadCall from "./components/About_ThreadCall";
import AboutMeText from "./components/AboutMeText";
import ProfileCardCall from "./components/ProfileCardCall";

function App() {
  return (
    <div className="App">
      <div className="page1">
        <Home />
        <GlassIcons />
        <GooeyNavCall />
      </div>
      <div className="page2">
        <div className="text-and-profileCard">
          <AboutMeText />
          <ProfileCardCall />
        </div>
        <div className="about-thread">
        <About_ThreadCall />
        </div>
      </div>
    </div>
  );
}

export default App;

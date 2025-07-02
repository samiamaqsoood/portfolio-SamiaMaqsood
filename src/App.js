import "./App.css";
// import { BrowserRouter,Routes, Route } from "react-router-dom";
import GlassIcons from "./components/GlassIcons";
import GooeyNavCall from "./components/GooeyNavCall";
import HomePage from "./pages/HomePage";
import AboutPage from "pages/AboutPage";


function App() {
  return (
    //  <BrowserRouter>
    <div className="App">
       <GooeyNavCall />
        <GlassIcons />
        <HomePage />
        <AboutPage />
     
       {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        </Routes> */}

    </div>
    // </BrowserRouter>
  );
}

export default App;

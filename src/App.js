import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import GlassIcons from './components/GlassIcons';
import GooeyNavCall from './components/GooeyNavCall';
import HomeTextCall from './components/HomeTextCall';

function App() {
  return (
    <div className="App">
      <Home />
      <GlassIcons />
      <GooeyNavCall />
      <HomeTextCall />
      
    </div>
  );
}

export default App;

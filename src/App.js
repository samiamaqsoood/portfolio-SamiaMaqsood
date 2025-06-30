// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import GlassIcons from './components/GlassIcons';
import GooeyNavCall from './components/GooeyNavCall';
// import AboutCall from './components/AboutCall';
import About_ThreadCall from './components/About_ThreadCall';

function App() {
  return (
    <div className="App">
      <div className='page1'>
      <Home />
      <GlassIcons />
      <GooeyNavCall />
      </div>
      <div className='page2' style={{height:'1000px',width:'100%'}}>
        <About_ThreadCall />
      {/* <AboutCall /> */}
      </div>
      
    </div>
  );
}

export default App;

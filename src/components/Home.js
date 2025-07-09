import Spline from '@splinetool/react-spline';
import './Home.css';
import HomeTextCall from './HomeTextCall';
import './HomeText.css'

export default function Home() {
  return (
    <div className='bg-robo'>
      {/* <Spline className='robo' scene="/models/robo_model.spline" /> */}
        <Spline className='robo' scene="/Portfolio-SamiaMaqsood/models/robo_model.spline  " />
      {/* /Portfolio-SamiaMaqsood/models/robo_model.spline */}
  
       <HomeTextCall />
    </div>
  );
}


import React from 'react'
import '../App.css'
import Resume from '../components/Resume'
import StarBorder from '../components/StarBorderFolder/StarBorder.jsx'
import SplitText from '../components/SplitText'

import { useState, useEffect } from "react";

export default function ResumePage() {
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
    <div className='page6'>
      {!isMobile && <Resume />}
      <div className='download-section'>
         <SplitText
                        text='Click the button below to Download .pdf file!'
                        className="text-2xl font-semibold text-center"
                        delay={100}
                        duration={0.3}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        
                    />
                     <StarBorder
  as="button"
  className="custom-class download-btn"
  color="purple"
  speed="5s"
>
   <a style={{textDecoration:"none",color:"white"}}
     href="/samia_maqsood_Resume.pdf"
  download="Samia_Maqsood_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Download CV
</a>
</StarBorder>
      </div>

     
    </div>
  )
}
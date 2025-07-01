import React from 'react'
import { useState } from "react";
import SplitText from "./SplitText";
import "./HomeText.css";

 const handleAnimationComplete = () => {
        console.log("All letters have animated!");
};

export default function AboutMeText() {
   

    const [step, setStep] = useState(1); // control animation steps

    const handleNextStep = () => setStep((prev) => prev + 1);
    return (
        <div className="text-container" style={{width:'100%', maxWidth: '600px'
}}>

            {/* {step >= 1 && ( */}

                <div className="text-container1">
                    <SplitText
                        text="About Me"
                        className="text-2xl font-semibold text-center about-meText"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                        // onLetterAnimationComplete={handleNextStep}
                    />
                </div>
            {/* )} */}

            {/* {step >= 2 && ( */}
                <div className="text-container2" style={{fontSize:'large',fontWeight:"450"}}>
                    <SplitText 
                        text="I'm a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with a strong foundation in C++, Data Structures, and Algorithmic problem-solving. I began coding with C and C++, which shaped my logical thinking and clean coding habits.

Currently pursuing a Bachelor's in IT (2 years remaining), I'm actively building real-world projects, improving through hands-on development and open-source contributions. Though I'm a fresher, I'm driven, fast-learning, and eager to grow in dynamic tech environments.

I love turning ideas into efficient, user-centric web applications and am seeking opportunities to collaborate and contribute to impactful software solutions.

"
                        className="text-2xl font-semibold text-center about-pageLining"
                        delay={10}
                        duration={0.2}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                        onLetterAnimationComplete={handleAnimationComplete}
                        // onLetterAnimationComplete={handleNextStep}
                    />
                </div>
            </div>)
}


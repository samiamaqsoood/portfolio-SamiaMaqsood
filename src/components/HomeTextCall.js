import React from "react";
import { useState } from "react";
import SplitText from "./SplitText";
import "./HomeText.css";

const handleAnimationComplete = () => {
    console.log("All letters have animated!");
};

export default function HomeTextCall() {

    const [step, setStep] = useState(1); // control animation steps

  const handleNextStep = () => setStep((prev) => prev + 1);

    return (
        <div className="text-container">

            {step >= 1 && (

                <div className="text-container1">
                    <SplitText
                        text="I'am"
                        className="text-2xl font-semibold text-center"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        // onLetterAnimationComplete={handleAnimationComplete}
                        onLetterAnimationComplete={handleNextStep}
                    />
                </div>
            )}

             {step >= 2 && (
                <div className="text-container2">
                    <SplitText
                        text="Samia Maqsood!"
                        className="text-2xl font-semibold text-center"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        // onLetterAnimationComplete={handleAnimationComplete}
                        onLetterAnimationComplete={handleNextStep}
                    />
                </div>
             )}

             {step >= 3 && (

                <div className="text-container3">
                    <SplitText
                        text="A Creative"
                        className="text-2xl font-semibold text-center"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        // onLetterAnimationComplete={handleAnimationComplete}
                        onLetterAnimationComplete={handleNextStep}
                    />
                </div>
             )}
             {step >= 4 && (
                <div className="text-container4">
                    <SplitText
                        text="Full-Stack Developer."
                        className="text-2xl font-semibold text-center"
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
                    />
                </div>
             )}


        </div>
    );
}

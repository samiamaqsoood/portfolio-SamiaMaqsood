import React from 'react'
import SplitText from "./SplitText";
import "./AboutMeText.css"

 const handleAnimationComplete = () => {
        console.log("All letters have animated!");
};

export default function AboutMeText() {

    return (
        <div className="metext-container">

                <div className="metext-container1">
                    <SplitText
                        text="About Me"
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

                <div className="metext-container2">
                   <span>"I'm a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with a strong foundation in C++, Data Structures, and Algorithmic problem-solving. I began coding with C and C++, which shaped my logical thinking and clean coding habits.

Currently pursuing a Bachelor's in IT (2 years remaining), I'm actively building real-world projects, improving through hands-on development and open-source contributions. Though I'm a fresher, I'm driven, fast-learning, and eager to grow in dynamic tech environments.

I love turning ideas into efficient, user-centric web applications and am seeking opportunities to collaborate and contribute to impactful software solutions.

"</span>
                </div>
            </div>)
}


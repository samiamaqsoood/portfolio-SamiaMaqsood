// Resume.jsx
import React from "react";
import "./Resume.css"; // You’ll need to style this file

export default function Resume() {
  return (
    <div className="resume-container">
      <h4>Samia Maqsood</h4>
      <p>
        <b>Phone:</b> +92 3177404013 |{" "}
        <b>Email:</b>{" "}
        <a href="mailto:samiamaqsoood@gmail.com">
          samiamaqsoood@gmail.com
        </a>{" "}
        <br />
        <a href="https://linkedin.com/in/samia-maqsood" target="_blank" rel="noreferrer">
          LinkedIn
        </a>{" "}
        |{" "}
        <a href="https://yourportfolio.com" target="_blank" rel="noreferrer">
          Portfolio
        </a>
      </p>

      <section>
        <h4>Objective</h4>
        <p>
          Enthusiastic and fast-learning <b>MERN Stack Developer</b> with b
          foundations in <b>C++, OOP, DSA, Operating Systems</b>, and{" "}
          <b>Computer Networking</b>. Currently pursuing a{" "}
          <b>Bachelor's in Information Technology</b>, eager to
          contribute to real-world software projects while learning and growing.
        </p>
      </section>

      <section>
        <h4>Education</h4>
        <ul>
          <li>
            <b>BS Information Technology</b>, University of Sargodha (2023–2027)
          </li>
          <li>
            <b>ICS</b>, Reader Group of Colleges (2022–2023)
          </li>
          <li>
            <b>Matriculation (CS)</b>, Govt. Junior Model High School (2020–2021)
          </li>
        </ul>
      </section>

      <section>
        <h4>Skills</h4>
        <p>
          <b>Languages:</b> C++, JavaScript, HTML, CSS <br />
          <b>Frameworks:</b> React.js, Express.js, Node.js <br />
          <b>Database:</b> MongoDB, Firebase <br />
          <b>Concepts:</b> OOP, DSA, REST APIs, OS, Networking <br />
          <b>Tools:</b> Git, GitHub, VS Code, Thunder Client, MS Word/Excel, Canva <br />
          <b>Soft Skills:</b> Communication, Time Management, Team Collaboration
        </p>
      </section>

      <section>
        <h4>Projects</h4>
        <ul>
          <li><b>Weather App</b> – HTML/CSS/JavaScript</li>
          <li><b>Recipe Search Engine</b> – HTML/CSS/JavaScript</li>
          <li><b>Tic-Tac-Toe Game</b> – HTML/CSS/JavaScript</li>
          <li><b>Animated Personal Portfolio</b> – MERN Stack</li>
          <li><b>User Authentication System</b> – MERN Stack</li>
          <li><b>ToDo App (Ongoing)</b> – React + MongoDB</li>
          <li><b>DSA Practice in C++</b> – 250+ problems solved on LeetCode/GFG</li>
        </ul>
      </section>

      <section>
        <h4>Extra-Curricular Activities</h4>
        <ul>
          <li>Active contributor to programming communities</li>
          <li>Write content and tutorials for junior devs</li>
        </ul>
      </section>

    
    </div>
  );
}

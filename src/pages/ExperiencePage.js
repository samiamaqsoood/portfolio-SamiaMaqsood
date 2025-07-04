import React, { createElement } from "react";
import Experience from "../components/Experience";
import "../App.css";
import AnimatedContentImg from "../components/AnimatedContentImg";

import react from "../components/assets/react.png";
import express from "../components/assets/express.png";
import cplusplus from "../components/assets/cplusplus.png";
import css from "../components/assets/css-3.png";
import html from "../components/assets/html.png";
import js from "../components/assets/js.png";
import node from "../components/assets/node.png";
import c from "../components/assets/c.png";

const languages = [
  { name: "c++", source: cplusplus },
  { name: "hmtl", source: html },
  { name: "css", source: css },
  { name: "javasript", source: js },
  { name: "react", source: react },
  { name: "node", source: node },
  { name: "express", source: express },
  { name: "c", source: c },
];

export default function ExperiencePage() {
  return (
    <div className="page3">
      <Experience />
      <div className="languages-container">
      {languages.map(path => {
        return <AnimatedContentImg  source ={path.source}/>

      })}
        
      </div>
    </div>
  );
}

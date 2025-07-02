import React from 'react'
import GooeyNav from './GooeyNav'
// import { Link } from 'react-router-dom';

// update with your own items
const items = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
  { label: "Resume", to: "/resume" },
];


export default function GooeyNavCall() {
  return (
    <div className='NavContiner' style={{position: 'absolute',right:0,top:0,marginTop:'10px', zIndex:9}}>
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
</div>
  )
}

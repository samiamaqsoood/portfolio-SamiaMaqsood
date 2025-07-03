import React from 'react'
import GooeyNav from './GooeyNav'


// update with your own items
const items = [
  { label: "Home", href:"#home" },
  { label: "About", href:"#about"},
  { label: "Projects", href:"#projects" },
  { label: "Experience", href:"#experience" },
  { label: "Resume",href:"resume" },
   { label: "Contact", href:"contact" },
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

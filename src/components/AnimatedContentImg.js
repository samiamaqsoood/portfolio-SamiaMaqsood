import AnimatedContent from './AnimatedContent'
import React from 'react'
import './AnimatedContentStyle.css'

export default function AnimatedContentImg(props) {
  return (
    <div className='language'>
      <AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
  <div><img className='lan-img' src={props.source} alt='coding language png'/></div>
</AnimatedContent>
    </div>
  )
}
import React from 'react'
import Threads from './Threads';
import "./Threads.css"


export default function About_ThreadCall() {
  return (
<div className='thread'>
  <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
  />
</div>
  )
}

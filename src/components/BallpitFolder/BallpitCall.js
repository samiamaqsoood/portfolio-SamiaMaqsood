import React from 'react'
import Ballpit from './Ballpit'
  
  export default function BallpitCall() {
    return (
        <div style={{position: 'relative', overflow: 'hidden', minHeight: '500px',height:'100%', width: '100%',marginBottom:'0px'}}>
            
  <Ballpit
    count={100}
    gravity={0.5}
    friction={0.9975}
    wallBounce={0.95}
    followCursor={false}
  />
</div>
    )
  }
  


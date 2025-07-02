import React from 'react'
import "../App.css"
import AboutMeText from 'components/AboutMeText'
import ProfileCardCall from 'components/ProfileCardCall'
import AboutThreadCall from 'components/AboutThreadCall'

export default function AboutPage() {
  return (
    <div>
       <div className="page2">
        <div className="text-and-profileCard">
          <AboutMeText />
          <ProfileCardCall />
        </div>
        <div className="about-thread">
        <AboutThreadCall />
        </div>
      </div>
    </div>
  )
}

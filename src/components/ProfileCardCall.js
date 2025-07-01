import React from "react";
import ProfileCard from "./ProfileCard.jsx";
import "./ProfileCard.css"
import SamiaImage from "./assets/avatar.png"

export default function ProfileCardCall() {
  return (
    <div className="profile-card">
      <ProfileCard
        name="Samia"
        title="Software Developer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl={SamiaImage}
        showUserInfo={false}
        enableTilt={false}
        onContactClick={() => console.log("Contact clicked")}
      />
    </div>
  );
}

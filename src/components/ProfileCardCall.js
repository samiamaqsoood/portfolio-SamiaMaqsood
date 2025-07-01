import React from "react";
import ProfileCard from "./ProfileCard.jsx";
import "./ProfileCard.css"

export default function ProfileCardCall() {
  return (
    <div className="profile-card">
      <ProfileCard
        name="Samia Maqsood"
        title="Software Developer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/public/"
        showUserInfo={false}
        enableTilt={true}
        onContactClick={() => console.log("Contact clicked")}
      />
    </div>
  );
}

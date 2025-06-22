import React from "react";

const CodingProfileCard = ({ profile }) => {
  const handleClick = () => {
    window.open(profile.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="skill-item coding-profile-card" onClick={handleClick}>
      <div className="item-image">
        <img src={profile.image} alt={profile.name} />
      </div>
      <div className="item-title">
        <p>{profile.name}</p>
        <span>{profile.type}</span>
      </div>
    </div>
  );
};

export default CodingProfileCard;

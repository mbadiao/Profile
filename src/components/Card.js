import React from "react";
import Avatar from "./Avatar";
import HideAvatar from "./HideAvatar";
// notre composant Card prend plusieurs paramètres
const Card = ({shows, fullName, bio, profession ,imgSrc}) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl flex flex-col items-center">
        {/* condition pour afficher l'image du profil */}
      {shows ? <Avatar src={imgSrc} /> : <HideAvatar />}
      <div class="card-body">
        <h2 class="card-title text-accent">{fullName}</h2>
        <p>{bio}</p>
        <p>{profession}</p>
      </div>
    </div>
  );
};

export default Card;

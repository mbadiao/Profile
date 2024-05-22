import React from "react";
// notre composant Avatar prend un paramètre `src` qui est l'URL de l'image
const Avatar = ({src}) => {
  return (
    <div class="avatar">
      <div class="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
        <img src={src} alt="profil" />
      </div>
    </div>
  );
};

export default Avatar;

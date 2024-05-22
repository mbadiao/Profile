import React from "react";
// notre composant HideAvatar est un composant de remplacement pour l'image du profil
const HideAvatar = () => {
  return (
    <div class="avatar placeholder">
      <div class="bg-neutral text-neutral-content rounded-full w-24">
        <span class="text-3xl">MD</span>
      </div>
    </div>
  );
};

export default HideAvatar;

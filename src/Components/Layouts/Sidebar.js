import React, { useState } from "react";

const Sidebar = (props) => {
  const handleMenuClick = () => {
    props.toggleSidebar();
  };

  return (
    <div className="containerSide flex items-start flex-col">
      <div className="burgerLogo flex items-center">
        <div className="menuBurger relative ml-5" onClick={handleMenuClick}>
          <div className="p-3 rounded-full hover:bg-gray-200 transition-colors duration-300">
            <img
              className=""
              width="32"
              src="https://img.icons8.com/ios-glyphs/30/menu--v1.png"
              alt="menu--v1"
            />
          </div>
        </div>
        <div className="logo relative">
          <img
            className="logoyt w-40 ml-6 mb-8 mt-4"
            src={props.elsrc}
            alt={props.elalt}
          />
        </div>
      </div>
      <div className="menu overflow-y-auto ml-24">
        <ul>
          <li>Accueil</li>
          <li>Shorts</li>
          <li>Abonnements</li>
          <hr />
          <li>Bibliothèque</li>
          <li>Historique</li>
          <li>À regarder plus tard</li>
          <li>Vidéos "J'aime"</li>
          <hr />
          <li>Abonnements</li>
          <li>Théo Bouzige</li>
          <li>Chaînes</li>
          <hr />
          <li>Explorer</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

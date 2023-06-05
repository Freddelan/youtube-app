import React, { useState } from "react";

const Sidebar = (props) => {
  const handleMenuClick = () => {
    props.toggleSidebar();
  };

  return (
    <div className="containerSide w-96 flex flex-col">
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
      <div className="menu overflow-y-auto  ml-8">
        <ul>
          <li className="flex center  ">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/fluency-systems-regular/48/home.png"
              alt="home"
            />
            <span className="ml-12">Accueil</span>
          </li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/plumpy/24/000000/flash-on.png"
              alt="flash-on"
            />
            <span className="ml-12">Shorts</span>
          </li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/video-playlist.png"
              alt="video-playlist"
            />
            <span className="ml-12">Abonnements</span>
          </li>
          <br />
          <hr />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-outlined/24/video-gallery.png"
              alt="video-gallery"
            />
            <span className="ml-12">Bibliothèque</span>
          </li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/time-machine--v1.png"
              alt="time-machine--v1"
            />
            <span className="ml-12">Historique</span>
          </li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/clock--v1.png"
              alt="clock--v1"
            />
            <span className="ml-12">À regarder plus tard</span>
          </li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-outlined/24/facebook-like--v1.png"
              alt="facebook-like--v1"
            />
            <span className="ml-12">Vidéos "J'aime"</span>
          </li>
          <br />
          <hr />
          <li>Abonnements</li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/bubbles/50/user-male.png"
              alt="user-male"
            />
            <span className="ml-12">Théo Bouzige</span>
          </li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/add--v1.png"
              alt="add--v1"
            />
            <span className="ml-12">Chaînes</span>
          </li>
          <br />
          <hr />
          <li>Explorer</li>
          <br />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

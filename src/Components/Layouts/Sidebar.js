import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const handleMenuClick = () => {
    props.toggleSidebar();
  };

  const handleItemClick = () => {
    props.toggleSidebar();
  };

  return (
    <div className="containerSide absolute w-56 bg-white flex flex-col z-10 top-0 transition-transform duration-800 transform -translate-x-full md:translate-x-0">
      <div className="burgerLogo flex items-center">
        <div className="menuBurger mt-1 ml-4 top-0" onClick={handleMenuClick}>
          <div className="p-3 rounded-full hover:bg-gray-200 transition-colors">
            <img
              className=""
              width="24"
              src="https://img.icons8.com/ios-glyphs/30/menu--v1.png"
              alt="menu--v1"
            />
          </div>
        </div>
        <div className="logo absolute ml-20">
          <img
            className="logoyt w-28 ml-2 mt-1 "
            src={props.elsrc}
            alt={props.elalt}
          />
        </div>
      </div>
      <div className="menu overflow-y-auto  ml-8">
        <ul className="text-sm mt-5">
          <li className="flex center" onClick={handleItemClick}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/fluency-systems-regular/48/home.png"
              alt="home"
            />

            <Link to="/NewPage">
              <span className="ml-6">Accueil</span>
            </Link>
          </li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/plumpy/24/000000/flash-on.png"
              alt="flash-on"
            />
            <span className="ml-6">Shorts</span>
          </li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/video-playlist.png"
              alt="video-playlist"
            />
            <span className="ml-6">Abonnements</span>
          </li>
          <br />
          <hr />
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-outlined/24/video-gallery.png"
              alt="video-gallery"
            />
            <span className="ml-6">Bibliothèque</span>
          </li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/time-machine--v1.png"
              alt="time-machine--v1"
            />
            <span className="ml-6">Historique</span>
          </li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/clock--v1.png"
              alt="clock--v1"
            />
            <span className="ml-6">À regarder plus tard</span>
          </li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-outlined/24/facebook-like--v1.png"
              alt="facebook-like--v1"
            />
            <span className="ml-6">Vidéos "J'aime"</span>
          </li>
          <br />
          <hr />
          <br />
          <li>Abonnements</li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/bubbles/50/user-male.png"
              alt="user-male"
            />
            <span className="ml-6">Théo Bouzige</span>
          </li>
          <br />
          <li className="flex center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/add--v1.png"
              alt="add--v1"
            />
            <span className="ml-6">Chaînes</span>
          </li>
          <br />
          <hr />
          <br />
          <li>Explorer</li>
          <br />
          <li>Musique</li>
          <br />
          <li>Films et séries TV</li>
          <br />
          <li>Direct</li>
          <br />
          <li>Jeux vidéo</li>
          <br />
          <li>Actualités</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

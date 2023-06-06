import React, { useState } from "react";

const Navbar = (props) => {
  const [isInputFocused, setInputFocused] = useState(false);

  const [showTooltipMicrophone, setShowTooltipMicrophone] = useState(false);
  const [showTooltipScope, setShowTooltipScope] = useState(false);
  const [showTooltipNotification, setShowTooltipNotification] = useState(false);
  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleMouseEnterMicrophone = () => {
    setShowTooltipMicrophone(true);
  };

  const handleMouseLeaveMicrophone = () => {
    setShowTooltipMicrophone(false);
  };

  const handleMouseEnterScope = () => {
    setShowTooltipScope(true);
  };

  const handleMouseLeaveScope = () => {
    setShowTooltipScope(false);
  };

  const handleMouseEnterNotification = () => {
    setShowTooltipNotification(true);
  };

  const handleMouseLeaveNotification = () => {
    setShowTooltipNotification(false);
  };

  const handleMenuClick = () => {
    props.toggleSidebar();
  };

  return (
    <div className="containerNavbar navbar relative z-20 mt-0 container flex items-center top-0">
      <div className="burgerLogo flex items-center">
        <div className="menuBurger  ml-4 top-0" onClick={handleMenuClick}>
          <div className="p-3 rounded-full hover:bg-gray-200 transition-colors">
            <img
              className=""
              width="22"
              src="https://img.icons8.com/ios-glyphs/30/menu--v1.png"
              alt="menu--v1"
            />
          </div>
        </div>
        <div className="logo absolute ml-20">
          <img
            className="logoyt w-28 ml-2  "
            src={props.elsrc}
            alt={props.elalt}
          />
        </div>
      </div>
      <div className="relative  text-1xl ml-72 flex items-center">
        <input
          type="text"
          className={`px-6 py-2 w-8 md:w-auto custom-width h-10 border border-gray-300 rounded-l-full focus:outline-none transition-all duration-300 ${
            isInputFocused ? "pl-12 w-80" : ""
          }`}
          placeholder="Rechercher"
          style={{ width: "520px" }}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button className="px-6 py-2 h-10 font-thin bg-gray-300 border border-gray-300 rounded-r-full w-22 ">
          <img
            width="24"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/search--v1.png"
            alt="search--v1"
          />
        </button>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <img
            className={`h-5 w-5  transition-opacity duration-300 ${
              isInputFocused ? "opacity-100" : "opacity-0"
            }`}
            src="https://img.icons8.com/ios-glyphs/30/search--v1.png"
            alt="search--v1"
          />
        </div>
      </div>

      <div className="relative ml-4 flex items-center">
        <div
          className="p-3 rounded-full hover:bg-gray-200 transition-colors "
          onMouseEnter={handleMouseEnterMicrophone}
          onMouseLeave={handleMouseLeaveMicrophone}
        >
          <img
            width="24"
            height="32"
            src="https://img.icons8.com/material-rounded/24/microphone.png"
            alt="microphone"
          />
        </div>
        {showTooltipMicrophone && (
          <div
            className="tooltip absolute bg-white border border-gray-300 py-2 px-4"
            style={{ top: "100%", left: 0 }}
          >
            Effectuer une recherche vocale
          </div>
        )}
      </div>
      <div className="flex">
        <div className="relative ml-96 mt-2">
          <div
            className="p-3 rounded-full hover:bg-gray-200 transition-colors "
            onMouseEnter={handleMouseEnterScope}
            onMouseLeave={handleMouseLeaveScope}
          >
            <img
              width="24"
              height="32"
              src="https://img.icons8.com/windows/32/camcorder-pro.png"
              alt="camcorder-pro"
            />
          </div>
          {showTooltipScope && (
            <div
              className="tooltip absolute bg-white border border-gray-300 py-2 px-4"
              style={{ top: "100%", left: 0 }}
            >
              Créer
            </div>
          )}
        </div>
        <div className="absolute right-14 mt-2 mr-0">
          <div
            className="p-3 rounded-full hover:bg-gray-200 transition-colors "
            onMouseEnter={handleMouseEnterNotification}
            onMouseLeave={handleMouseLeaveNotification}
          >
            <img
              width="22"
              height="50"
              src="https://img.icons8.com/ios/50/appointment-reminders--v1.png"
              alt="appointment-reminders--v1"
            />
          </div>
          {showTooltipNotification && (
            <div
              className="tooltip  absolute bg-white border border-gray-300 py-2 px-4"
              style={{ top: "100%", left: 0 }}
            >
              Notification
            </div>
          )}
        </div>

        <div className="absolute mt-2 right-0 mr-0 flex-grow ml-auto">
          <img className="log  w-10 " src={props.elsrc2} alt={props.elalt2} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

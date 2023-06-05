import React, { useState } from "react";

const Navbar = (props) => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
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

  return (
    <div className="container flex items-center">
      <div className="menuBurger relative ml-5">
        <div className=" p-3 rounded-full hover:bg-gray-200 transition-colors duration-300">
          <img
            className=" "
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

      <div className="relative  text-2xl ml-28 flex items-center">
        <input
          type="text"
          className={`px-6 py-2 w-64 md:w-auto custom-width h-14 border border-gray-300 rounded-l-full focus:outline-none transition-all duration-300 ${
            isInputFocused ? "pl-12 w-80" : ""
          }`}
          placeholder="Rechercher"
          style={{ width: "720px" }}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button className="px-6 py-2 h-14 font-thin bg-gray-300 border border-gray-300 rounded-r-full w-22 ">
          <img
            width="30"
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
            width="32"
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
        <div className="relative ml-24   ">
          <div
            className="p-3 rounded-full hover:bg-gray-200 transition-colors "
            onMouseEnter={handleMouseEnterScope}
            onMouseLeave={handleMouseLeaveScope}
          >
            <img
              width="32"
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
        <div className="absolute ml-44 ">
          <div
            className="p-3 rounded-full hover:bg-gray-200 transition-colors "
            onMouseEnter={handleMouseEnterNotification}
            onMouseLeave={handleMouseLeaveNotification}
          >
            <img
              width="36"
              height="38"
              src="https://img.icons8.com/material-outlined/24/filled-appointment-reminders.png"
              alt="filled-appointment-reminders"
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

        <div className="absolute ml-64 ">
          <img
            className="log w-13 ml-0 mb-8 "
            src={props.elsrc2}
            alt={props.elalt2}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

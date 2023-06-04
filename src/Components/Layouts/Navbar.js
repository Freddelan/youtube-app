import React, { useState } from "react";

const Navbar = (props) => {
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <div className="container flex items-center">
      <div className="menuBurger relative">
        <div className="p-2 rounded-full hover:bg-blue-500 transition-colors duration-300">
          <img
            className="ml-6 mb-2"
            width="30"
            height="30"
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

      <div className="relative text-2xl ml-36 flex items-center">
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
        <button className="px-6 py-2 h-14 font-thin bg-gray-300 border border-gray-300 rounded-r-full w-24 ">
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
        <div className="micro ml-6">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/material-rounded/24/microphone.png"
            alt="microphone"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

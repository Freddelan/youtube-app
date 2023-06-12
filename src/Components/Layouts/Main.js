import React, { useState } from "react";
import Navbar from "./Navbar";
import grandeimage from "../../Assets/img/grandevideo.png";
import sousvideo from "../../Assets/img/souslavideo.png";
import petitesimages from "../../Assets/img/img1.png";
import log from "../../Assets/img/log.png";
import logoyt from "../../Assets/img/logoYt.png";
import Sidebar from "./Sidebar";

const Main = (props) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);
  return (
    <div className=" ">
      <div>
        <div>
          <Navbar
            toggleSidebar={toggleSidebar}
            elsrc={logoyt}
            elalt="logo youtube"
            elsrc2={log}
            elalt2="icone log"
          />
          <Sidebar
            elsrc={logoyt}
            elalt="logo youtube"
            toggleSidebar={toggleSidebar}
          />
        </div>
      </div>
      <div className="flex">
        <div className="sideleft ">
          <img
            className="grandeimage ml-20  w-[800px] h-auto reset-image-styles"
            src={grandeimage}
            alt={props.elalt5}
          />
          <p className="ml-20 text-lg font-semibold">
            Ils ont acheté et aménagé un bus pour 34 000 euros{" "}
            <span className="text-blue-600">@RoadcatsFamily</span>
          </p>

          <img
            className="souslavideo ml-20 md:w-auto"
            src={sousvideo}
            alt={props.elalt4}
          />
        </div>

        <div className="sideright flex flex-col items-end">
          <h1 className="title p-4 font-semibold text-lg mr-40 mt-6 bg-auto bg-white border rounded-full  hover:bg-gray-200 transition-colors ">
            Afficher la rediffusion du chat
          </h1>{" "}
          <br />
          <br />
          <ul className="flex text-xl ">
            <li className="flex-center ">Tout</li>
            <li>Source:18h39</li>
            <li>Camping-car</li>
          </ul>
          <div>
            <img
              className="petitesimages mr-20 md:w-auto custom-width"
              src={petitesimages}
              alt={props.elalt6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

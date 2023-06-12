import React, { useState } from "react";
import Navbar from "./Navbar";
import log from "../../Assets/img/log.png";
import logoyt from "../../Assets/img/logoYt.png";
import Sidebar from "./Sidebar";
import imgexem from "../../Assets/img/imgexem.png";
import manuchao from "../../Assets/img/manuchao.png";
import redhot from "../../Assets/img/redhot.png";
import thedoors from "../../Assets/img/thedoors.png";
import alternative from "../../Assets/img/alternative.png";
import u2 from "../../Assets/img/u2.png";
import saez from "../../Assets/img/saez.png";
import placebo from "../../Assets/img/placebo.png";
import depechemode from "../../Assets/img/depechemode.png";
import pinkfloyd from "../../Assets/img/pinkfloyd.png";
import radiohead from "../../Assets/img/radiohead.png";
import deep from "../../Assets/img/deep.png";
import nirvana from "../../Assets/img/nirvana.png";
import jami from "../../Assets/img/jami.png";
import scorpion from "../../Assets/img/scorpion.png";
import greatest from "../../Assets/img/greatest.png";
import "../../Assets/styles/imgexem.css";
import { Link } from "react-router-dom";

const NewPage = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);

  const images = [
    {
      id: 1,
      src: imgexem,
      alt: "Image 1",
    },
    {
      id: 2,
      src: manuchao,
      alt: "Image 2",
    },
    {
      id: 3,
      src: redhot,
      alt: "Image 3",
    },
    {
      id: 4,
      src: thedoors,
      alt: "Image 4",
    },
    {
      id: 6,
      src: alternative,
      alt: "Image 6",
    },
    {
      id: 5,
      src: u2,
      alt: "Image 5",
    },
    {
      id: 7,
      src: saez,
      alt: "Image 7",
    },
    {
      id: 8,
      src: placebo,
      alt: "Image 8",
    },
    {
      id: 9,
      src: depechemode,
      alt: "Image 9",
    },
    {
      id: 10,
      src: pinkfloyd,
      alt: "Image 10",
    },
    {
      id: 11,
      src: radiohead,
      alt: "Image 11",
    },
    {
      id: 12,
      src: deep,
      alt: "Image 12",
    },
    {
      id: 13,
      src: nirvana,
      alt: "Image 13",
    },
    {
      id: 14,
      src: jami,
      alt: "Image 14",
    },
    {
      id: 15,
      src: scorpion,
      alt: "Image 15",
    },
    {
      id: 16,
      src: greatest,
      alt: "Image 1",
    },
  ];
  function chunk(array, size) {
    const chunkedArray = [];
    let index = 0;
    while (index < array.length) {
      chunkedArray.push(array.slice(index, index + size));
      index += size;
    }
    return chunkedArray;
  }
  const chunkedImages = chunk(images, 4);
  return (
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
      <div className="grid grid-cols-4 gap-4 ml-40">
        {chunkedImages.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 gap-4">
            {row.map((image) => (
              <div key={image.id} className="col-span-1">
                <Link to="/nouvelle-page">
                  <div className="image-container">
                    <img
                      className="imgexem imagelarge"
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPage;

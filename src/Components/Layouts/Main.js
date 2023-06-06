import React from "react";

const Main = (props) => {
  return (
    <div className="flex justify-between">
      <div className="sideleft mt-6">
        <img
          className="bigimage w-40 ml-36  md:w-auto custom-width"
          src={props.elsrc3}
          alt={props.elalt3}
        />

        <div>
          <p className="ml-36 text-2xl font-semibold">
            Ils ont acheté et aménagé un bus pour 34 000 euros{" "}
            <span className="text-blue-600">@RoadcatsFamily</span>
          </p>
        </div>
      </div>
      <div className="sideright ">
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
            src={props.elsrc4}
            alt={props.elalt4}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;

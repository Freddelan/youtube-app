import React, { useState } from "react";
import Navbar from "./Navbar";
import log from "../../Assets/img/log.png";
import logoyt from "../../Assets/img/logoYt.png";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Commejeveux = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);
  return (
    <div>
      {/* <Navbar
        toggleSidebar={toggleSidebar}
        elsrc={logoyt}
        elalt="logo youtube"
        elsrc2={log}
        elalt2="icone log"
      /> */}
      <Sidebar
        elsrc={logoyt}
        elalt="logo youtube"
        toggleSidebar={toggleSidebar}
      />
      <Main />
    </div>
  );
};

export default Commejeveux;

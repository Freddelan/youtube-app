import Navbar from "./Components/Layouts/Navbar";
import logoyt from "./Assets/Img/logoYt.png";
import scope from "./Assets/Img/scope.png";
import log from "./Assets/Img/log.png";
import Sidebar from "./Components/Layouts/Sidebar";
import React, { useState } from "react";
function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);
  return (
    <div className="App">
      <div>
        <Navbar
          elsrc={logoyt}
          elalt="logo youtube"
          elsrc1={scope}
          elalt1="icone scope"
          elsrc2={log}
          elalt2="icone log"
        />
      </div>
      <div>
        <Sidebar
          elsrc={logoyt}
          elalt="logo youtube"
          toggleSidebar={toggleSidebar}
        ></Sidebar>
      </div>
    </div>
  );
}

export default App;

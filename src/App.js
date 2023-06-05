import Navbar from "./Components/Layouts/Navbar";
import logoyt from "./Assets/Img/logoYt.png";
import scope from "./Assets/Img/scope.png";
import log from "./Assets/Img/log.png";
import React, { useState } from "react";
import Sidebar from "./Components/Layouts/Sidebar";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);

  return (
    <div className="App">
      <Navbar
        toggleSidebar={toggleSidebar}
        elsrc={logoyt}
        elalt="logo youtube"
        elsrc1={scope}
        elalt1="icone scope"
        elsrc2={log}
        elalt2="icone log"
      />
      {isSidebarVisible && (
        <Sidebar
          toggleSidebar={toggleSidebar}
          elsrc={logoyt}
          elalt="logo youtube"
        />
      )}
    </div>
  );
}

export default App;

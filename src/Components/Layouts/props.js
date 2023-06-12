// import React, { useState } from "react";
// import Navbar from "./Components/Layouts/Navbar";
// import logoyt from "./Assets/img/logoYt.png";
// import grandeimage from "./Assets/img/grandevideo.png";
// import log from "./Assets/img/log.png";
// import Sidebar from "./Components/Layouts/Sidebar";
// import Main from "./Components/Layouts/Main";
// import petitesimages from "./Assets/img/img1.png";

// function Props() {
//   const [isSidebarVisible, setSidebarVisible] = useState(false);
//   const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);

//   return (
//     <div className="App">
//       <div>
//         <Navbar
//           toggleSidebar={toggleSidebar}
//           elsrc={logoyt}
//           elalt="logo youtube"
//           elsrc2={log}
//           elalt2="icone log"
//         />
//       </div>
//       {isSidebarVisible && (
//         <div>
//           <Sidebar
//             toggleSidebar={toggleSidebar}
//             elsrc={logoyt}
//             elalt="logo youtube"
//           />
//         </div>
//       )}
//       <div>
//         <Main
//           elsrc3={grandeimage}
//           elalt3="image principale youtube"
//           elsrc4={petitesimages}
//           elalt4="petite vidéo coté droit"
//         ></Main>
//       </div>
//     </div>
//   );
// }

// export default Props;

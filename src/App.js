import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/Layouts/Main";
import NewPage from "./Components/Layouts/NewPage";
import Commejeveux from "./Components/Layouts/Commejeveux";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Commejeveux} />
          <Route path="/NewPage" Component={NewPage} />
          <Route path="/Main" Component={Main} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

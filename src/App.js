import Navbar from "./Components/Layouts/Navbar";
import logoyt from "./Assets/Img/logoYt.png";
import scope from "./Assets/Img/scope.png";
import log from "./Assets/Img/log.png";

function App() {
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
    </div>
  );
}

export default App;

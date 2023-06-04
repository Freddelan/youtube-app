import Navbar from "./Components/Layouts/Navbar";
import logoyt from "./Assets/Img/logoYt.png";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar elsrc={logoyt} elalt="logo youtube" />
      </div>
      <div></div>
    </div>
  );
}

export default App;

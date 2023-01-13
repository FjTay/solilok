import Vehicule from "../components/Home/Vehicule";
import Borne from "../components/Home/Borne";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div>
        <Vehicule />
        <Borne />
      </div>
    </div>
  );
}

export default Home;

import { Link } from "react-router-dom";
import Vehicule from "../components/Home/Vehicule";
import Borne from "../components/Home/Borne";
import Navbar from "../components/Layout/Navbar";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div>
        <Vehicule />
        <Borne />
      </div>
    </div>
  );
}

export default Home;

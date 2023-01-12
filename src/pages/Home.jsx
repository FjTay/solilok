import { Link } from "react-router-dom";
import Vehicule from "../components/Home/Vehicule";
import Borne from "../components/Home/Borne";
import Navbar from "../components/Layout/Navbar";
import Account from "../Account";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <button type="button">
        <Link to="/account">connexion</Link>
      </button>
      <Vehicule />
      <Borne />
    </div>
  );
}

export default Home;

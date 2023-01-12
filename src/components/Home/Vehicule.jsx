import { Link } from "react-router-dom";

import "./Vehicule.css";

function Vehicule() {
  return (
    <div className="box">
      <h1>Vehicule</h1>
      <div className="container">
        <Link to="reserver/">
          <button type="button">
            <Link to="/reserver">reserver un vehicule</Link>
          </button>
        </Link>
        <button type="button">
          <Link to="/Makeoffer">louer mon vehicule</Link>
        </button>
      </div>
    </div>
  );
}
export default Vehicule;

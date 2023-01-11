import { Link } from "react-router-dom";

function Vehicule() {
  return (
    <div className="car-sector">
      <h1>Vehicule</h1>
      <div className="container">
        <button type="button">
          <Link to="/RentNeed">reserver un vehicule</Link>
        </button>
        <button type="button">
          <Link to="/RentCreator">louer mon vehicule</Link>
        </button>
      </div>
    </div>
  );
}
export default Vehicule;

import { Link } from "react-router-dom";

function Vehicule() {
  return (
    <div className="box">
      <h1>Vehicle</h1>
      <div className="container">
        <Link to="reserver/">
          <button type="button" className="btn-01">
            Booking
          </button>
        </Link>
        <Link to="/makeOffer">
          <button type="button" className="btn-01">
            Propose car
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Vehicule;

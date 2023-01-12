import React from "react";
import { Link } from "react-router-dom";

function Borne() {
  return (
    <div className="box">
      <h1>Charge Station</h1>
      <div className="container">
        <Link to="/MapView">
          <button type="button" className="btn-01">
            Booking
          </button>
        </Link>
        <button type="button" className="btn-01">
          Proposal
        </button>
      </div>
    </div>
  );
}

export default Borne;

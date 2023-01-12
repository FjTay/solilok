import React from "react";
import { Link } from "react-router-dom";

function Borne() {
  return (
    <div className="borne-sector">
      <h1>Trouver une borne</h1>
      <div className="container">
        <button type="button">
          <Link to="/SearchBorn">Je cherche une borne</Link>
        </button>
        <button type="button">Je loue une borne</button>
      </div>
    </div>
  );
}

export default Borne;

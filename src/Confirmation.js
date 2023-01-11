/* eslint-disable no-nested-ternary */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();
  const { action } = useParams();

  return (
    <div className="page connexion-page">
      <h2>
        {action === "logOut"
          ? "Later see you, miss you we will"
          : action === "updated"
          ? "Updated your account is"
          : "Deleted your account is"}{" "}
      </h2>
      <button type="button" onClick={() => navigate("/account/")}>
        Back to account
      </button>
    </div>
  );
}

export default Confirmation;

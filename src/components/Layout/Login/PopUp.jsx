import Account from "../../../Account";
import "./PopUp.css";

function PopUp({ closePopUp }) {
  return (
    <div className="popup-container">
      <div className="popup-body">
        <div className="title">
          <Account />
        </div>
      </div>
    </div>
  );
}

export default PopUp;

import Account from "../../../Account";
import "./PopUp.css";

function PopUp({ closePopUp }) {
  return (
    <div className="popup-container">
      <div className="popup-body">
        <div className="title">
          <Account />
          <button type="button" className="close__btn" onClick={closePopUp}>
            X
          </button>
        </div>
        <Account closePopUp={closePopUp} />
      </div>
    </div>
  );
}

export default PopUp;

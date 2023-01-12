import ConnexionContext from "./contexts/connexionContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const Offer = ({offer, deleteOffer}) => {
    const { userInfo, _ } = useContext(ConnexionContext);
    const navigate = useNavigate()

    return (
        <div onClick={() => console.log(offer)} className="offer">
            <h3>{offer.car.brand} - {offer.car.model}</h3>
            <div>available </div>
            <div>{offer.start} - {offer.end}</div>
            {offer.user_id === userInfo.auth.currentUser.uid && <div onClick={() => deleteOffer(offer.offer_id)}>delete my offer</div>}
        </div>
    )
}

export default Offer
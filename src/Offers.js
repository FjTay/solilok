import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, deleteDoc, arrayUnion, setDoc, addDoc, getDocs, collection, query, where, updateDoc } from "firebase/firestore";
import ConnexionContext from "./contexts/connexionContext";
import { db } from "./firebase-config";

const Offers = () => {
    const { userInfo, _ } = useContext(ConnexionContext);
    const [offers, setoffers] = useState([]);
  
    const getOffers = async () => {
        const querySnapshot = await getDocs(collection(db, "offers"));
        const updatedOffers = []
        querySnapshot.forEach((doc) => {
            updatedOffers.push({...doc.data(), offer_id: doc.id})
        })
        setoffers(updatedOffers)
    };

    const deleteOffer = async (offerID) => {
        console.log(offerID)
        await deleteDoc(doc(db, "offers", offerID)).then(res => setoffers(offers.filter(offer => offer.offer_id !== offerID)))
    }
  
    useEffect(() => {
        getOffers();
    }, []);
  
    return (
        <>
      <div className="page page-comments">
        {offers.length && 
            <>
                <div>Offers</div>
                {offers.map(offer =>
                    <div>
                        <div>{offer.car.model}</div>
                        {offer.user_id === userInfo.auth.currentUser.uid && <div onClick={() => deleteOffer(offer.offer_id)}>delete offer</div>}
                    </div>
                )}
            </>
        }
      </div>
      </>
    );
}

export default Offers
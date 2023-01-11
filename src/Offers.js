import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, arrayUnion, setDoc, addDoc, getDocs, collection, query, where, updateDoc } from "firebase/firestore";
import ConnexionContext from "./contexts/connexionContext";
import { db } from "./firebase-config";

const Offers = () => {
    const { userInfo, _ } = useContext(ConnexionContext);
    const [offers, setoffers] = useState([]);
  
    const getOffers = async () => {
        const querySnapshot = await getDocs(collection(db, "offers"));
        const updatedOffers = []
        querySnapshot.forEach((doc) => {
            updatedOffers.push(doc.data())
        })
        setoffers(updatedOffers)
    };
  
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
                    <div>{offer.car.model}</div>
                )}
            </>
        }
      </div>
      </>
    );
}

export default Offers
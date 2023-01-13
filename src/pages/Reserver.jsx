
import "./Reserver.css";
import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, deleteDoc, arrayRemove, arrayUnion, setDoc, addDoc, getDocs, collection, query, where, updateDoc } from "firebase/firestore";
import ConnexionContext from "../contexts/connexionContext";
import { db } from "../firebase-config";
import Offer from "../Offer";

function Reserver() {
    const { userInfo, setUserInfo } = useContext(ConnexionContext);
    const [offers, setoffers] = useState([]);
    const [date, setDate] = useState({start: false, end: false , today : false})
  
    const getOffers = async () => {
        const querySnapshot = await getDocs(collection(db, "offers"));
        const updatedOffers = []
        querySnapshot.forEach((doc) => {
            updatedOffers.push({...doc.data(), offer_id: doc.id})
        })
        setoffers(updatedOffers)
    };

    const deleteOffer = async (offerID, dynID) => {
        console.log(offerID)
        console.log(dynID)
        const userRef = doc(db, "users", userInfo.auth.currentUser.uid);
        await deleteDoc(doc(db, "offers", offerID)).then(res => {
            setoffers(offers.filter(offer => offer.offer_ID !== dynID))
            setUserInfo({...userInfo, currentOffers : userInfo.currentOffers.filter(offer => offer.offer_ID !== dynID)
})
        })
        await updateDoc(userRef, {
            offers: arrayRemove(offerID)
        });
    }
  
    useEffect(() => {
        getOffers();
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let start = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
        let end = `${year}-${month < 10 ? `0${month}` : month}-${day + 1 < 10 ? `0${day + 1}` : day + 1}`;
        setDate({start : start, end : end, today : start})
    }, []);

    const checkDates = () => {
        return Date.parse(date.start) <= Date.parse(date.end)
    }


  return (
    <div class="blanco">
    <img src="http://localhost:5000/uploads/8458b14c-433d-4033-93c7-ca0f0d39b23a.png"></img>
        <h1>Search for a rental car</h1>
        <form action="">
            <div class="fechas">
                <div class="fecha">
                    <label for="start">Start date:</label>
                    <input type="date" id="start" name="trip-start"
                        onChange={(e) => 
                            setDate({...date, start: e.target.value}
                        )}
                        value={date.start} 
                        max="2025-01-01" 
                        min={date.today}
                    ></input>
                </div>
                <div class="fecha">
                    <label for="end">End date:</label>
                    <input type="date" id="end" name="trip-end"
                        min={date.start}
                        max="2025-01-01"
                        value={date.end}
                        onChange={(e) => {
                            setDate({...date, end: e.target.value})
                        }}
                    ></input>
                </div>
            </div>
        <div class="conductor">
            <input type="checkbox" />
            <label>The driver's age between 30 and 65?  <i class="fa-solid fa-circle-info"></i></label>
        </div>
    </form>
    {offers.length ? 
            <>
                {checkDates() ? 
                <>
                <label>Offers</label>
                {offers.filter(offer => (Date.parse(date.start) >= Date.parse(offer.start)) && (Date.parse(date.end) <= Date.parse(offer.end))
                    ).map(offer =>
                        <Offer key={offer.id} offer={offer} deleteOffer={deleteOffer}></Offer>
                    )
                }
                </> : <div>Please set start date before end date </div>
                }
            </> : ""
    }
    </div>
  )
}

export default Reserver;
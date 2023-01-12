import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, deleteDoc, arrayRemove, arrayUnion, setDoc, addDoc, getDocs, collection, query, where, updateDoc } from "firebase/firestore";
import ConnexionContext from "./contexts/connexionContext";
import { db } from "./firebase-config";

const Offers = () => {
    const { userInfo, _ } = useContext(ConnexionContext);
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

    const deleteOffer = async (offerID) => {
        const userRef = doc(db, "users", userInfo.auth.currentUser.uid);
        await deleteDoc(doc(db, "offers", offerID)).then(res => setoffers(offers.filter(offer => offer.offer_id !== offerID)))
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
        return Date.parse(date.start) < Date.parse(date.end)
    }

    // useEffect(() => {
    //     console.log(offers.filter(offer => Date.parse(date.start) <= Date.parse(offer.start) && Date.parse(date.end) >= Date.parse(offer.end)))
    // }, [date])
  
    return (
        <>
      <div className="page page-comments">
        {offers.length && 
            <>
                {checkDates() ? 
                <>
                <div>Offers</div>
                {offers.filter(offer => Date.parse(date.start) <= Date.parse(offer.start) && Date.parse(date.end) >= Date.parse(offer.end)
                ).map(offer =>
                    <div onClick={() => console.log(offer)}>
                        <div>{offer.car.model}</div>
                        {offer.user_id === userInfo.auth.currentUser.uid && <div onClick={() => deleteOffer(offer.offer_id)}>delete offer</div>}
                    </div>
                )}
                </> : <div>Please set start date before end date :) </div>
                }
            </>
        }
        <label for="start">Start date:</label>
            <input type="date" id="start" name="trip-start"
                onChange={(e) => setDate({...date, start: e.target.value})}
                value={date.start} max="2025-01-01" min={date.today}>
            </input>
            <label for="end">End date:</label>
            <input type="date" id="end" name="trip-end"
                min={date.start}
                max="2025-01-01"
                value={date.end}
                onChange={(e) => {
                    setDate({...date, end: e.target.value})
                }}
                >
            </input>
        </div>
      </>
    );
}

export default Offers
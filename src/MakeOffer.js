import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {
  doc,
  getDoc,
  arrayUnion,
  setDoc,
  addDoc,
  getDocs,
  collection,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import ConnexionContext from "./contexts/connexionContext";
import { db } from "./firebase-config";
import { v4 as uuidv4 } from 'uuid';

const MakeOffer = () => {
    const { userInfo, setUserInfo } = useContext(ConnexionContext);
    const [cars, setCars] = useState([]);
    const [currentCar, setCurrentCar ]= useState([])
    const [date, setDate] = useState({start: false, end: false, today: false})
    console.log(userInfo)
  
    const getCars = async () => {

        const carsQuery = collection(db, "cars")
        const cars = query(carsQuery, where("user_id", "==", userInfo.auth.currentUser.uid))
        const querySnapshot = await getDocs(cars);
        const filteredCars = []
        querySnapshot.forEach(doc => {
            filteredCars.push(doc.data())})
        setCars(filteredCars)
    };

    useEffect(() => {
        if (userInfo.auth.currentUser) {getCars()}
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let start = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
        let end = `${year}-${month < 10 ? `0${month}` : month}-${day + 1 < 10 ? `0${day + 1}` : day + 1}`;
        setDate({start : start, end : end, today : start})
    }, []);

    const pushOffer = async () => {
        const userDocRef = doc(db, "users", userInfo.auth.currentUser.uid);
        const newOffer = {
            car: currentCar[0],
            user_id: userInfo.auth.currentUser.uid,
            start : date.start,
            end: date.end,
            city: userInfo.info.city,
            country : userInfo.info.country,
            postcode : userInfo.info.postcode,
            offer_ID : uuidv4()
        }
        await addDoc(collection(db, "offers"), newOffer).then(async addedDoc => {
            await updateDoc(
                userDocRef,
                {
                  offers: arrayUnion(addedDoc.id),
                },
                { merge: true }
            )
            .then(res => setUserInfo({...userInfo, currentOffers : [...userInfo.currentOffers, newOffer]}))
        })
    };

    const checkAvailability = () => {
        if(!userInfo.currentOffers?.length) {
            console.log(userInfo.currentOffers)
            return true
        }
        if(new Date(date.start).getTime() <= new Date(date.end).getTime()) {
            if (!userInfo.currentOffers.filter(offer => offer.car.carID === currentCar[0].carID).length) {
                return true
            }
            else if(currentCar?.length && userInfo.currentOffers?.length) {
                const before = (
                    new Date(date.start).getTime() && 
                    new Date(date.end).getTime()) < 
                    new Date(userInfo.currentOffers
                        .find(offer => offer.car.carID === currentCar[0].carID)?.start).getTime()
                const after = (
                    new Date(date.start).getTime() && 
                    new Date(date.end).getTime()) > 
                    new Date(userInfo.currentOffers
                        .find(offer => offer.car.carID === currentCar[0].carID)?.end).getTime()
                        console.log(userInfo.currentOffers
                            .find(offer => offer.car.carID === currentCar[0].carID)?.end)
                return before ? before : after
            } else return false
        } else return false
    }
      
    return (
        <>
        {userInfo.auth.currentUser ? 
        <div className="blanco">
            <div className="makeOffer">
                {cars?.length ?
                    <>
                    <div>My Cars</div>
                        {cars.map(car => 
                        <div onClick={() => {
                            setCurrentCar(cars.filter(subcar => subcar.carID === car.carID))
                        }}>{car.model} - {car.brand}</div>
                    )}
                    </> : ""
                }
            </div>
            <div>
                {currentCar.length ? 
                <>
                <div>You have chosen : </div><div>{currentCar[0].model} - {currentCar[0].brand}</div> </>:""}
            </div>
            <label for="start">Start date:</label>
            <input type="date" id="start" name="trip-start"
                onChange={(e) => setDate({...date, start: e.target.value})}
                value={date.start} 
                max="2025-01-01" 
                min={date.today}
            >
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
            {currentCar.length ? checkAvailability() ? "Available for this date!" : "Not available for these dates" : ""}
            <button disabled={!currentCar.length ? true : !checkAvailability()? true : false} onClick={() => pushOffer()}>POST MY OFFER</button>
            </div>
       : 
       <>
      <div>YOU NEED TO SIGN IN TO MAKE AN OFFER</div>
      <Link to="/account">Sign in</Link>
      </>
    }
    </>
    );
}

export default MakeOffer
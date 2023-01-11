import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, arrayUnion, setDoc, addDoc, getDocs, collection, query, where, updateDoc } from "firebase/firestore";
import ConnexionContext from "./contexts/connexionContext";
import { db } from "./firebase-config";

const MakeOffer = () => {
    const { userInfo, _ } = useContext(ConnexionContext);
    const [cars, setCars] = useState([]);
    const [currentCar, setCurrentCar ]= useState([])
  
    const getCars = async () => {
        const carsQuery = collection(db, "cars")
        const cars = query(carsQuery, where("user_id", "==", userInfo.auth.currentUser.uid))
        const querySnapshot = await getDocs(cars);
        const filteredCars = []
        querySnapshot.forEach(doc => filteredCars.push(doc.data()))
        setCars(filteredCars)
    };
  
    useEffect(() => {
      getCars();
    }, []);

    const pushOffer = async () => {
        const userDocRef = doc(db, "users", userInfo.auth.currentUser.uid);
        const newOffer = {
            car: currentCar[0],
            user_id: userInfo.auth.currentUser.uid,
            start : "2023/01/20",
            end: "2023/01/30"
        }
        await addDoc(collection(db, "offers"), newOffer).then(async addedDoc => {
            await updateDoc(
                userDocRef,
                {
                  offers: arrayUnion(addedDoc.id),
                },
                { merge: true }
            );
        })
    };
  
    return (
        <>
      <div className="page page-comments">
        {cars.length && 
            <>
            <div>My Cars</div>
                {cars.map(car => 
                <div onClick={() => {
                    setCurrentCar(cars.filter(subcar => subcar.carID === car.carID))
                }}>{car.model} - {car.brand}</div>
            )}
            </>
        }
      </div>
      <div>
        {currentCar.length && `You have chosen : ${currentCar[0].model} - ${currentCar[0].brand}`}
      </div>
      <button onClick={() => pushOffer()}>POST MY OFFER</button>
      </>
    );
}

export default MakeOffer
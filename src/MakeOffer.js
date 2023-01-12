import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, arrayUnion, setDoc, addDoc, getDocs, collection, query, where, updateDoc } from "firebase/firestore";
import ConnexionContext from "./contexts/connexionContext";
import { db } from "./firebase-config";

const MakeOffer = () => {
    const { userInfo, _ } = useContext(ConnexionContext);
    const [cars, setCars] = useState([]);
    const [currentCar, setCurrentCar ]= useState([])
    const [date, setDate] = useState({start: false, end: false, today: false})
    console.log(userInfo)
  
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
                {cars?.length && 
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
            <label for="start">Start date:</label>
            <input type="date" id="start" name="trip-start"
                onChange={(e) => setDate({...date, start: e.target.value})}
                value={date.start} max="12-1-2025" min={date.today}>
            </input>
            <label for="end">End date:</label>
            <input type="date" id="end" name="trip-end"
                min={date.start}
                max="12-1-2025"
                value={date.end}
                onChange={(e) => {
                    setDate({...date, end: e.target.value})
                    console.log(new Date(date.start).getTime() < new Date(date.end).getTime())
                }}
                >
            </input>
            <button onClick={() => pushOffer()}>POST MY OFFER</button>
      </>
    );
}

export default MakeOffer
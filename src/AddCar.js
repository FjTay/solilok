import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, arrayUnion, setDoc, addDoc, getDocs, collection, query, where, updateDoc } from "firebase/firestore";
import ConnexionContext from "./contexts/connexionContext";
import { db } from "./firebase-config";

const AddCar = () => {
    const { userInfo, _ } = useContext(ConnexionContext);
    const [offers, setoffers] = useState([]);
    const [newCar, setNewCar] = useState({})
  
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

    const brands = ["Mercedes", "BMW", "Audi", "Peugeot", "Renault", "Citroen"]
  
    return (
        <>
      <div className="page page-comments">
        <select>
            {brands.map(brand=> 
                <option></option>
            )}
        </select>
      </div>
      </>
    );
}

export default AddCar
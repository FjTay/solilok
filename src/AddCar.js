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
    const colors = ["green", "red", "yellow", "pink", "magenta"]
    const doors = Array.from(Array(8).keys())
    const oilTypes = ["diesel", "oil", "hybrid"]
    const models = {
        Mercedes :  {
            models : ["Class A"]
        },
        BMW : {
            models : ["Serie 7"]
        },
        Audi : {
            models : ["A4"]
        },
        Peugeot : {
            models : ["207"]
        },
        Renault : {
            models : ["R5"]
        },
        Citroen : {
            models : ["C6"]
        },
    }
  
    return (
        <>
      <div className="page page-comments">
        <select onChange={(e) => setNewCar({...newCar, brand : e.target.value})}>
            <option value={false}>--</option>
            {brands.map(brand => 
                <option value={brand}>{brand}</option>
            )}
        </select>
        {newCar.brand && <select onChange={(e) => setNewCar({...newCar, model : e.target.value})}>
            <option value={false}>--</option>
            {models[newCar.brand].models.map(model=> 
                <option>{model}</option>
            )}
        </select>}
        <select onChange={(e) => setNewCar({...newCar, color : e.target.value})}>
            <option value={false}>--</option>
            {colors.map(color => 
                <option value={color}>{color}</option>
            )}
        </select>
        <select onChange={(e) => setNewCar({...newCar, doors : e.target.value})}>
            <option value={false}>--</option>
            {doors.map(door => 
                <option value={door}>{door}</option>
            )}
        </select>
        <select onChange={(e) => setNewCar({...newCar, oilType : e.target.value})}>
            <option value={false}>--</option>
            {oilTypes.map(oilType => 
                <option value={oilType}>{oilType}</option>
            )}
        </select>
      </div>
      </>
    );
}

export default AddCar
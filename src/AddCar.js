import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, arrayUnion, setDoc, addDoc, getDocs, collection, query, where, updateDoc } from "firebase/firestore";
import ConnexionContext from "./contexts/connexionContext";
import { db } from "./firebase-config";
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

const AddCar = () => {
    const { userInfo, _ } = useContext(ConnexionContext);
    const [offers, setoffers] = useState([]);
    const [newCar, setNewCar] = useState({
        oilType : 0,
        brand :undefined,
        model: undefined,
        color: undefined,
        doors : undefined,
        gearBox : undefined,
        isElectric : undefined,
        picID : uuidv4(),
        carID : uuidv4(),
        user_id: userInfo.auth.currentUser.uid
    })

    const inputRef = useRef()
  
    const hSubmit = async (evt) => {
        evt.preventDefault()
        const formData = new FormData();
        // const picID = uuidv4();
        // setNewCar({...newCar, picID : picID})
        formData.append("avatar", inputRef.current.files[0]);
        await addDoc(collection(db, "cars"), newCar);
        await axios.post(`http://localhost:5000/api/avatar/${newCar.picID}`, formData).then(res => {
        const options = document.querySelectorAll("select")
        options.forEach(option => option.selectedIndex = 0)
        setNewCar({oilType : 0,
        brand: undefined,
        model: undefined,
        color: undefined,
        doors: undefined,
        gearBox: undefined,
        isElectric : undefined,
        picID: uuidv4(),
        carID : uuidv4(),
        user_id: userInfo.auth.currentUser.uid
        })})
    }
  
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

    const brands = ["Mercedes", "BMW", "Audi", "Peugeot", "Renault", "Citroen", "Tesla"]
    const colors = ["green", "red", "yellow", "pink", "magenta"]
    const doors = Array.from(Array(8).keys())
    const oilTypes = ["diesel", "oil", "hybrid"]
    const isElectric = [0, 1]
    const gearBox = ["manual", "automatic"]
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
        Tesla : {
            models : ["Tesla"]
        },
    }
  
    return (
        <>
      <div className="blanco">
      <h3>Add a car</h3>
      {userInfo.auth.currentUser ? 
      <>
      <br></br>
      <label>Brand</label>
        <select onChange={(e) => setNewCar({...newCar, brand : e.target.value})}>
            <option value={false}>--</option>
            {brands.map(brand => 
                <option value={brand}>{brand}</option>
            )}
        </select>
        {newCar.brand && <>
        <label>Model</label>
        <select onChange={(e) => setNewCar({...newCar, model : e.target.value})}>
            <option value={false}>--</option>
            {models[newCar.brand].models.map(model=> 
                <option>{model}</option>
            )}
        </select></>}
        <label>Color</label>
        <select onChange={(e) => setNewCar({...newCar, color : e.target.value})}>
            <option value={false}>--</option>
            {colors.map(color => 
                <option value={color}>{color}</option>
            )}
        </select>
        <label>Doors</label>
        <select onChange={(e) => setNewCar({...newCar, doors : e.target.value})}>
            <option value={false}>--</option>
            {doors.map(door => 
                <option value={door}>{door}</option>
            )}
        </select>
        <label>Gearbox</label>
        <select onChange={(e) => setNewCar({...newCar, gearBox : e.target.value})}>
            <option value={false}>--</option>
            {gearBox.map(gb => 
                <option value={gb}>{gb}</option>
            )}
        </select>
        <label>Electric</label>
        <select onChange={(e) => setNewCar({...newCar, isElectric : parseInt(e.target.value, 10)})}>
            <option value={undefined}>--</option>
            {isElectric.map(elect => 
                <option value={elect}>{elect  ? "Yes" : "No"}</option>
            )}
        </select>
        {newCar.isElectric === 0 &&
        <>
        <label>Fuel type</label>
        <select onChange={(e) => setNewCar({...newCar, oilType : e.target.value})}>
            <option value={-1}>--</option>
            {oilTypes.map(oilType => 
                <option value={oilType}>{oilType}</option>
            )}
        </select>
        </>}
        <br></br>
        <form encType="multipart/form-data">
            <input type="file" name="monfichier" ref={inputRef} />
        </form>
        <br></br>
        <button 
            disabled={!Object.values(newCar).every(val => val || val === 0)}
            onClick={(e) => {
                hSubmit(e)
                console.log(newCar)
            }}
        >Save my car</button></> : <><div>YOU NEED TO SIGN IN TO MAKE AN OFFER</div><Link to="/account">Sign in</Link></>}
      </div>
      </>
    );
}

export default AddCar;
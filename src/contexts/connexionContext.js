import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { doc, getDoc, arrayUnion, setDoc, addDoc, getDocs, collection, query, where, updateDoc } from "firebase/firestore";

const ConnexionContext = createContext();

export function ConnexionContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({auth: auth,
    info: {}});

    useEffect(() => {
      const getOffers = async () => {
        if(!userInfo.currentOffers) {
          console.log(userInfo.auth.currentUser.uid)
          const q = query(collection(db, "offers"), where("user_id", "==", userInfo.auth.currentUser.uid));
          const querySnapshot = await getDocs(q);
          const filteredOffers = []
          querySnapshot.forEach((doc) => {
            filteredOffers.push(doc.data())
          });
          console.log(filteredOffers)
          setUserInfo({...userInfo, currentOffers : filteredOffers})
        }
      }
      getOffers()
      console.log("hello")
    }, [userInfo])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ConnexionContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </ConnexionContext.Provider>
  );
}

export default ConnexionContext;

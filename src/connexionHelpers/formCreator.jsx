import { doc, updateDoc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const FormCreator = {
  updateUser: async (id, fields) => {
    const userDoc = doc(db, "users", id);
    await updateDoc(
      userDoc,
      fields.reduce((acc, val) => {
        return { ...acc, [val.name]: val.value };
      }, {})
    );
  },
  deleteUserData: async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  },
  deleteUser: async (auth) => {
    console.warn(auth);
  },
  createUser: async (id, data) => {
    await setDoc(doc(db, "users", id), {
      gender: data.gender,
      mail: data.mail.value,
      birth: data.birth.value,
      street: data.street.value,
      city: data.street.value,
      country: data.country.value,
      postcode : data.postcode.value,
      name: data.name.value,
      surname: data.surname.value,
      phone: data.phone.value,
      offers: [],
    });
  },
  createCompany: async (id, data) => {
    await setDoc(doc(db, "users", id), {
    street: data.street.value,
    city: data.city.value,
    country: data.country.value,
    postcode: data.postcode.value,
    mail: data.mail.value,
    password: data.password.value,
    companyName: data.companyName.value,
    phone: data.phone.value,
    siret: data.siret.value,
    offers: [],
    });
  },
};

export default FormCreator;

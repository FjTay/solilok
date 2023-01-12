import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ConnexionContext from "./contexts/connexionContext";
import FormSubmitter from "./connexionHelpers/formSubmitter";
import { auth } from "./firebase-config";
import FormFields from "./connexionHelpers/formFields";
import FormTextInputList from "./FormTextInputList";
import FormHelpers from "./connexionHelpers/formHelpers";
import Navbar from "./components/Layout/Navbar";

import "./Account.css";

function Account() {
  const navigate = useNavigate();
  const params = useParams();
  const { userInfo, setUserInfo } = useContext(ConnexionContext);
  const { gender, name, surname, phone, birth } = FormFields;
  const [signInData, setSignInData] = useState({
    gender,
    name,
    surname,
    phone,
    birth,
  });
  const [_, ...fieldsToCheck] = Object.values(signInData);

  const handleLogout = async () => {
    await FormSubmitter.logout(userInfo.auth, navigate);
    setUserInfo({ ...userInfo, info: {} });
  };

  const handleDeleteAccount = async () => {
    await FormSubmitter.deleteUser(auth, navigate);
    setUserInfo({ ...userInfo, info: {} });
  };

  useEffect(() => {
    auth.currentUser &&
      FormSubmitter.getUserData(
        userInfo.auth.currentUser.uid,
        userInfo,
        setUserInfo
      );
  }, [auth]);

  return (
    // rajout d'une classe

    <div className="page connexion-page">
      {userInfo.info?.city && auth.currentUser && !params["*"] ? (
        <>
          <h3>
            {`Hi ${
              userInfo.info?.siret
                ? userInfo.info.companyName
                : userInfo.info.surname
            }, welcome.`}{" "}
          </h3>
          <button type="button" onClick={() => handleLogout()}>
            Log out
          </button>
          <Link to="accountData/">
            <button type="button">Modify account data</button>
          </Link>
          <button type="button" onClick={() => handleDeleteAccount()}>
            Delete account
          </button>
          <Link to="addCar/">
            <button type="button">
              Want to rent a car ? Add one to your profile
            </button>
          </Link>
        </>
      ) : !userInfo.info.surname && auth.currentUser ? (
        <>
          <h4>LOADING FROM DATABASE</h4>
        </>
      ) : !params["*"] ? (
        <>
          <h3>Log in</h3>
          <Link to="connexion">
            <button type="button">Connexion</button>
          </Link>
          <h3>Not yet registered ?</h3>
          <Link to="signIn">
            <button type="button">Sign in</button>
          </Link>
        </>
      ) : (
        ""
      )}
      {params["*"] === "accountData/" && (
        <>
          <FormTextInputList
            fields={fieldsToCheck}
            data={signInData}
            setData={setSignInData}
            isEditMode
          />
          <button
            disabled={
              !FormHelpers.allowModifications(fieldsToCheck, userInfo.info)
            }
            type="button"
            onClick={() =>
              FormSubmitter.updateUserData(
                auth.currentUser.uid,
                FormHelpers.getModifiedFields(fieldsToCheck),
                navigate
              )
            }
          >
            Save changes
          </button>
          <button type="button" onClick={() => navigate("/account")}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
}

export default Account;

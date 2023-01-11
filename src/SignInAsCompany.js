import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ConnexionContext from "./contexts/connexionContext";
import FormHelpers from "./connexionHelpers/formHelpers";
import FormFields from "./connexionHelpers/formFields";
import FormTextInputList from "./FormTextInputList";
import FormSubmitter from "./connexionHelpers/formSubmitter";

function SignInAsCompany() {
  const { userInfo } = useContext(ConnexionContext);
  const navigate = useNavigate();
  const {
    street,
    city,
    country,
    postcode,
    mail,
    password,
    companyName,
    phone,
    siret,
    passwordConfirmation,
  } = FormFields;
  const [signInData, setSignInData] = useState({
    street,
    city,
    country,
    postcode,
    mail,
    password,
    companyName,
    phone,
    siret,
    passwordConfirmation,
  });
  const fieldsToCheck = Object.values(signInData);

  const isFormValid = () => {
    if (
      FormHelpers.allowValidation(fieldsToCheck, true) &&
      signInData.password.value === signInData.passwordConfirmation.value
    ) {
      return true;
    }
  };

  return (
    //ajout d'une classe
    <div className="page connexion-page">
      <FormTextInputList
        fields={fieldsToCheck}
        data={signInData}
        setData={setSignInData}
        isEditMode={false}
      />
      <button
        type="button"
        onClick={() => {
          isFormValid() &&
          FormSubmitter.register(
            userInfo.auth,
            signInData.mail.value,
            signInData.password.value,
            setSignInData,
            signInData,
            navigate,
            true
          )}
        }
      >
        Sign In
      </button>
    </div>
  );
}

export default SignInAsCompany;
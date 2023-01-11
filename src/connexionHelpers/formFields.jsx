const FormFields = {
  gender: false,
  mail: {
    value: false,
    isValid: false,
    errorMsg: "Please write a valid email adress",
    isRequired: true,
    displayMsg: "",
    regexToTest: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/,
    touched: false,
    name: "mail",
    label: "Mail *",
    type: "text"
  },
  password: {
    value: false,
    isValid: false,
    errorMsg:
      "Your passworsd should have between 3 and 25 characters, no accents and no special characters",
    isRequired: true,
    displayMsg: "",
    regexToTest: /^[a-zA-Z0-9]{3,25}$/,
    touched: false,
    name: "password",
    label: "Password *",
    type: "password"
  },
  passwordConfirmation: {
    value: false,
    isValid: false,
    errorMsg: "Your password confirmation should be the same as your password",
    isRequired: true,
    displayMsg: "",
    regexToTest: /^[a-zA-Z0-9]{3,25}$/,
    touched: false,
    name: "passwordConfirmation",
    label: "Password confirmation *",
    type: "password"
  },
  name: {
    value: false,
    isValid: false,
    errorMsg: "Your name should not have digits or special characters",
    isRequired: true,
    displayMsg: "",
    regexToTest: /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
    touched: false,
    name: "name",
    label: "Name *",
    type: "text"
  },
  surname: {
    value: false,
    isValid: false,
    errorMsg:
      "Your surname should not have digits, accents or special characters",
    isRequired: true,
    displayMsg: "",
    regexToTest: /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
    touched: false,
    name: "surname",
    label: "Surname *",
    type: "text"
  },
  phone: {
    value: false,
    isValid: false,
    errorMsg: "Your phone number should have only digits",
    isRequired: false,
    displayMsg: "",
    regexToTest: /^[0-9 ]+$/,
    touched: false,
    name: "phone",
    label: "Phone number ",
    type: "text"
  },
  birth: {
    value: false,
    isValid: false,
    errorMsg: "Your date of birth should be as following : MM/DD/YYYY",
    isRequired: false,
    displayMsg: "",
    regexToTest:
      /^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19[0-9]{2}|20[0-9]{2})$/,
    touched: false,
    name: "birth",
    label: "Date of birth  - MM/DD/YYYY ",
    type: "text"
  },
  commentArea: {
    value: false,
    isValid: false,
    errorMsg:
      "Comment should not contain forbidden characters and should have more than 3 characters",
    isRequired: false,
    displayMsg: "",
    regexToTest: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9!’@…©®™:$%'^&\-'")(+=,;._-\s]{3,2000}$/,
    touched: false,
    name: "commentArea",
    label: "Leave a comment",
  },
  street : {
    value: false,
    isValid: false,
    errorMsg:
      "Your address should have between 3 and 25 characters, no accents and no special characters",
    isRequired: true,
    displayMsg: "",
    regexToTest: /^[a-zA-Z0-9 ]{3,25}$/,
    touched: false,
    name: "street",
    label: "Street *",
    type: "text"
  },
  companyName : {
    value: false,
    isValid: false,
    errorMsg:
      "Your company name should have between 1 and 25 characters, no accents and no special characters",
    isRequired: true,
    displayMsg: "",
    regexToTest: /^[a-zA-Z0-9 ./+-]{1,25}$/,
    touched: false,
    name: "companyName",
    label: "Company Name *",
    type: "companyName"
  },
  city : {
    value: false,
    isValid: false,
    errorMsg:
      "Your city should have between 3 and 25 characters, no accents, no numbers and no special characters",
    isRequired: true,
    displayMsg: "",
    regexToTest: /^[a-zA-Z]{3,25}$/,
    touched: false,
    name: "city",
    label: "City *",
    type: "text"
  },
  country : {
    value: false,
    isValid: false,
    errorMsg:
      "Your country should have between 3 and 25 characters, no accents, no numbers and no special characters",
    isRequired: true,
    displayMsg: "",
    regexToTest: /^[a-zA-Z]{3,25}$/,
    touched: false,
    name: "country",
    label: "Country *",
    type: "country"
  },
  postcode: {
    value: false,
    isValid: false,
    errorMsg:
      "Your post code should have between 3 and 8 digits",
    isRequired: true,
    displayMsg: "",
    regexToTest: /^[0-9]{3,8}$/,
    touched: false,
    name: "postcode",
    label: "Post Code *",
    type: "number"
  },
  siret: {
    value: false,
    isValid: false,
    errorMsg:
      "Your post code should have between 3 and 8 digits",
    isRequired: true,
    displayMsg: "",
    regexToTest: /^[0-9 -.]{3,50}$/,
    touched: false,
    name: "siret",
    label: "SIRET *",
    type: "siret"
  },
  connexionError: false,
};

export default FormFields;

import {
  BrowserRouter as useParams,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import { ConnexionContextProvider } from "./contexts/connexionContext";
import SignIn from "./SignIn";
import Comments from "./Comments";
import Confirmation from "./Confirmation";
import Account from "./Account";
import Connexion from "./Connexion";
import SignInAsCompany from "./SignInAsCompany";
import RentCreator from "./pages/RentCreator";
import RentNeed from "./pages/rentNeed";
import MakeOffer from "./MakeOffer";
import Offers from "./Offers";
import Reserver from "./pages/Reserver";

import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      {/* <Link to="/makeOffer">make Offer</Link>
      <Link to="/offers">see Offers</Link> */}
      <ConnexionContextProvider>
        <Routes>
          {/* ///////// */}
          <Route path="planets/:planet/comments" element={<Comments />} />
          <Route path="account/connexion" element={<Connexion />} />
          <Route path="business/" element={<SignInAsCompany />} />
          <Route path="user/" element={<SignIn />} />
              <Route path="reserver/" element={<Reserver />} />
          <Route
            path="account/confirmation/:action"
            element={<Confirmation />}
          />
          <Route path="account/*" element={<Account />} />
          {/* ///////// */}
          <Route path="/" element={<Home />} />
          <Route path="makeOffer/" element={<MakeOffer />} />
          <Route path="offers/" element={<Offers />} />
          <Route path="/" element={<div>Hello user</div>} />
          <Route path="/RentCreator" element={<RentCreator />} />
          <Route path="/RentNeed" element={<RentNeed />} />
          <Route path="RentCreator/business/" element={<SignInAsCompany />} />
          <Route path="RentCreator/user/" element={<SignIn />} />
        </Routes>
      </ConnexionContextProvider>
    </div>
  );
}

export default App;

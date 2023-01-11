import { BrowserRouter as useParams, Route ,Link, Routes, useNavigate} from "react-router-dom";
import { useState } from 'react';

import Home from "./pages/Home";
import { ConnexionContextProvider } from "./contexts/connexionContext";
import SignIn from './SignIn';
import Comments from './Comments';
import Confirmation from './Confirmation';
import Account from './Account';
import Connexion from './Connexion';
import SignInAsCompany from './SignInAsCompany';

function App() {

  const navigate = useNavigate()

  return (
    <div className="App">
    <ConnexionContextProvider>
          <Routes>
              <Route path="planets/:planet/comments" element={<Comments />} />
              <Route path="account/connexion" element={<Connexion />} />
              <Route path="business/" element={<SignInAsCompany />} />
              <Route path="user/" element={<SignIn />} />
              <Route
                path="account/confirmation/:action"
                element={<Confirmation />}
              />
              <Route path="account/*" element={<Account />} />
              <Route path="/" element={<Home />} />
          </Routes>
      </ConnexionContextProvider>
    </div>
  );
}

export default App;

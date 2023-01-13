import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import Logo from "./Logo";
import PopUp from "./Login/PopUp";
// import ConnexionContext from "../../contexts/connexionContext";

import "./Navbar.css";

function Navbar() {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    setActive(!active);
    if (active) return (ref.current.className = "more-button active");
    return (ref.current.className = "more-button");
  };

  return (
    <nav className="nav-bar">
      <div className="nav-btn">
        <button
          ref={ref}
          className="more-button"
          aria-label="Menu Button"
          onClick={handleClick}
        >
          {active ? <PopUp closePopUp={() => setActive(false)} /> : null}

          <svg
            stroke="var(--button-color)"
            className="hamburger"
            viewBox="0 0 100 100"
            width="2rem"
          >
            <line
              className="line top"
              x1="90"
              x2="10"
              y1="40"
              y2="40"
              stroke-width="10"
              stroke-linecap="round"
              stroke-dasharray="80"
              stroke-dashoffset="0"
            ></line>
            <line
              className="line bottom"
              x1="10"
              x2="90"
              y1="60"
              y2="60"
              stroke-width="10"
              stroke-linecap="round"
              stroke-dasharray="80"
              stroke-dashoffset="0"
            ></line>
          </svg>
        </button>
      </div>
      <Logo />
    </nav>
  );
}

export default Navbar;

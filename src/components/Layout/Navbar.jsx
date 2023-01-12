import { useState, useRef } from "react";
import Logo from "./Logo";

import "./Navbar.css";

function Navbar() {
  const ref = useRef();
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    setActive(!active);
    if (active) return ref.current.className = "more-button active";
    return ref.current.className = "more-button"
  }

  return (
    <div className="nav-bar">
      <div className="nav-btn">
        <button ref={ref} className="more-button" aria-label="Menu Button" onClick={handleClick}>
          <svg stroke="var(--button-color)" className="hamburger" viewBox="0 0 100 100" width="250">
            <line className="line top" x1="90" x2="10" y1="40" y2="40" stroke-width="10" stroke-linecap="round" stroke-dasharray="80" stroke-dashoffset="0">
            </line>
            <line className="line bottom" x1="10" x2="90" y1="60" y2="60" stroke-width="10" stroke-linecap="round" stroke-dasharray="80" stroke-dashoffset="0">
            </line>
          </svg>
        </button>
      </div>
        <Logo />
    </div>
  )
}

export default Navbar;
import "./Logo.css";
import { useNavigate } from "react-router";

function Logo() {
  const navigate = useNavigate()
  return (
    <div className="logo" onClick={() => navigate("/")}>
      <img src="/image/background/SolilocLogo.png" alt="Logo Soliloc" />
    </div>
  );
}

export default Logo;

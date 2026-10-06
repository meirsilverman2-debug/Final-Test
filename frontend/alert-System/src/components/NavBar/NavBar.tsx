import {useNavigate } from "react-router"
import "./navBar.css";

export default function NavBar() {
    const navigate = useNavigate();
  return (
    <div className="buttons-links">
      <button  className="links" onClick={() => navigate("/")}>Home</button>
      <button  className="links" onClick={() => navigate("/map")}>Alert Map</button>
      <button  className="links" onClick={() => navigate("/alerts")}>Alerts</button>
    </div>
  )
}

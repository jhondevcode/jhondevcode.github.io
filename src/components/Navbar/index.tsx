import "./index.scss";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-head">
          <img src={require("../../assets/img/favicon-32x32.png")} alt="My logo" />
          <h1 className="nav-logo">Jhon Fernandez</h1>
        </div>
        <label htmlFor="menu" className="nav-label">
          <HiMenu className="nav-img"/>
        </label>
        <input type="checkbox" id="menu" className="nav-input" />

        <div className="nav-menu">
          <a href="#" className="nav-item">Inicio</a>
          <a href="#" className="nav-item">Acerca de</a>
          <a href="#" className="nav-item">Contacto</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

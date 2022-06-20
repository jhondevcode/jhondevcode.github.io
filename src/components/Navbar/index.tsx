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
          <a href="#about" className="nav-item">About me</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#technologies" className="nav-item">Technologies</a>
          <a href="#contact" className="nav-item">Contact me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

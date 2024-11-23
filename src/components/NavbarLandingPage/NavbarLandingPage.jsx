import React from "react";
import "./NavbarLandingPage.css";
import logo from "../../assets/image/logo.png";
import { Link } from "react-scroll";

function NavBarLandingPage() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <span className="logo-bold">Codigo</span>{" "}
        <span className="logo-highlight">Patinhas</span> */}
        {/* <img src="../assets/image/logo.png" alt="Paw Icon" className="logo-icon" /> */}
        <img src={logo} alt="Paw Icon" className="logo-icon" />
      </div>
      <ul className="navbar-menu">
      <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="tips" smooth={true} duration={500}>Dicas</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>Sobre</Link>
        </li>
        <li>
          <Link to="app" smooth={true} duration={500}>Feedback</Link>
        </li>
      </ul>
      <a href="#access" className="navbar-access-btn">
        Acessar
      </a>
    </nav>
  );
}

export default NavBarLandingPage;

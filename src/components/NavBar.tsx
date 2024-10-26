import { useState } from "react";
import "../styles.css";
import ProfilePopup from "./ProfilePopup";
import { Modal } from "react-bootstrap";

const NavBar = () => {

  return (
    <div>
      <nav>
        <div className="navbar-container">
          <div className="row align-items-center w-100">
            <div className="col-3">
              <div className="navbar-logo">
                <a href="/"><p>COLORADO ASIAN CULTURAL HERITAGE CENTER DRAGON AND LION DANCE TROUPE</p></a>
              </div>
            </div>
            <div className="col-9">
              <div className="navbar-links">
                <p>Home</p>
                <p>About Us</p>
                <p>Code of Conduct</p>
                <p>Contact</p>
                <p>More</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

import { Link } from "react-router-dom";
import "../styles.css";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav>
        <div className="navbar-container">
          <div className="row align-items-center w-100">
            <div className="col-md-3 col-6">
              <div className="navbar-logo">
                <Link className="navbar-link" to="/">
                  <p>
                    COLORADO ASIAN CULTURAL HERITAGE CENTER DRAGON AND LION
                    DANCE TROUPE
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-md-9 col-6">
              <div className="hamburger" onClick={toggleMenu}>
                &#9776;
              </div>
              <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                <Link className="navbar-link" to="/" onClick={closeMenu}>
                  <p>Home</p>
                </Link>
                <Link
                  className="navbar-link"
                  to="/about-us"
                  onClick={closeMenu}
                >
                  <p>About Us</p>
                </Link>
                <Link
                  className="navbar-link"
                  to="/code-of-conduct"
                  onClick={closeMenu}
                >
                  <p>Code of Conduct</p>
                </Link>
                <Link className="navbar-link" to="/contact" onClick={closeMenu}>
                  <p>Contact</p>
                </Link>
                <Link className="navbar-link" to="/join-us" onClick={closeMenu}>
                  <p>Join Us</p>
                </Link>
                <Link className="navbar-link" to="/book-us" onClick={closeMenu}>
                  <p>Book Us</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

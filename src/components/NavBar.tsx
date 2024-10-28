import { Link } from "react-router-dom";
import "../styles.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="navbar-container">
          <div className="row align-items-center w-100">
            <div className="col-3">
              <div className="navbar-logo">
                <Link to="/">
                  <p>COLORADO ASIAN CULTURAL HERITAGE CENTER DRAGON AND LION DANCE TROUPE</p>
                </Link>
              </div>
            </div>
            <div className="col-9">
              <div className="navbar-links">
                <Link className="navbar-link" to="/"><p>Home</p></Link>
                <Link className="navbar-link" to="/about-us"><p>About Us</p></Link>
                <Link className="navbar-link" to="/code-of-conduct"><p>Code of Conduct</p></Link>
                <Link className="navbar-link" to="/contact"><p>Contact</p></Link>
                <Link className="navbar-link" to="/join-us"><p>Join Us</p></Link>
                <Link className="navbar-link" to="/book-us"><p>Book Us</p></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

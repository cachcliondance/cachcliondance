import "../styles.css";
import NavBar from "./NavBar";
import homepageImage from "../assets/homepage_banner.jpg";
import homepageImg1 from "../assets/homepage_img1.jpg";
import homepageImg2 from "../assets/homepage_img2.jpg";
import homepageImg3 from "../assets/homepage_img3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="homepage-banner">
        <img
          className="resized-image"
          src={homepageImage}
          alt="Description of the image"
        />
        <div className="text-overlay">
          <p>EXPERIENCE THE BEAUTY OF DANCE</p>
          <Link className="navbar-link" to="/about-us"><p className="learn-more-button">Learn More</p></Link>
        </div>
      </div>
      <div className="explore-section">
        <h1>Explore Our Group</h1>
        <p>
          Asian Cultural Heritage Center Dragon and Lion Dance Troupe is a
          non-profit organization made up of dedicated volunteers, that is
          comprised of friends, students and young professionals from different
          ethnicities. It is an organization dedicated to promoting and
          introducing the sport and art of dragon and lion dance, health,
          wellness, and the Asian culture.
        </p>
      </div>
      <div className="homepage-images">
        <svg
          width="340"
          height="374"
          viewBox="0 0 340 374"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="clip-shape">
              <path d="M339.848 186.463C339.848 399.654 351.521 372.926 170.576 372.926C-26.1286 372.926 1.30491 388.836 1.30492 186.463C1.30492 83.4823 77.0901 0 170.576 0C264.062 0 339.848 83.4823 339.848 186.463Z" />
            </clipPath>
          </defs>

          <image
            href={homepageImg1}
            x="0"
            y="0"
            width="340"
            height="374"
            clip-path="url(#clip-shape)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
        <svg
          width="340"
          height="374"
          viewBox="0 0 340 374"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="clip-shape">
              <path d="M339.848 186.463C339.848 399.654 351.521 372.926 170.576 372.926C-26.1286 372.926 1.30491 388.836 1.30492 186.463C1.30492 83.4823 77.0901 0 170.576 0C264.062 0 339.848 83.4823 339.848 186.463Z" />
            </clipPath>
          </defs>

          <image
            href={homepageImg2}
            x="0"
            y="0"
            width="340"
            height="374"
            clip-path="url(#clip-shape)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
        <svg
          width="340"
          height="374"
          viewBox="0 0 340 374"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="clip-shape">
              <path d="M339.848 186.463C339.848 399.654 351.521 372.926 170.576 372.926C-26.1286 372.926 1.30491 388.836 1.30492 186.463C1.30492 83.4823 77.0901 0 170.576 0C264.062 0 339.848 83.4823 339.848 186.463Z" />
            </clipPath>
          </defs>

          <image
            href={homepageImg3}
            x="0"
            y="0"
            width="340"
            height="374"
            clip-path="url(#clip-shape)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    </div>
  );
};

export default Banner;

import "../styles.css";
import homepageImage from "../assets/homepage_banner.jpg";
import homepageImg1 from "../assets/homepage_img1.jpg";
import homepageImg2 from "../assets/homepage_img2.jpg";
import homepageImg3 from "../assets/homepage_img3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="banner homepage-banner">
        <img
          className="resized-image"
          src={homepageImage}
          alt="Description of the image"
          loading="lazy"
        />
        <div className="homepage-text-overlay">
          <p className='homepage-title'>EXPERIENCE THE BEAUTY OF DANCE</p>
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
        
      </div>
    </div>
  );
};

export default Banner;

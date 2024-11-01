import "../styles.css";
import homepageImage from "../assets/homepage_banner.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import homepageImg1 from "../assets/homepage_carousel/homepage_carousel1.jpg"
import homepageImg2 from "../assets/homepage_carousel/homepage_carousel2.jpg"
import homepageImg3 from "../assets/homepage_carousel/homepage_carousel3.jpg"
import homepageImg4 from "../assets/homepage_carousel/homepage_carousel4.jpg"
import homepageImg5 from "../assets/homepage_carousel/homepage_carousel5.jpg"
import homepageImg8 from "../assets/homepage_carousel/homepage_carousel8.jpg"
import homepageImg9 from "../assets/homepage_carousel/homepage_carousel9.jpg"
import homepageImg10 from "../assets/homepage_carousel/homepage_carousel10.jpg"
import homepageImg11 from "../assets/homepage_carousel/homepage_carousel11.jpg"
import homepageImg12 from "../assets/homepage_carousel/homepage_carousel12.jpg"
import homepageImg14 from "../assets/homepage_carousel/homepage_carousel14.jpg"
import homepageImg16 from "../assets/homepage_carousel/homepage_carousel16.jpg"

const Banner = () => {
  const images = [
    { src: homepageImg1, alt: "Homepage Image" },
    { src: homepageImg2, alt: "Homepage Image" },
    { src: homepageImg3, alt: "Homepage Image" },
    { src: homepageImg4, alt: "Homepage Image" },
    { src: homepageImg5, alt: "Homepage Image" },
    { src: homepageImg8, alt: "Homepage Image" },
    { src: homepageImg9, alt: "Homepage Image" },
    { src: homepageImg10, alt: "Homepage Image" },
    { src: homepageImg11, alt: "Homepage Image" },
    { src: homepageImg12, alt: "Homepage Image" },
    { src: homepageImg14, alt: "Homepage Image" },
    { src: homepageImg16, alt: "Homepage Image" },
  ];

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
          <p className="homepage-title">EXPERIENCE THE BEAUTY OF DANCE</p>
          <Link className="navbar-link" to="/about-us">
            <p className="learn-more-button">Learn More</p>
          </Link>
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
      <div style={{ backgroundColor: "#676758", paddingBottom: "50px" }}>
        <Carousel className="banner-carousel">
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="banner-carousel-images d-block w-100"
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;

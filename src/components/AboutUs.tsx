import aboutusimg1 from "../assets/aboutus_img1.jpg";
import aboutusimg2 from "../assets/aboutus_img2.jpg";
import aboutUsBanner from "../assets/aboutus_banner.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="about-us-banner">
        <img
          className="resized-cc-image"
          src={aboutUsBanner}
          alt="Description of the image"
          loading="lazy"
        />
        <div className="cc-text-overlay">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="about-us-container container-fluid pt-4">
        <div className="row">
          <div className="about-us-images col-md-6 col-12">
            <img
              className="resizeable-about-us-img1"
              src={aboutusimg1}
              alt="Description of the image"
              loading="lazy"
            />
          </div>
          <div className="about-us-values mission col-md-6 col-12">
            <h1>Mission</h1>
            <p>
              Our mission is to improve the quality and performance of dragon
              and lion dance through excellence in training, education,
              competition, and recognition.<br></br>
              <br></br>Our goal is to pass on the skills and knowledge to
              support our members with physical condition, balance, focus,
              coordination, health, respect, and confidence as an individual in
              the sport of dragon and lion dancing.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="about-us-values vision col-md-6 col-12">
            <h1>Vision</h1>
            <p>
              The purpose of the dragon and lion dance team is to preserve the
              culture and traditions of the Asian community, and to teach young
              Asian children about their heritage. It is also a terrific way for
              non-Asian Americans to get to know and understand the the Asian
              culture better.<br></br>
              <br></br>
              Traditionally, the dragon and lion dance was used to frighten
              demons from local businesses and communities, and to help bring
              good fortune to all. Today, the tradition endures by commemorating
              a host of festivals and opening ceremonies. Our group performs the
              Chinese dragon and lion dance for special events such as, the
              Chinese and Vietnamese new year, grand openings, weddings,
              birthdays, mid-autumn festival, school performances, parades and
              cultural events.<br></br>
              <br></br>
              Nowadays, dragon and lion dance is becoming a fun, popular, and
              competitive sport not only in Asia, but, around the world. This
              fabulous sport is a good conditioning and aerobic workout for any
              and everyone!
            </p>
          </div>
          <div className="about-us-images p-0 col-md-6 col-12">
            <img
              className="resizeable-about-us-img2"
              src={aboutusimg2}
              alt="Description of the image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

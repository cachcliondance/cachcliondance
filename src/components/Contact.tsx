import contactImage from "../assets/contact_img.jpg";
import buildingMap from "../assets/building_map.png";

const Contact = () => {
  return (
    <div>
      <div className="code-of-conduct-banner">
        <img
          className="resized-cc-image"
          src={contactImage}
          alt="Description of the image"
          loading="lazy"
        />
        <div className="cc-text-overlay">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="contact-info-section">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-7 col-12">
              <div className="contact-icons d-flex justify-content-center mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42 20C42 34 24 46 24 46C24 46 6 34 6 20C6 15.2261 7.89642 10.6477 11.2721 7.27208C14.6477 3.89642 19.2261 2 24 2C28.7739 2 33.3523 3.89642 36.7279 7.27208C40.1036 10.6477 42 15.2261 42 20Z"
                    stroke="#f1e3c8"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26Z"
                    stroke="#f1e3c8"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>
                  All practices are located at our main training facility:
                  <br></br>5999 Pecos St, Denver, CO 80221
                  <br></br>
                  <br></br>
                  Please note that address above is NOT our mailing address.
                  <br></br>
                  Contact pvo15@yahoo.com for mailing directions.
                </p>
              </div>
              <div className="contact-info d-flex align-items-center justify-content-around mb-4">
                <div className="contact-icons d-flex justify-content-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44 33.84V39.84C44.0022 40.397 43.8882 40.9483 43.665 41.4587C43.4419 41.969 43.1146 42.4272 42.7041 42.8037C42.2937 43.1803 41.8091 43.467 41.2815 43.6454C40.7538 43.8239 40.1947 43.8901 39.64 43.84C33.4857 43.1713 27.574 41.0683 22.38 37.7C17.5476 34.6293 13.4507 30.5323 10.38 25.7C6.99994 20.4824 4.89647 14.542 4.23999 8.36C4.19001 7.80693 4.25574 7.24952 4.43299 6.72324C4.61024 6.19697 4.89513 5.71337 5.26952 5.30324C5.64391 4.8931 6.0996 4.56541 6.60757 4.34104C7.11554 4.11666 7.66467 4.00052 8.21999 4H14.22C15.1906 3.99044 16.1316 4.33415 16.8675 4.96706C17.6035 5.59997 18.0841 6.47889 18.22 7.44C18.4732 9.36013 18.9429 11.2454 19.62 13.06C19.8891 13.7758 19.9473 14.5538 19.7878 15.3018C19.6283 16.0497 19.2577 16.7362 18.72 17.28L16.18 19.82C19.0271 24.8271 23.1729 28.9729 28.18 31.82L30.72 29.28C31.2638 28.7423 31.9503 28.3717 32.6982 28.2122C33.4462 28.0527 34.2241 28.1109 34.94 28.38C36.7545 29.0571 38.6399 29.5268 40.56 29.78C41.5315 29.9171 42.4188 30.4064 43.0531 31.155C43.6873 31.9036 44.0243 32.8591 44 33.84Z"
                      stroke="#f1e3c8"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>303-669-1095</p>
                </div>
                <div className="contact-icons d-flex justify-content-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z"
                      fill="#f1e3c8"
                    />
                  </svg>
                  <p>pvo15@yahoo.com</p>
                </div>
              </div>
              <div className="hours">
                <h1 className="mb-4">Opening Hours</h1>
                <div className="d-flex align-items-center justify-content-evenly">
                  <p>Friday</p>
                  <p>5:30 pm - 8:30 pm</p>
                </div>
                <div className="d-flex align-items-center justify-content-evenly">
                  <p>Saturday</p>
                  <p>2:00 pm – 5:00 pm</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12 d-flex align-items-center justify-content-center">
              <img
                className="resized-map"
                src={buildingMap}
                alt="Description of the image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

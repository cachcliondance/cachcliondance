import "../styles.css";

const Footer = () => {
  return (
    <div className="footer text-center p-4">
      <h1>
        COLORADO ASIAN CULTURAL HERITAGE CENTER DRAGON AND LION DANCE TROUPE
      </h1>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 col-12">
            <p>Phong Vo</p>
            <p>pvo15@yahoo.com</p>
            <p>303-669-1095</p>
            <svg
              className="facebook-logo"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="24" fill="#1E1E1E" />
              <path
                d="M36 4H30C27.3478 4 24.8043 5.05357 22.9289 6.92893C21.0536 8.8043 20 11.3478 20 14V20H14V28H20V44H28V28H34L36 20H28V14C28 13.4696 28.2107 12.9609 28.5858 12.5858C28.9609 12.2107 29.4696 12 30 12H36V4Z"
                stroke="#F3EFE7"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="col-md-4 col-12">
            <p>
              All practices are located at our main training facility:<br></br>
              5999 Pecos St, Denver, CO 80221
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

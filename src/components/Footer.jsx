import React from "react";

function Footer() {
  return (
    <>
      {/* Footer start */}
      <footer id="footer-section">
        <div className="container">
          <div className="row">
            <div className="address col-md-3 col-sm-12">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="navigation col-md-3 col-sm-12">
              <ul className="mb-md-0 ps-0">
                <li className="pb-md-2 ps-md-4">
                  <a href="#our-service-section"> Our services</a>
                </li>
                <li className="pb-md-2 ps-md-4">
                  <a href="#why-section">Why Us </a>
                </li>
                <li className="pb-md-2 ps-md-4">
                  <a href="#testimony-section">Testimonial </a>
                </li>
                <li className="pb-md-2 ps-md-4">
                  <a href="#faq-section">FAQ </a>
                </li>
              </ul>
            </div>
            <div className="sosmed col-md-3 col-sm-12 mb-4">
              <p>Connect with us</p>
              <div className="icon-container d-flex">
                <a href="#">
                  {" "}
                  <img
                    className="sosmed-icon"
                    src="./src/assets/images/icon_facebook.png"
                    alt="facebook-icon"
                    width="32px"
                  />{" "}
                </a>
                <a href="#">
                  {" "}
                  <img
                    className="sosmed-icon"
                    src="./src/assets/images/icon_instagram.png"
                    alt="instagram-icon"
                    width="32px"
                  />{" "}
                </a>
                <a href="#">
                  {" "}
                  <img
                    className="sosmed-icon"
                    src="./src/assets/images/icon_twitter.png"
                    alt="twitter-icon"
                    width="32px"
                  />{" "}
                </a>
                <a href="#">
                  {" "}
                  <img
                    className="sosmed-icon"
                    src="./src/assets/images/icon_mail.png"
                    alt="mail-icon"
                    width="32px"
                  />{" "}
                </a>
                <a href="#">
                  {" "}
                  <img
                    className="sosmed-icon"
                    src="./src/assets/images/icon_twitch.png"
                    alt="twictch-icon"
                    width="32px"
                  />{" "}
                </a>
              </div>
            </div>
            <div className="copyright col-md-3 col-sm-12 p">
              <p>Copyright Binar 2022</p>
              <a href="#home">
                <img src="./src/assets/images/logo.png" alt="Company-Logo" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* End footer */}
    </>
  );
}

export default Footer;

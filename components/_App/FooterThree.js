import React from "react";
import Link from "next/link";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-style-two-with-color pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget-card">
                <Link href="/">
                  <a className="logo">
                    <img src="/img/logo.png" alt="Image" />
                  </a>
                </Link>

                <p>
                 nexaya supports and develops market-leading businesses and startup companies in various industries. 
	  	With our global team, we offer international knowledge and local insights to 
	  	provide hands-on help for strong growth, with an emphasis on digital transformation, cyber 
		  security, and technology strategy.
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget-card">
                <h3>Help</h3>

                <ul className="custom-links">
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers/all">
                      <a>Careers</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget-card">
                <h3>Contacts</h3>

                <ul className="footer-contact-info">
                  <li>
                    <span>Address:</span> Frankfurt Germany.
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:hello@nexaya.com">hello@nexaya.com</a>
                  </li>
                  <li>
                    <span>Phone:</span>{" "}
                    <a href="tel:+44-587-154756">+44 587 154756</a>
                  </li>
                  <li>
                    <span>Fax:</span>{" "}
                    <a href="tel:+44-785-4578964">+44 785 4578964</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget-card">
                <h3>Newsletter</h3>

                <div className="widget-newsletter-content">
                  <p>Latest resources sent to your inbox weekly</p>
                </div>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Email address"
                    name="EMAIL"
                    required
                  />
                  <button type="submit" className="default-btn">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-style-two-with-color">
          <div className="container">
            <p>
              Copyright <i className="bx bx-copyright"></i>
              {currentYear} Nexaya. Designed By{" "}
              <a href="https://nexaya.com/">
                Nexaya
              </a>
            </p>
            <div className="footer-shape-1">
              <img
                src="/img/home-7-8-9/footer/footer-shape-1.png"
                alt="image"
              />
            </div>
            <div className="footer-shape-2">
              <img
                src="/img/home-7-8-9/footer/footer-shape-2.png"
                alt="image"
              />
            </div>
            <div className="lines-line">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
		  {/* #33971F */}
        </div>
      </footer>
    </>
  );
};

export default FooterThree;

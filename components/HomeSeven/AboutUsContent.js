import React from "react";
import Link from "next/link";

const AboutUsContent = () => {
  return (
    <>
      <div className="safer-world-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="safer-world-image">
                <img
                  src="/img/home-7-8-9/safer-world/safer-world.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="safer-world-content">
                <h3>Digital Solutions require an individual approach</h3>
                <p>
                  nexaya supports and develops market-leading businesses and startup companies in various industries. 
                  We work with all types of businesses and budgets. We love to work on exciting and challenging topics, 
                  and we have a passion for delivering high-quality products, services, and solutions, whether they are for SMBs or startups. 
                                                                                     Let’s do some amazing projects together!
              </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="safer-world-inner-box">
                      <h4>Our Mission</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Adipisc ing eleifend dictum pot nti.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="safer-world-inner-box">
                      <h4>Our Mission</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Adipisc ing eleifend dictum pot nti.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="safer-world-btn">
                  <Link href="/about">
                    <a className="default-btn">Know More About Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;

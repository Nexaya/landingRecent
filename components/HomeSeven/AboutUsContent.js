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
                At nexaya, we unleash the power of technology innovation to transform businesses in 
                consistent and efficient ways. Through our suite of customized services , including cybersecurity 
                and resilience, software engineering, digital transformation and business advisory combined with 
                tailored solutions for cyber security and managed services, we enable companies to reinvent themselves and unlock new levels of growth.
              </p>
<div class="row justify-content-center"><div class="col-lg-6 col-md-6"><div class="safer-world-inner-box"><h4>Our Mission</h4><p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipisc ing eleifend dictum pot nti.</p></div></div><div class="col-lg-6 col-md-6"><div class="safer-world-inner-box"><h4>Our Mission</h4><p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipisc ing eleifend dictum pot nti.</p></div></div></div>
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

import React from "react";
import AboutUsConstants from "../../constants/AboutUs/AboutUsPageConstants";
const DigitalWorkflow = () => {
  return (
    <section className="transform-area-five pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 pr-0">
            <div className="transform-img">
              <img src="/img/transform-img.jpg" alt="Image" />
            </div>
          </div>
          <div className="col-lg-6 pl-0">
            <div className="transform-content transform-content-five">
              <h2>What We Do</h2>
              <p>{AboutUsConstants.intro}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalWorkflow;

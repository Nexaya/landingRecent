import React from "react";
import { useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FooterThree from "../components/_App/FooterThree";

const PrivacyPolicy = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.termly.io/embed-policy.min.js";
        script.async = true;
        document.body.appendChild(script);
      }, []);
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Policy"
      />

      <section className="terms-conditions ptb-100">
        <div className="container">
          <div className="single-privacy">
          <div
              name="termly-embed"
              data-id="6ab4c64b-ff1a-402e-b738-3487b9ad1b72"
              data-type="iframe"
            ></div>
          </div>
        </div>
      </section>

      <FooterThree />
    </>
  );
};

export default PrivacyPolicy;

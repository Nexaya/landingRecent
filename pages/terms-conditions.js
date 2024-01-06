import React from "react";
import { useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FooterThree from "../components/_App/FooterThree";

const TermsConditions = () => {
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
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
      />

      <section className="terms-conditions-area ptb-100">
        <div className="container">
          <div className="single-privacy">
            <div
              name="termly-embed"
              data-id="c39e100c-d145-48d5-9d9e-36205d6d63d3"
              data-type="iframe"
            ></div>
          </div>
        </div>
      </section>

      <FooterThree />
    </>
  );
};

export default TermsConditions;

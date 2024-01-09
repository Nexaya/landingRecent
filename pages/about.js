import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ElectronicProtection from "../components/HomeOne/ElectronicProtection";
import SecurityApproach from "../components/HomeOne/SecurityApproach";
import FooterThree from "../components/_App/FooterThree";
import DigitalWorkflow from "../components/HomeFive/DigitalWorkflow";

const About = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
      />
      <div className="pt-100">
        <DigitalWorkflow />
      </div>
      <ElectronicProtection />
      <div className="pt-100">
        <SecurityApproach />
      </div>
      <FooterThree />
    </>
  );
};

export default About;

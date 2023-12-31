import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import AboutUsContent from "../components/HomeSeven/AboutUsContent";
import FooterThree from "../components/_App/FooterThree";
import ServicesTab from "../components/HomeSix/ServicesTab";
import OurServiceArea from "../components/HomeSix/OurServiceArea";
import WhyChooseUs from "../components/HomeSix/WhyChooseUs";
import LetsTalkArea from "../components/Common/LetsTalkArea";
import Team from '../components/HomeSeven/Team';
import FaqStyleOne from "../components/Common/FaqStyleOne";
const Index = () => {
  return (
    <>
      <Navbar />

      <MainBanner />
      <AboutUsContent />
      <ServicesTab />
      <OurServiceArea />
      <WhyChooseUs />
      <LetsTalkArea />
      <Team />
      <FaqStyleOne />
      <FooterThree />
    </>
  );
};

export default Index;

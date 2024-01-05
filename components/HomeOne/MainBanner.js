import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});
import Features from "./Features";

const MainBanner = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="pARZoBp9ud4"
        onClose={() => setIsOpen(!isOpen)}
      />

      <section className="banner-area banner-item-bg-1 jarallax">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="banner-text">
                <h1>Enhancing your Business through innovative Technology</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  architecto laborum eaque! Deserunt maxime, minus quas
                  molestiae reiciendis esse natus nisi iure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <Features />

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
    </>
  );
};

export default MainBanner;

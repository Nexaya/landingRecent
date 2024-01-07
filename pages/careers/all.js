import React from "react";
import Navbar from "../../components/_App/Navbar";
import FooterThree from "../../components/_App/FooterThree";
import PageBanner from "../../components/Common/PageBanner";
import CareerCrumb from "../../components/Careers/Career";
import AllCareers from "../../components/constants/Careers";

function Careers() {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Nexaya Careers"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Nexaya Careers"
      />
      <div className="section-title pt-100">
        <h2>Recent Job Openings</h2>
        {AllCareers.map((data) => (
          <CareerCrumb
            key={data.job_id}
            Title={`${data.Title}`}
            JobType={`${data.JobType}`}
            Location={`${data.Location}`}
            StartDate={`${data.StartDate}`}
            image={`${data.image}`}
            ApplicationDeadline={`${data.ApplicationDeadline}`}
            job_id={`${String(data.job_id)}`}
            Description={`${data.Description}`}
          />
        ))}
      </div>
      <FooterThree />
    </>
  );
}

export default Careers;

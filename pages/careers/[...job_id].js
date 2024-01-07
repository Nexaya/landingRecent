import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import FooterThree from "../../components/_App/FooterThree";
import AllCareers from "../../components/constants/Careers";
import CareerDetails from "../../components/Careers/CareerDetails";
import NoOpening from "../../components/constants/NoOpeningObject";

function SingleCareer() {
  const router = useRouter();
  let { job_id } = router.query;
  // search for job using id
  AllCareers.map((data) => {
    if (String(data.job_id) === String(job_id)) {
    }
  });
  return (
    <>
      <Navbar />
      {AllCareers.map((data) => {
        if (String(data.job_id) === String(job_id)) {
          return (
            <>
              <PageBanner
                pageTitle="Nexaya Careers"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Nexaya Careers"
                activePageUrl={`/careers/all`}
                SinglePageText={`${data.Title}`}
              />
              <CareerDetails Title={`${data.Title}`} />
            </>
          );
        }
      })}

      <FooterThree />
    </>
  );
}

export default SingleCareer;

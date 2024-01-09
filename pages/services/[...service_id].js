import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import FooterThree from "../../components/_App/FooterThree";
import Services from "../../constants/Services/AllServices";
import CareerDetails from "../../components/Careers/CareerDetails";

function SingleCareer() {
  const router = useRouter();
  let { service_id } = router.query;
  return (
    <>
      <Navbar />
      {Services.map((data) => {
        if (String(data.service_id) === String(service_id)) {
          return (
            <>
              <PageBanner
                pageTitle="Nexaya Services"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Nexaya Services"
                activePageUrl={`/services/all`}
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

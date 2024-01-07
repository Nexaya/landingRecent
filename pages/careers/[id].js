import React from 'react'
import { useRouter } from "next/router";
import Navbar from '../../components/_App/Navbar'
import FooterThree from '../../components/_App/FooterThree'
import AllCareers from '../../components/constants/Careers';

function SingleCareer() {
  const router = useRouter();
  let id = router.query.id;
  // Set SIngle Career
  let career_id = " ",
  image = "",
  StartDate = " ",
  Title = " ",
  Location = " ",
  Description = " ",
  JobType = " ",
  ApplicationDeadline = " ";
  AllCareers.map((data) => {
  if (data.id === id) {
    career_id = data.id;
    image = data.image;ß
    StartDate = data.StartDate;
    Title = data.Title;
    Location = data.Location;
    Description = data.Description;
    JobType = data.JobType;
    ApplicationDeadline = data.ApplicationDeadline
  }
});
  return (
    <>
    <Navbar />
    <FooterThree />
   </>
  )
}

export default SingleCareer
import React from 'react'
import Navbar from '../../components/_App/Navbar'
import FooterThree from '../../components/_App/FooterThree'
import PageBanner from '../../components/Common/PageBanner'

function AllCareers() {
  return (
    <>
     <Navbar />
     <PageBanner 
                pageTitle="Nexaya Careers" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Nexaya Careers" 
            /> 
     <FooterThree />
    </>
  )
}

export default AllCareers
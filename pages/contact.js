import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FaqStyleOne from '../components/Common/FaqStyleOne';
import FaqForm from '../components/Faq/FaqForm';
import FooterThree from '../components/_App/FooterThree';

const Contact = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Contact Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact Us" 
            /> 

            <FaqStyleOne />

            <FaqForm />
            
            <FooterThree />
        </>
    )
}

export default Contact;
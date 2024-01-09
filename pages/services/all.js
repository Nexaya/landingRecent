import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import SecurityApproach from '../../components/ServicesStyleThree/SecurityApproach';
import EffectiveProtection from '../../components/ServicesStyleThree/EffectiveProtection';
import CyberSecurityOperation from '../../components/ServicesStyleThree/CyberSecurityOperation';
import RecentProjects from '../../components/Common/RecentProjects';
import FooterThree from '../../components/_App/FooterThree';

const AllServices = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Nexaya Services" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Nexaya Services" 
            /> 

            <SecurityApproach />

            <EffectiveProtection />

            <CyberSecurityOperation />

            <RecentProjects />
            
            <FooterThree />
        </>
    )
}

export default AllServices;
import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TeamCard from '../components/Team/TeamCard';
import FooterThree from '../components/_App/FooterThree';

const Team = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Team" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Team" 
            /> 

            <TeamCard />
            
            <FooterThree />
        </>
    )
}

export default Team;
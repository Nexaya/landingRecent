import React from 'react';
import Link from 'next/link';

const Team = () => {
    return (
        <>
            <div className="expert-team-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="expert-team-content">
                                <h3>We are nexaya Global! Meet Our Team Who Are driving force behind our Whole Activities</h3>
                                <p>Our team is known by its passion for pushing boundaries, 
                                    a commitment to excellence, and an open-minded approach to exploring new ideas. We embrace creativity and a forward-thinking mindset </p>

                                <Link href="/team">
                                    <a className="default-btn">View All Team Members</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="expert-team-image">
                                <img src="/img/home-7-8-9/expert-team/expert-team.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;

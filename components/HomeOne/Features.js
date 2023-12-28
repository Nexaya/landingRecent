import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="container pt-100">
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="single-features">
                        <h3><i className="bx bx-check-shield"></i>Global Growth Support</h3>
                        <p>nexaya fuels the growth of businesses and startups worldwide. Our global team blends international knowledge and local insights to provide hands-on support, emphasizing Digital Transformation, Cyber Security, and Technology Strategy for robust growth.</p>
                        <span className="bx bx-check-shield"></span>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="single-features">
                        <h3><i className="bx bx-lock"></i> Privacy</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <span className="bx bx-lock"></span>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                    <div className="single-features mb-0">
                        <h3><i className="bx bx-certification"></i>Local Impact, Global Expertise</h3>
                        <p>nexaya's Technology and Innovation Hubs in Europe and Africa serve as vital centers. They support companies in diverse IT and Technology areas, from Digital Transformation to Cyber Security. Explore local impact with global expertise at nexaya.</p>
                        <span className="bx bx-certification"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;

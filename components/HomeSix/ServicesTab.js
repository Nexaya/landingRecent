import React, { Component } from 'react';
import Link from 'next/link';

class ServicesTab extends Component {
    
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }
	
	render() {
		return (
			<section className="services-area overflow-hidden ptb-100">
				<div className="container">
                    <div className="section-title-six">
                        <span>nexaya Services</span>
                        <h2>Delivering high-quality services and solutions</h2>
                        <p>We work with all types of businesses and budgets. We love to work on exciting and challenging topics, 
                 	and we have a passion for delivering high-quality products, services, and solutions, whether they are for SMBs or startups. 
                                                                                     Let’s do some amazing projects together!</p>
                    </div>

                    <div className="tab services-tab">
                        {/* Tabs Nav */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                Business Advisory
                            </li>
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                Digital Transformation
                            </li>
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab3')}
                            >
                                Cyber Security
                            </li>
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab4')}
                            >
                                Software Engineering
                            </li>
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab5')}
                            >
                                nexaya Dynamics
                            </li>
                        </ul>

                        {/* Tab Content */}
                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="services-single-item">
                                            <h3>Security Advisory</h3>

                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ducimus vero, vero corporis voluptates beatae pariatur laudantium, fugiat illum ab deserunt nostrum aliquid quisquam esse? Voluptatibus quia velit numquam esse porro ipsum dolor, sit amet consectetur adipisicing elit. Illo ducimus vero, corporis Voluptatibus quia.</p>
                
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius nihil dolorem cumque</p>
                                            
                                            <Link href="/about">
                                                <a className="default-btn six">
                                                    <i className="bx bx-file"></i>
                                                    Learn More
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
            
                                    <div className="col-lg-6">
                                        <div className="services-img">
                                            <img src="/img/home-six/services/services-1.png" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="services-single-item">
                                            <h3>Technical Assurance</h3>

                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ducimus vero, vero corporis voluptates beatae pariatur laudantium, fugiat illum ab deserunt nostrum aliquid quisquam esse? Voluptatibus quia velit numquam esse porro ipsum dolor, sit amet consectetur adipisicing elit. Illo ducimus vero, corporis Voluptatibus quia.</p>
                
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius nihil dolorem cumque</p>
                                            
                                            <Link href="/about">
                                                <a className="default-btn six">
                                                    <i className="bx bx-file"></i>
                                                    Learn More
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
            
                                    <div className="col-lg-6">
                                        <div className="services-img">
                                            <img src="/img/home-six/services/services-2.png" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab3" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="services-single-item">
                                            <h3>Assessment Services</h3>

                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ducimus vero, vero corporis voluptates beatae pariatur laudantium, fugiat illum ab deserunt nostrum aliquid quisquam esse? Voluptatibus quia velit numquam esse porro ipsum dolor, sit amet consectetur adipisicing elit. Illo ducimus vero, corporis Voluptatibus quia.</p>
                
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius nihil dolorem cumque</p>
                                            
                                            <Link href="/about">
                                                <a className="default-btn six">
                                                    <i className="bx bx-file"></i>
                                                    Learn More
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
            
                                    <div className="col-lg-6">
                                        <div className="services-img">
                                            <img src="/img/home-six/services/services-3.png" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab4" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="services-single-item">
                                            <h3>Threat Hunter</h3>

                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ducimus vero, vero corporis voluptates beatae pariatur laudantium, fugiat illum ab deserunt nostrum aliquid quisquam esse? Voluptatibus quia velit numquam esse porro ipsum dolor, sit amet consectetur adipisicing elit. Illo ducimus vero, corporis Voluptatibus quia.</p>
                
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius nihil dolorem cumque</p>
                                            
                                            <Link href="/about">
                                                <a className="default-btn six">
                                                    <i className="bx bx-file"></i>
                                                    Learn More
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
            
                                    <div className="col-lg-6">
                                        <div className="services-img">
                                            <img src="/img/home-six/services/services-4.png" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab5" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="services-single-item">
                                            <h3>Splunk Services</h3>

                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ducimus vero, vero corporis voluptates beatae pariatur laudantium, fugiat illum ab deserunt nostrum aliquid quisquam esse? Voluptatibus quia velit numquam esse porro ipsum dolor, sit amet consectetur adipisicing elit. Illo ducimus vero, corporis Voluptatibus quia.</p>
                
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius nihil dolorem cumque</p>
                                            
                                            <Link href="/about">
                                                <a className="default-btn six">
                                                    <i className="bx bx-file"></i>
                                                    Learn More
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
            
                                    <div className="col-lg-6">
                                        <div className="services-img">
                                            <img src="/img/home-six/services/services-5.png" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</section>
		);
	}
}

export default ServicesTab;

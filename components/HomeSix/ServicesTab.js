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
                                                                                     <br><b>Let’s do some amazing projects together!</b></p>
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
                                            <h3>Business Advisory</h3>

                                            <p>Align IT strategy with your business objectives and maintain your competitive advantage.
						Nearly every business today relies on IT. In some cases, you could go as far as to say 
						that IT no longer simply supports the business, but is the business. It is essential, 
						indispensable, and inextricably linked to successful business outcomes. These well-aligned 
						businesses feel dynamic and one step ahead. If that’s something that aligns with your vision, then we’re to help.
					</p>
                
                                            <p>Outsource executive strategic roles to focus on your business! </p>
                                            
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
                                            <h3>Digital Transformation</h3>

                                            <p>Technology transforms how your organization interacts with customers and employees in amazing new ways. 
							    Whether the future tuns out uncertain or prosperous, one thing is certain: you need to make 
							    your organization more resilient to disruption as well as prepare it to capitalize on the next phase of growth. </p>
                
                                            <p>Digital transformation is no longer an option for today’s businesses. By 2022, 70% of all organizations will have accelerated the use 
					    of their digital technologies, transforming their existing processes to drive customer engagement, employee productivity, and business resiliency.
					    But 70% of digital transformations will also fall short of their objectives, often with profound consequences.
					</p>
                                            
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
                                            <h3>Cyber Security</h3>

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
                                            <h3>Software Engineering</h3>

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
                                            <h3>nexaya Dynamics</h3>

                                            <p>Nexaya Dynamics is our innovation and creativity program. It's a place where we unleash all your ideas, 
					       visions, and imaginations. Working collaboratively with our Dynamics team, we co-create and reinvent. 
						Startups gain access to our in-house experts and an extensive network of partners, industry, and market experts spanning Europe and Africa. 
						
                                            <p>We offer support across various areas, from go-to-market strategies 
						to AI and Blockchain technologies, backed by deep tech expertise. Moreover, we can serve as a technical co-founder, 
						actively guiding a company from inception to late-stage financing in exchange for a negotiable stake</p></p>
                                            
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

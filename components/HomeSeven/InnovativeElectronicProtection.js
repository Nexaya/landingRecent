import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link';

const InnovativeElectronicProtection = () => {
    return (
        <>
            <div className="home-control-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="home-control-content">
                                <h3>We're more than tech enthusiasts; we're co-creators of positive change</h3>
                                <p>Most people stuck in their routines and dont like or accept changes. We at nexaya believe that change is not merely a 
                                    disruption but much more a gateway and a chance to evolve, adapt and thrive in our ever growing and changing digital worldto new opportunities and growth
                                </p>

                                <div className="home-control-tab-wrap">
                                    <Tabs>
                                        <TabList>
                                            <Tab>Our approach</Tab>
                                            <Tab>Mission</Tab>
                                            <Tab>Vission</Tab>
                                            <Tab>We Partner</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <p>Commited to innovation and creativity, focusing on a client-centric model that tailors solutions to individual needs. We actively engage in collaborative co-creation, 
                                            leveraging cross-continental expertise to offer diverse perspectives and insights. We emphasising tech excellence, agility, and adaptability, forming strategic partnerships and networks 
                                        in Europe, MENA and Africa to drive growth and staying at the forefront of industry trends.</p>
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Focus on The Basics</li>
                                                        <li><i className='bx bx-check'></i> Educate Customers</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Be Proactive</li>
                                                        <li><i className='bx bx-check'></i> Tighten Internal Controls</li>
                                                    </ul>
                                                </div>
                                            </div>
                                         
                                        </TabPanel>

                                        <TabPanel>
                                            <p>"Empowering young professionals and boost businesses to foster technological advancement by bridging the gap between Europe and Africa. Delivering outstanding solutions in digital 
                                            transformation, cybersecurity, and innovation, creating a global impact through collaboration, creativity, and technology & excellence."</p>

                                            <div className="row justify-content-center">
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Focus on The Basics</li>
                                                        <li><i className='bx bx-check'></i> Educate Customers</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Be Proactive</li>
                                                        <li><i className='bx bx-check'></i> Tighten Internal Controls</li>
                                                    </ul>
                                                </div>
                                            </div>
                                           
                                        </TabPanel>

                                        <TabPanel>
                                            <p>"To be a leading force in the technology & innovation ecosystem, driving positive change. We envisions a connected world where the exchange of knowledge and expertise 
                                            between continents leads to local impact and business growth. Our vision is to be the go-to partner for all companies seeking transformative solutions, while actively contributing 
                                        to the development of a vibrant and inclusive digital future."</p>
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Focus on The Basics</li>
                                                        <li><i className='bx bx-check'></i> Educate Customers</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Be Proactive</li>
                                                        <li><i className='bx bx-check'></i> Tighten Internal Controls</li>
                                                    </ul>
                                                </div>
                                            </div>
                                         
                                        </TabPanel>

                                        <TabPanel>
                                            <p>.</p>
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Focus on The Basics</li>
                                                        <li><i className='bx bx-check'></i> Educate Customers</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Be Proactive</li>
                                                        <li><i className='bx bx-check'></i> Tighten Internal Controls</li>
                                                    </ul>
                                                </div>
                                            </div>
                                          
                                        </TabPanel>

                                        <TabPanel>
                                            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.</p>
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Focus on The Basics</li>
                                                        <li><i className='bx bx-check'></i> Educate Customers</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="list">
                                                        <li><i className='bx bx-check'></i> Be Proactive</li>
                                                        <li><i className='bx bx-check'></i> Tighten Internal Controls</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link href="/about">
                                                <a className="default-btn">Learn About</a>
                                            </Link>
                                        </TabPanel>
                                    </Tabs> 
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="home-control-image">
                                <img src="/img/home-7-8-9/home-control/home-control.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InnovativeElectronicProtection;

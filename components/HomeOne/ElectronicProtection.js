import React, { Component } from "react";
import Link from "next/link";
import AboutUsConstants from "../../constants/AboutUs/AboutUsPageConstants";

class ElectronicProtection extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <section className="electronic-area bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="electronic-content">
                <h2>
                 {AboutUsConstants.main_header}
                </h2>
                <div className="electronic-tab-wrap">
                  <div className="tab electronic-tab">
                    {/* Tabs Nav */}
                    <ul className="tabs">
                      <li
                        className="current"
                        onClick={(e) => this.openTabSection(e, "tab1")}
                      >
                        {AboutUsConstants.services[0].Title}
                      </li>
                      <li onClick={(e) => this.openTabSection(e, "tab2")}>
					  {AboutUsConstants.services[1].Title}
                      </li>
                      <li onClick={(e) => this.openTabSection(e, "tab3")}>
					  {AboutUsConstants.services[2].Title}
                      </li>
                      <li onClick={(e) => this.openTabSection(e, "tab4")}>
					  {AboutUsConstants.services[3].Title}
                      </li>
                      <li onClick={(e) => this.openTabSection(e, "tab5")}>
					  {AboutUsConstants.services[4].Title}
                      </li>
                    </ul>

                    {/* Tab Content */}
                    <div className="tab_content">
                      <div id="tab1" className="tabs_item">
                        <p>
						{AboutUsConstants.services[0].Description}
                        </p>

                        <Link href="/about">
                          <a className="default-btn">Learn About</a>
                        </Link>
                      </div>

                      <div id="tab2" className="tabs_item">
                        <p>
						{AboutUsConstants.services[1].Description}
                        </p>

                        <Link href="/about">
                          <a className="default-btn">Learn About</a>
                        </Link>
                      </div>

                      <div id="tab3" className="tabs_item">
                        <p>
						{AboutUsConstants.services[2].Description}
                         
                        </p>

                        <Link href="/about">
                          <a className="default-btn">Learn About</a>
                        </Link>
                      </div>

                      <div id="tab4" className="tabs_item">
                        <p>
						{AboutUsConstants.services[3].Description}

                        </p>

                        <Link href="/about">
                          <a className="default-btn">Learn About</a>
                        </Link>
                      </div>

                      <div id="tab5" className="tabs_item">
                        <p>
						{AboutUsConstants.services[4].Description}

                        </p>

                        <Link href="/about">
                          <a className="default-btn">Learn About</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="electronic-img">
                <img src="/img/electronic-img.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ElectronicProtection;

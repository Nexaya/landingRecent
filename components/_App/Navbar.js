import React from "react";
import { useRecoilState } from "recoil";
import { collapsedState } from "../../utils/recoil-atoms";
import Image from 'next/Image';
import Link from "../../utils/ActiveLink";
import TopHeader from "./TopHeader";

const Navbar = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area fixed-top">
        {/* TopHeader */}
        <TopHeader />

        <div className="nav-area">
          <div id="navbar" className="navbar-area">
            <div className="main-nav">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-light">
                  <Link href="/">
                    <a
                      onClick={() => setCollapsed(true)}
                      className="navbar-brand"
                    >
                        <Image
                         src={"/img/logo.png"}
                         width={180}
                         height={30}
                        />
                     
                    </a>
                  </Link>

                  <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link href="/#" activeClassName="active">
                          <a className="nav-link">Home</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/about" activeClassName="active">
                          <a
                            onClick={() => setCollapsed(true)}
                            className="nav-link"
                          >
                            About
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/team">
                          <a className="nav-link">Team</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/services-three" activeClassName="active">
                          <a className="nav-link">Services</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/coming-soon">
                          <a className="nav-link">Portfolio</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="others-option">
                    <div className="get-quote">
                      <Link href="/contact">
                        <a className="default-btn">Contact Us</a>
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

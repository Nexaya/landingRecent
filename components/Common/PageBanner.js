import React from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  activePageUrl,
  SinglePageText,
}) => {
  return (
    <div className="page-title-area bg-22">
      <div className="container">
        <div className="page-title-content">
          <h2>{pageTitle}</h2>
          <ul>
            {activePageUrl ? (
              <>
                <li>
                  <Link href={homePageUrl}>
                    <a>{homePageText}</a>
                  </Link>
                </li>
                <li>
                  <Link href={activePageUrl}>
                    <a>{activePageText}</a>
                  </Link>
                </li>
                <li>{SinglePageText}</li>
              </>
            ) : (
              <>
                <li>
                  <Link href={homePageUrl}>
                    <a>{homePageText}</a>
                  </Link>
                </li>
                <li>{activePageText}</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;

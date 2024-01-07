import React from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { Button } from "react-bootstrap";

const CareerCrumb = ({ ...props }) => {
  let job_id = props.job_id;
  let Title = props.Title
  return (
    <section className="blog-area pb-70 pt-70">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="single-blog">
              <Card style={{ width: "100%", height: "15%" }}>
                <Card.Img variant="top" src={`${props.image}`} />
                <Card.Body>
                  <Card.Title>
                    <span
                      style={{
                        width: "80%",
                        fontWeight: "700",
                        fontSize: "2rem",
                        color: "#33971F",
                      }}
                    >
                      {props.Title}
                    </span>
                  </Card.Title>
                  <Card.Text>
                    <p
                      style={{
                        width: "100%",
                        alignItems: "flex-start",
                        paddingTop: "1px",
                        paddingLeft: "5px",
                        paddingBottom: "0",
                        fontSize: "1rem",
                        fontWeight: "700",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        style={{ paddingRight: "3px", lineHeight: "10px" }}
                        fill="currentColor"
                        className="bi bi-bag-dash"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                      </svg>
                      {props.JobType}{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        style={{ paddingRight: "3px" }}
                        fill="currentColor"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        fillRule
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      {props.Location}
                    </p>
                  </Card.Text>
                </Card.Body>
                <hr />
                <Card.Body>
                  <Link href={`/careers/${job_id}`}>
                    <Button
                      style={{
                        backgroundColor: "#33971F",
                        height: "50px",
                        width: "100%",
                      }}
                    >
                      <h3 style={{ color: "white" }}>Apply Now</h3>
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <h2 className="job-start-date">
            <span>Application Deadline: </span>
            {props.ApplicationDeadline}
          </h2>
        </div>
        <hr
          className="job-divider"
          style={{ color: "#33971F", width: "100%", height: "0.5rem" }}
        ></hr>
      </div>
    </section>
  );
};

export default CareerCrumb;

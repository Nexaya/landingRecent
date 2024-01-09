import React from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { Button } from "react-bootstrap";

const CareerCrumb = ({ ...props }) => {
  let job_id = props.job_id;
  let Title = props.Title;
  return (
    <section className="blog-area pb-70 pt-70">
      <div className="container">
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </section>
  );
};

export default CareerCrumb;

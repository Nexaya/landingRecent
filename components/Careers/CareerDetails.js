import React from "react";

const CareerDetails = ({...props}) => {
  return (
    <div className="container">
    <div className="grid grid-cols-8">
        <div className="col-lg-12">
        <h1 className=""> {props.Title} </h1>
        </div>

    </div>
    </div>
  );
};

export default CareerDetails;

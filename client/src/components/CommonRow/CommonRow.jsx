import React from "react";
import "./CommonRow.scss";

const CommonRow = (props) => {
  return (
    <div className="row">
      <div className="col text-center">
        <h2 className="text-primary" id="services-sub-head">
          {props.titleOne}
        </h2>
        <h1 className="fw-bolder text-dark">{props.titleTwo}</h1>
      </div>
    </div>
  );
};

export default CommonRow;

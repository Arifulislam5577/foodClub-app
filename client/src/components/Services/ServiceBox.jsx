import React from "react";
import "./Services.scss";
const ServiceBox = (props) => {
  const { name, description, url } = props.box;
  return (
    <div className="col">
      <div className="card text-center">
        <img src={url} className="card-img-top" alt={name}></img>
        <div className="card-body">
          <h3 className="card-title text-dark fw-bold">{name}</h3>
          <p className="card-text text-dark">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;

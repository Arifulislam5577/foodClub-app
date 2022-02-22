import React, { useContext } from "react";
import CommonRow from "../CommonRow/CommonRow";
import { DataContext } from "../Context/Context";
import ServiceBox from "./ServiceBox";
import "./Services.scss";

const Services = () => {
  const { services } = useContext(DataContext);
  return (
    <section className="services py-5">
      <div className="container">
        <CommonRow titleOne="Hungry?" titleTwo="Wait a minute for delicious" />
        <div className="row row-cols-1  row-cols-md-3 row-cols-lg-3 row-cols-xl-3 g-4 mt-5">
          {services.map((box) => (
            <ServiceBox box={box} key={box.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

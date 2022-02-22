/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
            <div className="hero-text">
              <h1 className="text-dark">
                Groceries delivered in as little as
                <span className="text-primary"> 2 hours</span>
              </h1>
              <p className="w-75">
                Grocen atssures fresh grocery every morning to your family
                without getting out in this pandemic.
              </p>
              <Link to="/shop" className="btn btn-primary btn-lg text-white ">
                Order Now
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image">
              <img src="./img/hero1.png" alt="header" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "./ourApp.scss";

const OurApp = () => {
  return (
    <section className="ourApp py-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center">
            <img src="./img/app.svg" alt="app" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 app-text">
            <p className="text-primary">Download our app</p>
            <h2 className="text-dark">
              Get the Groceries app order more easily.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <div className="button">
              <button className="btn-lg btn-outline-primary border border-2  px-5 me-5">
                <i
                  className="bi bi-apple me-2"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                App Store
              </button>
              <button className="btn-lg btn-outline-primary border border-2 px-5">
                <i
                  className="bi bi-play me-2"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                Play Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApp;

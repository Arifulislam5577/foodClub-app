/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4 footer-section-one">
            <h2 id="logo" className="text-primary">
              FoodClub
            </h2>
            <p className="text-muted">
              Retail food delivery is a courier service in which a restaurant,
              store, or independent food-delivery
            </p>
            <ul>
              <li>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Terms of Use</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">How it Works</a>
              </li>
              <li>
                <a href="">Cotact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
            <h3> Get Help</h3>

            <ul>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Carrer</a>
              </li>
              <li>
                <a href="">24h Service</a>
              </li>
              <li>
                <a href="">Quick Chat</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
            <h3>Support</h3>
            <ul>
              <li>
                <a href=""> FAQ </a>
              </li>
              <li>
                <a href="">Policy</a>
              </li>
              <li>
                <a href="">Business</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="">WhatsApp</a>
              </li>
              <li>
                <a href="">Support 24</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

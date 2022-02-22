/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { DataContext } from "../Context/Context";

const Nav = () => {
  const { cart } = useContext(DataContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light  p-4 sticky-top bg-light">
      <div className="container">
        <Link className="navbar-brand text-primary" to="/" id="logo">
          FoodClub
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-primary"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="text-end">
            <Link
              to="/login"
              className="btn btn-primary text-light me-2 btn-lg "
            >
              <i className="bi bi-person"></i>
            </Link>
            <Link
              to="/cart"
              className="btn btn-primary text-light btn-lg cart-btn"
            >
              <b className="bi bi-cart-plus"></b>
              {cart.length ? (
                <span className="cart-text bg-light  text-primary">
                  {cart.length ? cart.length : null}
                </span>
              ) : null}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

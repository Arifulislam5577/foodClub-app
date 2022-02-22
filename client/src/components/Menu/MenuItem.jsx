import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  const { name, price, url, _id } = props.item;

  const { addToCart, cart } = useContext(DataContext);
  return (
    <div className="col">
      <div className="card">
        <Link to={`/details/${_id}`}>
          <img src={url} className="card-img-top" alt={name} />
        </Link>

        <div className="card-body p-5">
          <ul className="d-flex list-unstyled ">
            <li>
              <i className="bi bi-star-fill text-primary"></i>
            </li>
            <li>
              <i className="bi bi-star-fill  text-primary"></i>
            </li>
            <li>
              <i className="bi bi-star-fill text-primary"></i>
            </li>
            <li>
              <i className="bi bi-star-fill text-primary"></i>
            </li>
            <li>
              <i className="bi bi-star-fill text-primary"></i>
            </li>
          </ul>
          <h5 className="card-title text-dark my-3 text-decoration-none">
            <Link to={`/details/${_id}`} className="text-decoration-none">
              {name}
            </Link>
          </h5>

          <div className="d-flex align-items-center justify-content-between">
            <p className="card-price text-primary">${price}</p>
            <div>
              <Link
                to={`/details/${_id}`}
                className="btn btn-primary btn-lg me-2"
              >
                <i className="bi bi-eye text-light"></i>
              </Link>

              <button
                className="btn btn-primary btn-lg "
                onClick={() => addToCart(_id)}
                disabled={cart.includes(props.item)}
              >
                {cart.includes(props.item) ? (
                  <i class="bi bi-cart-check text-light"></i>
                ) : (
                  <i className="bi bi-cart4 text-light"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

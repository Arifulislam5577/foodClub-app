import React, { useContext, useEffect } from "react";
import axios from "axios";
import { DataContext } from "../../Context/Context";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const { detail, addToCart, setDetail, cart } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/v1/products/${id}`);
      setDetail(data);
    };
    fetchData();
  }, [id, setDetail]);

  const { _id, name, url, price, rating, description } = detail;
  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-center my-5 bg-primary text-light p-5 ">
          <div className="col text-center">
            <h1>
              <strong>{name}</strong>
            </h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center py-5">
          <div className="col-8 col-sm-8 col-md-10 col-lg-10 col-xl-10 border border-1">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  p-3 d-flex align-items-center justify-content-center">
                <img src={url} alt={name} style={{ width: "100%" }} />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-5">
                <h2 className="text-light p-3 bg-primary">
                  <strong>{name}</strong>
                </h2>
                <div className="row my-4">
                  <div className="col-6">
                    <h4>
                      <strong className="text-light p-3 bg-primary">
                        Price: ${price}
                      </strong>
                    </h4>
                  </div>
                  <div className="col-6">
                    <h4>
                      <strong className="text-light p-3 bg-primary">
                        Rating: {rating} Star
                      </strong>
                    </h4>
                  </div>
                </div>
                <h2>
                  <strong className="text-muted">Description :</strong>
                </h2>

                <table className="table table-borderless fs-5">
                  <tbody>
                    {description?.map((dec) => (
                      <tr key={dec._id}>
                        <td>{dec.title}</td>
                        <td>{dec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div>
                  <Link
                    className="btn-primary btn me-3 btn-lg text-light rounded-0 p-3 px-5"
                    to="/shop"
                  >
                    Continue Shopping
                  </Link>
                  <button
                    className="btn-primary text-light btn me-3 btn-lg rounded-0 p-3 px-5"
                    onClick={() => addToCart(_id)}
                    disabled={cart.find((item) => item._id === _id)}
                  >
                    {cart.find((item) => item._id === _id)
                      ? "In Cart"
                      : "Add To Cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

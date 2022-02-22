import React, { useContext } from "react";
import "./Cart.scss";
import { DataContext } from "../../Context/Context";

const CartPage = () => {
  let {
    cart,
    setCart,
    removeFromCart,
    QtyIncrement,
    QtyDecrement,
    totalPrice,
    amountFormat,
  } = useContext(DataContext);

  return (
    <section className="cart">
      <div className="container">
        <div className="row p-4 bg-primary text-light rounded shadow-lg mt-5">
          <h2>Shopping Cart</h2>
        </div>
        {cart.length ? (
          <div className="row my-5 d-flex justify-content-between">
            <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
              <table className="table align-middle text-center">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Qty X Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => {
                    const { id, name, price, quantity, url } = product;
                    totalPrice += quantity * price;

                    return (
                      <tr key={id}>
                        <td>
                          <img
                            src={url}
                            alt={name}
                            style={{ width: "10rem" }}
                          />
                        </td>
                        <td>
                          <h5>{name}</h5>
                        </td>
                        <td>
                          <h5>${price}</h5>
                        </td>
                        <td>
                          <h5>
                            <i
                              className="bi bi-plus-lg qty"
                              onClick={() => QtyIncrement(id)}
                            ></i>
                            {quantity ? quantity : removeFromCart(id)}
                            <i
                              className="bi bi-dash-lg qty"
                              onClick={() => QtyDecrement(id)}
                            ></i>
                          </h5>
                        </td>
                        <td>
                          <h5>${amountFormat(quantity * price)}</h5>
                        </td>
                        <td>
                          <i
                            className="bi bi-trash delete-icon"
                            onClick={() => removeFromCart(id)}
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 ms-5">
              <table className="table">
                <thead>
                  <tr className="text-center text-capitalize bg-primary text-light">
                    <th scope="col" colSpan="5">
                      <h3>unregister account</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h3>Order Summary</h3>
                    </td>
                    <td>
                      <h3>${amountFormat(totalPrice)}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Tax</h3>
                    </td>
                    <td>
                      <h3>${amountFormat(totalPrice * 0.1)}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Total Amount</h3>
                    </td>
                    <td>
                      <h3>${amountFormat(totalPrice + totalPrice * 0.1)}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        className="btn btn-lg btn-primary text-light rounded-0"
                        onClick={() => setCart([])}
                      >
                        Clear Cart
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-lg btn-primary text-light rounded-0">
                        Checkout
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <h1>Your cart is carrently empty</h1>
        )}
      </div>
    </section>
  );
};

export default CartPage;

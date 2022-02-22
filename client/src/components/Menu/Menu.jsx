import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CommonRow from "../CommonRow/CommonRow";
import { DataContext } from "../Context/Context";

import "./Menu.scss";
import MenuItem from "./MenuItem";

const Menu = () => {
  const { Menu } = useContext(DataContext);

  const Product = Menu.map((item) => {
    return <MenuItem item={item} key={item._id} />;
  });

  return (
    <section className="menu-section py-5">
      <div className="container">
        <CommonRow
          titleOne="Popular Menu"
          titleTwo="Wait a minute for delicious"
        />

        <div className="row row-cols-1 row-cols-lg-3 row-cols-xl-3 row-cols-md-3 g-5 my-5 ">
          {Product}
        </div>
        <div className="text-center">
          <Link
            to="/shop"
            className="btn-primary btn-lg px-5 shadow-lg border-0 text-light "
            style={{ textDecoration: "none" }}
          >
            Show All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;

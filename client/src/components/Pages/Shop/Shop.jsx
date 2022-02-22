import React, { useContext } from "react";
import { DataContext } from "../../Context/Context";
import MenuItem from "../../Menu/MenuItem";

const Shop = () => {
  const { Menu } = useContext(DataContext);

  const Product = Menu.map((item) => {
    return <MenuItem item={item} key={item.id} />;
  });

  return (
    <section className="menu-section py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 row-cols-xl-3 row-cols-md-3 g-5 my-5 ">
          {Product}
        </div>
      </div>
    </section>
  );
};

export default Shop;

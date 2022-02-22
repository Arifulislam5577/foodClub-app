import React, { useContext } from "react";
import { DataContext } from "../Context/Context";
import "./Category.scss";
import CategoryItem from "./CategoryItem";

const Category = () => {
  const { categorys } = useContext(DataContext);
  return (
    <section className="category py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mt-3">
          {categorys.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;

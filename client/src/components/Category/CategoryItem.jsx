import React from "react";

const CategoryItem = (props) => {
  const { name, price, priceStart, url } = props.item;
  return (
    <div className="col ">
      <div className="card mb-3 p-3">
        <div className="row g-0">
          <div className="col-8 col-md-8 col-sm-8">
            <div className="card-body">
              <h4 className="card-title fw-bold text-dark ">{name}</h4>
              <h5 className="card-title fw-bold text-muted">{priceStart}</h5>
              <h4 className="card-title text-primary fw-bold">${price}</h4>
            </div>
          </div>
          <div className="col-4 col-md-4 col-sm-4">
            <img src={url} className="img-fluid rounded-start" alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;

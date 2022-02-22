import React, { useContext } from "react";
import { DataContext } from "../../Context/Context";
import "./BlogDetails.scss";

const BlogDetails = () => {
  const { blogdetail } = useContext(DataContext);
  const { name, url, description } = blogdetail;
  return (
    <section className="py-5">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
            <div className="clearfix">
              <img
                src={url}
                className="col-md-6 float-md-start mb-3 me-md-3"
                alt={name}
              />

              <h2>{name}</h2>

              <p>{description.slice(0, 150)}</p>
              <p>{description.slice(0, 200)}</p>
              <p>{description.slice(100)}</p>
              <p>{description.slice(100)}</p>
              <p>{description.slice(100)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;

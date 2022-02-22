import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/Context";

const BlogItem = (props) => {
  const { BlogDetail } = useContext(DataContext);
  const { name, url, description, id } = props.blogItem;

  return (
    <div className="col">
      <div className="card">
        <img src={url} className="card-img-top" alt={name} />
        <div className="card-body p-5">
          <h5 className="card-title text-dark">{name}</h5>
          <p className="card-text text-dark">{description.slice(0, 100)}...</p>
          <Link
            className="btn btn-primary btn-lg me-2 text-light"
            onClick={() => BlogDetail(id)}
            to="/blog"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

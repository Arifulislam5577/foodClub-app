import React, { useContext } from "react";
import CommonRow from "../CommonRow/CommonRow";
import { DataContext } from "../Context/Context";
import BlogItem from "./BlogItem";
import "./Blog.scss";

const Blog = () => {
  const { Blog } = useContext(DataContext);
  return (
    <section className="blog py-5">
      <div className="container">
        <CommonRow
          titleOne="Newar Me"
          titleTwo="Our regular updated new blogs."
        />
        <div className="row row-cols-1 row-cols-lg-3 row-cols-xl-3 row-cols-md-3 g-5 my-5 ">
          {Blog.map((blogItem) => (
            <BlogItem blogItem={blogItem} key={blogItem.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

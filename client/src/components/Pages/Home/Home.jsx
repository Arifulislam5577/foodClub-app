import React from "react";
import Blog from "../../Blog/Blog";
import Category from "../../Category/Category";
import Hero from "../../Hero/Hero";
import Menu from "../../Menu/Menu";
import Services from "../../Services/Services";

const Home = () => {
  return (
    <section>
      <Hero />
      <Category />
      <Services />
      <Menu />
      <Blog />
    </section>
  );
};

export default Home;

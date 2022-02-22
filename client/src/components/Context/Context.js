import React, { createContext, useEffect, useState } from "react";
import { Data } from "../../Data/Data";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = (props) => {
  const [categorys] = useState(Data.slice(0, 4));
  const [services] = useState(Data.slice(4, 7));
  const [Menu, setMenu] = useState([]);
  const [Blog] = useState(Data.slice(13));
  const [cart, setCart] = useState([]);
  const [detail, setDetail] = useState({});
  const [blogdetail, setBlogdetail] = useState({});
  let totalPrice = 0;

  const getItem = (id) => {
    const tempProduct = [...Menu];
    const product = tempProduct.find((item) => item._id === id);

    return product;
  };

  const addToCart = (id) => {
    const product = getItem(id);

    if (cart.find((item) => item === product)) {
      return;
    } else {
      const pd = {
        _id: product._id,
        name: product.name,
        url: product.url,
        stock: product.stock,
        price: product.price,
        rating: product.rating,
        quantity: 1,
      };
      console.log(pd);
      setCart([...cart, pd]);
      localStorage.setItem("cart", cart);
    }
  };

  const addtoDetial = (id) => {
    const product = getItem(id);
    setDetail({ ...product });
  };
  const removeFromCart = (id) => {
    const product = getItem(id);
    const newCart = cart.filter((item) => item !== product);
    setCart(newCart);
  };

  const QtyIncrement = (id) => {
    const product = getItem(id);
    product.quantity += 1;
    setCart([...cart]);
  };

  const QtyDecrement = (id) => {
    const product = getItem(id);
    product.quantity -= 1;
    setCart([...cart]);
  };

  const amountFormat = (amount) => {
    const formatedAmount = amount.toFixed(2);
    return formatedAmount;
  };
  const BlogDetail = (id) => {
    const tempBlog = [...Blog];
    const blog = tempBlog.find((item) => item.id === id);
    setBlogdetail({ ...blog });
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/v1/products");
      setMenu(data);
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        categorys,
        services,
        Menu,
        Blog,
        addToCart,
        cart,
        setCart,
        setDetail,
        detail,
        addtoDetial,
        removeFromCart,
        QtyIncrement,
        QtyDecrement,
        totalPrice,
        amountFormat,
        blogdetail,
        BlogDetail,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;

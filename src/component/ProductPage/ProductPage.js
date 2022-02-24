import React from "react";
import Product from "./Product";
import "./ProductPage.css";
const ProductPage = () => {
  const dataProduct = [
    {
      id: 1,
      nameProduct: "Iphone 13 Pro Max",
      srcImg: "../images/ip13.png",
      rootPrice: 31999900,
      lastPrice: 29990900,
    },
    {
      id: 2,
      nameProduct: "Iphone 12 Pro Max",
      srcImg: "../images/ip12.png",
      rootPrice: 27999900,
      lastPrice: 25990900,
    },
    {
      id: 3,
      nameProduct: "Iphone 11 Pro Max",
      srcImg: "../images/ip11.png",
      rootPrice: 18999900,
      lastPrice: 16990900,
    },
    {
      id: 4,
      nameProduct: "Iphone XS Max",
      srcImg: "../images/ipX.png",
      rootPrice: 11999900,
      lastPrice: 9990900,
    },
  ];
  return (
    <div className="product-page">
      {dataProduct.map((item, index) => (
        <Product props={{ ...item, quantity: 1 }}></Product>
      ))}
    </div>
  );
};

export default ProductPage;

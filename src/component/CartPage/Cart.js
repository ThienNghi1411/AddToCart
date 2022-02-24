import React from "react";
import "./Cart.css";
import { useState, useEffect } from "react";
import RowCart from "./RowCart";

const Cart = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setData(JSON.parse(sessionStorage.getItem("cartItem")));
    getTotal();
  }, []);
  const getTotal = () => {
    let tmp = 0;
    JSON.parse(sessionStorage.getItem("cartItem")).forEach((item) => {
      tmp += item.quantity * item.lastPrice;
    });
    setTotal(tmp);
  };

  const increaseQuantity = (row) => {
    console.log("clicked");
    let tmpArr = JSON.parse(sessionStorage.getItem("cartItem"));
    tmpArr.forEach((item) => {
      if (row.id === item.id) {
        item.quantity++;
        sessionStorage.setItem("cartItem", JSON.stringify(tmpArr));
        setData(tmpArr);
        getTotal();
      }
    });
  };
  const decreaseQuantity = (row) => {
    let tmpArr = JSON.parse(sessionStorage.getItem("cartItem"));
    tmpArr.forEach((item) => {
      if (row.id === item.id) {
        if (item.quantity === 1) {
          deleteRow(row);
          getTotal();
        } else {
          item.quantity--;
          sessionStorage.setItem("cartItem", JSON.stringify(tmpArr));
          setData(tmpArr);
          getTotal();
        }
      }
    });
  };
  const deleteRow = (row) => {
    let tmpArr = JSON.parse(sessionStorage.getItem("cartItem"));

    tmpArr.forEach((item, index) => {
      if (row.id === item.id) {
        tmpArr.splice(index, 1);
        sessionStorage.setItem("cartItem", JSON.stringify(tmpArr));
        setData(tmpArr);
        getTotal();
      }
    });
  };

  return (
    <div className="cart-page">
      <div className="row-table-cart">
        <div className="image-column-table column-cart">Hình Ảnh</div>
        <div className="title-column-table column-cart">Tên Sản Phẩm</div>
        <div className="quantity-column-table column-cart">Số Lượng</div>
        <div className="price-column-table column-cart">Đơn Giá</div>
        <div className="total-column-table column-cart">Thành Tiền</div>
        <div className="delete-column-table column-cart"></div>
      </div>
      {data !== null &&
        data.map((item, index) => (
          <RowCart
            props={item}
            deleteRow={deleteRow}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          ></RowCart>
        ))}
      <div className="row-table-cart">
        <div className="image-column-table column-cart"></div>
        <div className="title-column-table column-cart"></div>
        <div className="quantity-column-table column-cart"></div>
        <div className="price-column-table column-cart"></div>
        <div className="total-column-table column-cart">Tổng Cộng:</div>
        <div className="delete-column-table column-cart">
          {total.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;

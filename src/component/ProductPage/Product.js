import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Product(props) {
  const MySwal = withReactContent(Swal);
  const [isHover, setIsHover] = useState(false);
  const addProduct = () => {
    if (sessionStorage.getItem("cartItem") === null) {
      const dataProduct = [];
      dataProduct.push(props.props);
      sessionStorage.setItem("cartItem", JSON.stringify(dataProduct));
      MySwal.fire({
        title: <strong>Đã Thêm Vào Giỏ Hàng!</strong>,
        html: <i>Mời bạn vào giỏ hàng kiểm tra!</i>,
        icon: "success",
      });
    } else {
      const dataProduct = JSON.parse(sessionStorage.getItem("cartItem"));
      //Exist Check
      let check = false;
      dataProduct.forEach((item) => {
        if (item.id === props.props.id) {
          item.quantity++;
          check = true;
        }
      });
      if (!check) {
        dataProduct.push(props.props);
        sessionStorage.setItem("cartItem", JSON.stringify(dataProduct));
        MySwal.fire({
          title: <strong>Đã Thêm Vào Giỏ Hàng!</strong>,
          html: <i>Mời bạn vào giỏ hàng kiểm tra!</i>,
          icon: "success",
        });
      } else {
        sessionStorage.setItem("cartItem", JSON.stringify(dataProduct));
        MySwal.fire({
          title: <strong>Đã Thêm Vào Giỏ Hàng!</strong>,
          html: <i>Mời bạn vào giỏ hàng kiểm tra!</i>,
          icon: "success",
        });
      }
    }
  };
  return (
    <div
      className="singleProduct"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div className="product">
        <div className="imgProductCont">
          <div
            className={isHover ? "hoverBackground active" : "hoverBackground"}
          >
            <div className="addToCart">
              <div className="btnHover black">
                <div className="title" onClick={addProduct}>
                  Add To Cart
                </div>
                <i class="fas fa-plus"></i>
              </div>
              <div className="btnHover white">
                <div className="title">Buy Now</div>
                <i class="fas fa-cart-arrow-down"></i>
              </div>
            </div>
          </div>
          <img src={props.props.srcImg} alt="" className="imgProduct" />
        </div>
        <div className="infoProduct">
          <div className="cateAndRate">
            <div className="category">Điện Thoại</div>
          </div>
          <div className="nameProduct">{props.props.nameProduct}</div>
          <div className="priceProduct">
            <div className="rootPrice">
              <span>
                {props.props.rootPrice.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </div>
            <div className="lastPrice">
              <span>
                {props.props.lastPrice.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const RowCart = (props) => {
  const MySwal = withReactContent(Swal);

  return (
    <div className="row-table-cart">
      <div className="image-row-table row-cart">
        <img src={props.props.srcImg} alt="" className="img-cart-product" />
      </div>
      <div className="title-row-table row-cart">{props.props.nameProduct}</div>
      <div className="quantity-row-table row-cart">
        <div
          className="plus-quantity adjustQuantity"
          onClick={() => props.increaseQuantity(props.props)}
        >
          +
        </div>
        <div className="">{props.props.quantity}</div>
        <div
          className="minus-quantity adjustQuantity"
          onClick={() => props.decreaseQuantity(props.props)}
        >
          -
        </div>
      </div>
      <div className="price-row-table row-cart">
        {props.props.lastPrice.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
      </div>
      <div className="total-row-table row-cart">
        {(props.props.lastPrice * props.props.quantity).toLocaleString(
          "it-IT",
          {
            style: "currency",
            currency: "VND",
          }
        )}
      </div>
      <div className="delete-row-table row-cart">
        <div
          className="delete-row-cart"
          onClick={() => {
            Swal.fire({
              title: "Bạn Có Muốn Xoá Sản Phẩm ?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                props.deleteRow(props.props);
                Swal.fire("Deleted!", "Sản Phẩm Đã Được Xoá!", "success");
              }
            });
          }}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default RowCart;

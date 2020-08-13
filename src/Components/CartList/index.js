import React from "react";
import "./index.css";

function CartList(props) {
  let { items } = props;

  return (
    <div className="cart-list">
      <header>
        <h3>Cart List</h3>
      </header>
      {items.length
        ? items.map((product, index) => (
            <div className="product" key={"cart-" + index}>
              <img src={product.icon} alt="icon"></img>
              <div>
                <label>{product.name}</label>
                <div>
                  Quantity :<span>{product.orderQuantity}</span>
                  Price :<span>{product.price * product.orderQuantity}</span>
                </div>
              </div>
            </div>
          ))
        : "No Items in cart"}
    </div>
  );
}

export default CartList;

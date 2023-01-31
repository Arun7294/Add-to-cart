import React from "react";
import "./Cart.css";
function Cart({ cart }) {
  console.log(cart)
  return (
    <>
    <h1 className="heading">Added Products</h1>
      <div className="cart">
      
        {cart.map((item) => {
          return(
            <div key={item.id} className="cart__items">
              
              <h2 className="item__title">{item.title}</h2>
              <span>${item.price}</span>
            </div>
          )
        })}
      </div>
      <div className="cart__empty">{cart.length === 0 && (
        <h3>Your Cart is Empty , Add items to cart to view them here...</h3>
      )}</div>
      
    </>
  );
}

export default Cart;

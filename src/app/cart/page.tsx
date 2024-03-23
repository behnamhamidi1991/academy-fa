"use client";
import { FaShoppingCart } from "react-icons/fa";
import "./cart.css";

const CartPage = () => {
  return (
    <div className="cartPage">
      <div className="cartPage-header">
        <FaShoppingCart className="cartPage-icon" />
        <h2>سبد خرید</h2>
        <p>سبد خرید شما خالی است</p>
      </div>
      <div className="cartPage-body"></div>
    </div>
  );
};

export default CartPage;

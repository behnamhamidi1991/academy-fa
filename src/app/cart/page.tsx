"use client";
import { FaShoppingCart } from "react-icons/fa";
import "./cart.css";
import { courses } from "@/data";
import Image from "next/image";

const CartPage = () => {
  const quantity = courses.length;

  return (
    <div className="cartPage">
      <div className="cartPage-header">
        <FaShoppingCart className="cartPage-icon" />
        <h2>سبد خرید</h2>
        <p>سبد خرید شما خالی است</p>
      </div>
      <div className="cartPage-body">
        <div className="cartItems-container">
          {courses.map((item, index) => (
            <div key={item.id} className="cartItems-box">
              <div className="cartItems-number">{index + 1}</div>
              <div className="cartItems-image-title">
                <h2>{item.title}</h2>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="cartItems-box-image"
                />
              </div>
              <div className="cartItems-price">
                <p>قیمت: {item.price.toLocaleString()}</p>
                <p>قیمت با تخفیف: {item.offPrice.toLocaleString()}</p>
              </div>
              <div className="cartItems-btns">
                <button>حذف آیتم</button>
                <button>ادامه و پرداخت</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;

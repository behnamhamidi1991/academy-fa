"use client";
import { FaShoppingCart } from "react-icons/fa";
import "./cart.css";
import { courses } from "@/data";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../lib/store";

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="cartPage">
      <div className="cartPage-header">
        <FaShoppingCart className="cartPage-icon" />
        <h2>سبد خرید</h2>
        {cartItems.length === 0 ? (
          <p>سبد خرید شما خالی است</p>
        ) : (
          <p>{cartItems.length} آیتم در سبد خرید شما موجود می باشد</p>
        )}
      </div>
      <div className="cartPage-body">
        <div className="cartItems-container">
          {cartItems.map((item, index) => (
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

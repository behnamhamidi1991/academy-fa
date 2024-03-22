import "./cartBtn.css";
import { FaShoppingCart } from "react-icons/fa";

const CartBtn = () => {
  return (
    <button className="cartBtn">
      <FaShoppingCart />
    </button>
  );
};

export default CartBtn;

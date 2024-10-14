import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Subtotal.css";
import ShoppingContext from "../components/shopping/shoppingContext";

const Subtotal = () => {
  const history = useHistory();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;

  // Custom function to format the total price
  const formatPrice = (price) => {
    return `$${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket?.length} items): <strong>{formatPrice(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal-gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={(e) => history.push("/payment")}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;

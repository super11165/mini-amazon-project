import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };
    return (
      <div ref={ref} className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutPriduct__title">{title}</p>
          <p className="checkoutPriduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutPriduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Cart</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;

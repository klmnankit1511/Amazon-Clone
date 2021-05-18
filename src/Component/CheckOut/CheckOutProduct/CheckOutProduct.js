import React from "react";
import { useStateValue } from "../../../StateProvider";
import "./CheckOutProduct.css";
function CheckOutProduct(props) {
    const [state,dispatch] = useStateValue()
    const removeFromBasket =()=>{
            dispatch({
              type: "REMOVE_FROM_BASKET",
              id: props.id,
            });
    }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={props.image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <button
        onClick= {removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;

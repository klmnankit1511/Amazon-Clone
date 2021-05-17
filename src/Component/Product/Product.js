import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Product.css";
function Product(props) {
  
  const [state,dispatch] = useStateValue();
  
  const addtobasket = () =>{
    
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="" />
      <button onClick={addtobasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

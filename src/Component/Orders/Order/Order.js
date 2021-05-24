import React from "react";
import "./Order.css";
import moment from "moment";
import CheckOutProduct from "../../CheckOut/CheckOutProduct/CheckOutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../StateProvider";

function Order(props) {
  const [state, dispatch] = useStateValue();

  return (
    <div className="order">
      <h2>Order</h2>
      <p>
        {moment.unix(props.order.data.created).format("MMMM Do YYYY , h:mma")}
      </p>
      <p className="order__id">
        <small>{props.order.id}</small>
      </p>
      {props.order.data.basket?.map((item) => (
        <CheckOutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hidebtn
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order__total">Order Total:{value}</h3>
          </>
        )}
        decimalScale={2}
        value={props.order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;

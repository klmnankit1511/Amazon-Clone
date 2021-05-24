import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { useHistory } from "react-router-dom";
function Subtotal(props) {
  const [state, dispatch] = useStateValue();
  const his = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(state.basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <br></br>
      {!props.hidebtn && <button

        disabled={state.basket.length != 0 ? false : true}
        onClick={(e) => his.push("/payment")}
      >
        Processed to checkout
      </button>}
    </div>
  );
}

export default Subtotal;

import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { StateProvider, useStateValue } from "../../StateProvider";
import Order from "./Order/Order";
import "./Orders.css";
function Orders() {
  console.log("Hello");
  const [state, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (state.user) {
      db.collection("users")
        .doc(state.user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [state.user]);
  return (
    <div className="orders">
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IQp7pH64N2OPtdY8VirvVxO7S9Qxij0PmNLwPTvaqaICx6kDaL490XXZaP927faUtSrcwHxUBJCOFz0Ybj6bxaQ002kR7Gjjp"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/",  (req, res)=> {
  res.status(200).send("hello world");
});

app.post("/payment/create", async (req, res) => {
  
  const total = req.query.total;

  console.log("total", total);
    const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/challenge-2b45d/us-central1/api

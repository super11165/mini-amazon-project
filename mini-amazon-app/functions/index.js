const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

//put your stripe secret key here
const stripe = require("stripe")("");

// - API

// - App config
const app = express();

// - Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received ===>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/mini-6b1c3/us-central1/api

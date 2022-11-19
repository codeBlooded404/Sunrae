// // Create and Deploy Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51M4vGoHFTpE6Z20Q5PhAM8jcHMbjiGM2QQCNt98uCqdKykhMJLhNyQI1puaw6WXeW0PsNucrFxersVJ43vGDFW2000LbpwJDvm"
);

//Setting up api
//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) =>
  response.status(200).send("hello world - testing testing")
);


//Listen command
exports.api = functions.https.onRequest(app);


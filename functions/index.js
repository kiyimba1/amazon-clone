const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')('sk_test_51IfWdILfjOLSl3iCsNvi6cVcsTAMbc0PcBPhSydp7FddPt2IFnpLjhBHge2mXwjrQR6dXJUyUBMe9FKDIyA9r2ml00UTIK3Mrl')
//API
//App config
const app = express();

//Middelwares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

//Listen command
exports.api = functions.https.onRequest(app)
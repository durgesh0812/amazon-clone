const functions = require("firebase-functions");
const express=require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IaLCCSFhYhWipQV5Lmw6zwhvbMAUy0neDxsX97u9HyEcSc0rTDXAiw1L5UVA1CKAQNwh5bv476xTlkHmnortAtq00oLoZpa8Q')


const app=express();

app.use(cors({orgin: true}));
app.use(express.json());

app.get('/', (request, response)=>response.status(200).send('hello world'));

app.post("/payments/create", async (request, response) => {
    const total=request.query.total;
    console.log('Payment request recievd !!',total)

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:"INR",
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

exports.api=functions.https.onRequest(app)


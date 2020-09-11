const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');
// const stripe = require("stripe")('sk_test_51HQ7McK5kDBwb903rWrsvVfCnaJEWO1oJfzMEMDtKksRgl8VdGIG9Y8BitICEKHbIPlbzlsMXuDkwd5DkZ5gORnR00qoFLthOW');

// API 

// App Config 
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes

app.get('/', (req, res) => res.status(200).send('Hello it works yeahhhh'))
app.get('/aju', (req, res) => res.status(200).send('اه شتةع'))
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment request recieved yeeee', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
}
)

// Listen Command
exports.api = functions.https.onRequest(app)
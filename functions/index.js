const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');
// const stripe = require("stripe")('sk_test_51HQ7McK5kDBwb903rWrsvVfCnaJEWO1oJfzMEMDtKksRgl8VdGIG9Y8BitICEKHbIPlbzlsMXuDkwd5DkZ5gORnR00qoFLthOW');

// API 

// App Config 
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

//API Routes

app.get('/', (req,res) => res.status(200).send('Hello it works yeahhhh'))

// Listen Command
exports.api = functions.https.onRequest(app)
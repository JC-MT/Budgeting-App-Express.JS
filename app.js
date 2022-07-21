//Dependencies
const express = require('express');
require("dotenv").config();
const cors = require('cors')
const routes = require('./Controllers/TransactionRoutes');
const app = express();

//___________________
//Middleware
//___________________
app.use(express.json()); 
// returns middleware that only parses JSON
app.use(cors());
// this allows any app/site from anywhere access your API. 
// This is a great way to start to get things up and running. 
// Later, add restrictions, as needed.

// Routes are handled by './Controllers/TransactionRoutes' 
app.use('/', routes)
app.use('/*', (req, res) => {
    res.status(404).send('<h1>Not Found</h1>')
})

module.exports = app;
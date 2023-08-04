const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const port = 3000
require("dotenv").config()




// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/.netlify/functions/api', router);

// Connect to DATABASE
const DATABASE_URL = process.env.MONGO_DB_URL
mongoose.connect(DATABASE_URL, { useNewUrlParser: true});
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))
//



// Start Server
module.exports.handler = serverless(app);

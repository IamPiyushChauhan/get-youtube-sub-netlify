const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')
require("dotenv").config()

// Connect to DATABASE
const DATABASE_URL = process.env.MONGO_DB_URL;
mongoose.connect(DATABASE_URL, { useNewUrlParser: true});
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()
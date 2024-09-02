const mongoose = require('mongoose');
require('dotenv').config();
//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL=process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
    // No need for useNewUrlParser and useUnifiedTopology options
});

const db = mongoose.connection;
db.on('connected', () => {
    console.log('Connected to MongoDB');
});
db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

module.exports = db;

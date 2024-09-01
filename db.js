const mongoose = require('mongoose');
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

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

const mongoose = require('mongoose');

// Define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager']
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String
    }
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;

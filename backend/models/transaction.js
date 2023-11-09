const mongoose = require('mongoose');
const {Schema,model} = mongoose
const transaction_schema = new Schema({
    amount: {
        type: Number,
        required: "true"
    },
    date: {
        type: Date,
        required: "true"
    },
    name: {
        type: String,
        required: "true"
    },
    description: {
        type: String,
        required: "true"
    }
})

const TransactionModel = model("Transaction", transaction_schema)
module.exports = TransactionModel
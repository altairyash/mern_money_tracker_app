const express = require('express')
const cors = require('cors')
const app = express()
const Transaction = require('./models/transaction')
const { default: mongoose } = require('mongoose')
const port = 4000 
app.use(cors())
app.use(express.json())
app.get('/api/transactions', async (req, res) => {
    await mongoose.connect('mongodb+srv://atomicphoenix:qQ1RoPgN2FgqLR75@mern.gmrchxx.mongodb.net/?retryWrites=true&w=majority')
    const transactions = await Transaction.find()
    res.json(transactions)
})
app.post('/api/transaction',async (req, res) => {
    const {name, description, amount, date} = req.body
    await mongoose.connect('mongodb+srv://atomicphoenix:qQ1RoPgN2FgqLR75@mern.gmrchxx.mongodb.net/?retryWrites=true&w=majority')
    const transaction = await Transaction.create({name, description, amount, date})
    res.json(transaction)
})
app.listen(port)
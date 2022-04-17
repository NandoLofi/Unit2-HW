require('dotenv').config()
const express = require('express')
const app = express();
const PORT = process.env.PORT

app.get('/budgets', (req, res) => {
    res.send()
})
app.get('/budgets/:index', (req, res) => {
    res.send()
})
app.get('/budgets/new', (req, res) => {
    res.send()
})



app.listen(PORT, (req, res) =>{
    console.log(`We are on port ${PORT}`)
})
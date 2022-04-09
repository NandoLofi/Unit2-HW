const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const drinks = require('./models/drinks')

app.get('/', (req, res) => {
    res.send("You are on home server")
})

app.get("/drinks", (req, res) => {
    res.render('drinks_index.ejs')
})


app.listen(PORT, (req, res) => {
    console.log("Welcome to the Github App")
})
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const database = require('./models/drinks')

app.get('/', (req, res) => {
    res.send("You are on home server")
})

app.get("/drinks/", (req, res) => {
    res.send(database)
})


app.listen(PORT, (req, res) => {
    console.log("Welcome to the Github App")
})
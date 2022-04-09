const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("You are on home server")
})

app.get("/drinks", (req, res) => {
    
})


app.listen(PORT, (req, res) => {
    console.log("Hello!")
})
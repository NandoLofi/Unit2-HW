require('dotenv').config()
const express = require('express')
const app = express();
const PORT = process.env.PORT
const budget = require("./models/budget")


//middleware
app.use(express.urlencoded({extended: false}));
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.send('You are home')
})
//index route
app.get('/budgets', (req, res) => {
    res.render('index.ejs', budget)
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
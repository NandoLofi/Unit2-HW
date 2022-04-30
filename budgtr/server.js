require('dotenv').config()
const express = require('express')
const app = express();
const PORT = process.env.PORT
const budget = require("./models/budget")
const bodyParser = require('body-parser')


//middleware
app.use(express.urlencoded({extended: false}));
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.send('You are home')
})
//index route
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {budgetItem: budget});
});
//show route
app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', {allBudget: budget[req.params.index]})
})

//new route
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs')
})
app.post('/budgets/new', (req, res) =>{
    budget.push(req.body);
    res.redirect('/budgets')
})




app.listen(PORT, (req, res) =>{
    console.log(`We are on port ${PORT}`)
})
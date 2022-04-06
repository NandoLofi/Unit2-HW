const express = require('express');
const app = express();
const answerArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my domain")
})
app.get("/greeting/:name",(req, res) => {
    res.send(req.params.name + "! It's so great to see you!")
})
app.get("/tip/:total/:tipPercent",(req, res) => {
    let tipsum = parseInt(req.params.total) * parseInt(req.params.tipPercent) / 100
    res.send(`${tipsum}`)
})
app.get("/magic/:askquestion", (req, res) =>{
let answer = answerArray[Math.floor(Math.random() * answerArray.length)]
res.send(req.params.askquestion + " " + answer)

})

app.listen(port, () => {
    console.log('we are on port 3000')
});

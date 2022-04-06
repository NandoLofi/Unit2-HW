const express = require('express');
const app = express();


const port = 3000;


app.get("/", (req, res) => {
    res.send(`
    <html>
        <body>
        <h1> 99 Bottles of Beer On The Wall </h1>
            <a href="/99"> Take one down, Pass It Around</a>
        </body>
    </htmL>
    `)
})

app.get("/:number", (req,res) => {
    let href = (req.params.number) - 1
    if(parseInt(req.params.number) === 1) {
        res.send(
        `<p> There are no more bottles left </P>
        <a href = "/">Back to home</a>
        `)}
    else if(req.params.number > 1){
    res.send(parseInt(req.params.number) - 1 +' Bottles of beer left on the wall ' + `<a href="${href}">Take one down, pass it</a>`)
    }
    else {
        res.send('Hold on partner, you must enter a number between 99 and 1')
    }
})

// //If user inputs number, send back text saying number of bottles left and url
app.listen(port, () => {
    console.log('we are on port 3000')
});
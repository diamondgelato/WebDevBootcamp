// All dependensies
const express = require('express');
const app = express();
const port = 3000;

var bodyParser = require('body-parser');
app.use (bodyParser.urlencoded({extended: true}));


// GET requests
app.get ('/', function (req, res) {
    // console.log (__dirname)
    res.sendFile (__dirname + "/index.html");
})

app.get ('/bmicalculator', function (req, res) {
    res.sendFile (__dirname + "/bmicalculator.html");
})


// POST requests
app.post ('/', function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    console.log(result);
    res.send ("Result is " + result);
})

app.post('/bmicalculator', function (req, res) {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var result = weight / Math.pow (height, 2);

    res.send ("The BMI is " + result);
})

// ???
app.listen (port, function () {
    console.log ("Server started at http://localhost:3000");
})
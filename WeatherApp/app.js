const bodyParser = require ("body-parser");

const https = require('https');
const apiKey = "94a280e905bf0fa56556bc86507f5add";
const units = "metric";

const express = require('express');
const app = express();
const port = 3000;

app.use (bodyParser.urlencoded({extended: true}));

app.get ('/', function (req, res) {
    res.sendFile (__dirname + "/index.html");
})

app.post ('/', function (req, res) {
    // res.send ("City Name: " + req.body.cityName);
    
    var query = req.body.cityName;
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;

    https.get (apiURL, function (apiRes) {
        // console.log (apiRes);
        console.log (apiRes.statusCode);

        apiRes.on ("data", function (data) {
            var weatherData = JSON.parse (data);
            // console.log (weatherData);

            var temperature = weatherData.main.temp;
            var description = weatherData.weather[0].description;
            var icon = weatherData.weather[0].icon;

            const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write ("<h1>City: " + query +"</h1>"); 
            res.write ("<h3>Temperature: " + temperature + " degrees Celcius</h3>"); 
            res.write ("<h3>Description: " + description + "</h3>");
            res.write ("<img src = " + iconURL + ">");
        })
    });

    // res.send ("Server Up and Running!");
})

app.listen (port, function () {
    console.log ("Server started on http://localhost:3000");
})
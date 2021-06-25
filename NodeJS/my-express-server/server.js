const express = require('express')
const app = express()
const port = 3000

// What to send when website sees a GET request
app.get('/', (req, res) => {
    // sends a response to the client making GET request
    res.send("<h1>Hello World!</h1>");

    // logs the request made by any client
    // console.log(request)
});

app.get ("/contact", function (req, res) {
    res.send ("Contact me at mugdha@gmail.com");
});

app.get ("/about", function (req, res) {
    res.send ("<h1>About Me</h1> <p>Hi! I'm Mugdha and I'm trying my best :')</p>")
});




// ???
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

// bind function to a const
const date = require (__dirname + "/date.js");

app.set ('view engine', 'ejs');
app.use (express.static ("public"));
app.use (bodyParser.urlencoded({extended: true}));

// list of the  
let newItem = ["Buy Groceries", "Make Gochujang Noodles", "Eat Up!"];
let workItems = [];

app.get ("/", function (req, res) {
    // run function bound to the const 'date'
    let day = date.getDate();

    // res.render ("list", {dayType: dayType, dayTypeMessage: dayTypeMessage});
    res.render ("list", {listTitle: day, listName: "Personal", newItem: newItem});
});

app.get ("/work", function (req, res) {
    res.render ("list", {listTitle: "Work List", listName: "Work", newItem: workItems})
});

app.get ("/about", function (req, res) {
    res.render ("about");
})

app.post ("/", function (req,res) {
    
    let item = req.body.todoListItem;
    
    if (req.body.submit == "Personal") {
        // console.log (item);
        newItem.push (item);
        res.redirect ("/");
    } else if (req.body.submit == "Work") {
        // console.log (item);
        workItems.push (item);
        res.redirect ("/work");
    }
});

app.listen (port, function () {
    console.log ("Server started on http://localhost:3000");
})
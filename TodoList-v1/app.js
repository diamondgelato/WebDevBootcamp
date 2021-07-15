const express = require("express");
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen (port, function () {
    console.log ("Server started on http://localhost:3000");
})

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

// bind function to a const
const date = require (__dirname + "/date.js");

app.set ('view engine', 'ejs');
app.use (express.static ("public"));
app.use (bodyParser.urlencoded({extended: true}));

DBConnect();




// list of the  
// let newItem = ["Buy Groceries", "Make Gochujang Noodles", "Eat Up!"];
// let workItems = [];

// database models and schemas
const itemSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    }
});

const Item = new mongoose.model ("Item", itemSchema);

const defaultItems = [
    new Item ({ name: "Oh look! A to-do list" }), 
    new Item ({ name: "Click on the + boy below to add a new item" }), 
    new Item ({ name: "<-- Check that to strike off what you've completed!" }) 
];

const listSchema = new mongoose.Schema ({
    name: String,
    items: [itemSchema]
});

const List = new mongoose.model ("List", listSchema);




// Connect server to mongoDB
async function DBConnect() {
    try {
        await mongoose.connect ('mongodb+srv://admin-mugdha:Mugdha1809@cluster0.r3dkw.mongodb.net/todolistDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log ("Database connected")
    } catch (error) {
        console.log ("Database could not connect")
    }
}

// link to default list 
app.get ("/", async function (req, res) {
    // run function bound to the const 'date'
    // let day = date.getDate();
    let day = "Today";

    // res.render ("list", {dayType: dayType, dayTypeMessage: dayTypeMessage});

    Item.find (function (err, items) {
        if (err) {
            console.log (err);
        } else if (items.length == 0) {
            // console.log ("Inside else if statement");

            Item.insertMany (
                defaultItems,
                function (err) {
                    if (err) {
                        console.log (err);
                    } else {
                        mongoose.connection.close();
                        console.log ("Insert successful");
                    }
                }
            );
        } else {
            // console.log ("Inside else statement");
            // console.log (items);
            res.render ("list", {listTitle: day, listName: "Personal", newItem: items});
        }
    });
});

// Link to custom lists
app.get ("/:listType", (req, res) => {
    let listType = _.capitalize(req.params.listType);
    console.log ("\'" + listType + "\'");

    List.findOne (
        {name: listType},
        function (err, list) {
            if (err) {
                console.log (err)
            } else if (!list) {
                const list = new List ({
                    name: listType,
                    items: defaultItems
                });
            
                list.save();

                res.redirect ("/"+listType);

                console.log ("List doesn't exist");
                // console.log (list);
            } else if (list) {
                // show existing list
                res.render (
                    "list",
                    {
                        listTitle: list.name,
                        newItem: list.items
                    }
                )

                console.log ("List exists");
                // console.log (list);
            }
        }
    )    
});

// Link to about page
app.get ("/about", function (req, res) {
    res.render ("about");
})




// Adding new item into any list
app.post ("/", function (req,res) {

    let listName = req.body.submit;
    
    let item = new Item(
        {name: req.body.todoListItem}
    );

    if (listName == "Today") {
        // default list
        item.save();
        res.redirect("/");
    } else {
        List.findOne (
            {name: listName},
            (err, foundList) => {
                foundList.items.push(item);
                foundList.save();
                res.redirect ("/"+listName);
            }
        )
    }
});

// deleting item from any list
app.post ("/delete", async function (req, res) {
    let itemID = req.body.checkbox.trim();
    let listName = req.body.listName.trim();
    console.log (itemID);
    console.log (listName);

    if (listName == "Today") {
        // default list
        Item.findByIdAndRemove (
            itemID,
            function (err) {
                if (err) {
                    console.log (err);
                } else {
                    console.log ("Deleted Sucessfully")
                }
            }
        );

        res.redirect("/");
    } else {
        List.findOneAndUpdate (
            {name: listName},
            {$pull: {items: {_id: itemID}}},
            (err, foundList) => {
                if (err) {
                    console.log (err);
                } else {
                    console.log ("Deleted Successfully");
                    res.redirect ("/"+listName);
                }
            }
        )


    }

    

    // res.redirect ("/");
})
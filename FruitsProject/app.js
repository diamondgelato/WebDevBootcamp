const mongoose = require('mongoose');

// make connection to db
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

// create a schema
const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "No name specified :("]
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    review: String
});

// create a model: create a collection based on the given schema
const Fruit = mongoose.model ("Fruit", fruitSchema);

// creating documents for the database
// const apple = new Fruit ({
//     name: "Apple",
//     rating: 10,
//     review: "Its the best istg"
// });

// const kiwi = new Fruit ({
//     name: "Kiwi",
//     rating: 7,
//     review: "Australian Boi"
// });

// const orange = new Fruit ({
//     name: "Orange",
//     rating: 3,
//     review: "Too damn sour"
// });

// const banana = new Fruit ({
//     name: "Banana",
//     rating: 9,
//     review: "Pretty sweet"
// });

// const peach = new Fruit ({
//     name: "Peach",
//     rating: 5,
//     review: "Never had them"
// });

// peach.save ();

// Fruit.insertMany ([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log (err);
//     } else {
//         console.log ("No error");
//     }
// });

// apple.save();

// name and age for person
// John is 37 yrs
const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favFruit: fruitSchema
});

const Person = mongoose.model ("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Kinda stings but real sweet"
});

// pineapple.save();

const amy = new Person ({
    name: "Amy",
    age: 16,
    favFruit: pineapple
})

// amy.save();

const john = new Person ({
    name: "John",
    age: 37
});

// john.save ();

const mango = new Fruit({
    name: "Mango",
    rating: 8,
    review: "Amazing but its too seasonal"
});

mango.save();

Person.updateOne (
    {name: "John"},
    {favFruit: mango},
    function (err) {
        if (err) {
            console.log (err);
        } else {
            mongoose.connection.close();
            console.log ("Update successful");
        }
    }
)





// reading from database

// Fruit.find (function (err, fruits) {
//     if (err) {
//         console.log (err);
//     } else {
//         mongoose.connection.close()
//         fruits.forEach (fruit => console.log (fruit.name));
//     }
// });




// Updating database
// Fruit.updateOne (
//     {name: "Peach"}, 
//     {rating: 7, review: "Tried them, and they turned out nice"}, 
//     function (err) {
//         if (err) {
//             console.log (err);
//         } else {
//             console.log ("Update succesful");
//         }

//         mongoose.connection.close()
// })




// Deleting document from database
// Fruit.deleteOne (
//     {name: "Peach"},
//     function (err) {
//         if (err) {
//             console.log (err);
//         } else {
//             console.log ("Deleting record succesful");
//         }

//         mongoose.connection.close()
// });

// Person.deleteMany (
//     {name: "John"},
//     function (err) {
//         if (err) {
//             console.log (err);
//         } else {
//             console.log ("Deleting records succesful");
//         }

//         mongoose.connection.close()
//     }
// )
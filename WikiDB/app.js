const express = require("express");
const app = express();
const port = 3000;

//Added this to receive body.
// app.use(require('body-parser').json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

const mongoose = require ("mongoose");

mongoose.connect ("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = new mongoose.Schema ({
    title: String,
    content: String,
});

const Article = new mongoose.model ("article", articleSchema);

app.get ("/", (req, res) => {
    res.write ("<h1>Hello World!</h1>");    
});

app.route ("/articles")
.get ( (req, res) => {
    Article.find((err, articles) => {
        if(err){
            console.log(err)
        } else {   
            res.send (articles);
        }
    })
})

.post ( (req, res) => {
    // console.log(req.body);

    let newArticle = new Article ({
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save(err => {
        if (err) {
            res.send (err);
        } else {
            res.send ("Article added");
        }
    });
})

.delete ((req, res) => {
    Article.deleteMany (err => {
            if (err) {
                res.send (err);
            } else {
                res.send ("Deleted all articles");
            }
        }
    );
})

app.route("/articles/:articleName")
    .get ((req, res) => {
        
        Article.findOne (
            {title: req.params.articleName},
            (err, article) => {
                if (err) {
                    res.send ("No article found");
                } else if (article) {
                    res.send (article);
                }
            }
        )
    })

    .put ((req, res) => {
        Article.update (
            {title: req.params.articleName},
            {title: req.body.title, content: req.body.content},
            {overwrite: true}, 
            (err) => {
                if (err) {
                    res.send (err);
                } else {
                    res.send ("Article updated");
                }
            }
        )
    })

    .patch ((req, res) => {
        Article.update (
            {title: req.params.articleName},
            {$set: req.body}, 
            (err) => {
                if (err) {
                    res.send (err);
                } else {
                    res.send ("Article updated");
                }
            }
        )
    })

    .delete ((req, res) => {
        Article.deleteOne (
            {title: req.params.articleName},
            err => {
                if (err) {
                    res.send (err);
                } else {
                    res.send ("Article deleted successfully");
                }
            }
        )
    })

app.listen (port, () => {
    console.log ("Server started at http://localhost:3000");
});

// data base
// /* 1 */
// {
//     "_id" : ObjectId("60f629aa6be697e63839ba83"),
//     "title" : "REST",
//     "content" : "REST stands for REpresentational State Transfer. It is an architectural style for designing APIs"
// }

// /* 2 */
// {
//     "_id" : ObjectId("5c139771d79ac8eac11e754a"),
//     "title" : "API",
//     "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
// }

// /* 3 */
// {
//     "_id" : ObjectId("5c1398aad79ac8eac11e7561"),
//     "title" : "Bootstrap",
//     "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
// }

// /* 4 */
// {
//     "_id" : ObjectId("5c1398ecd79ac8eac11e7567"),
//     "title" : "DOM",
//     "content" : "The Document Object Model is like an API for interacting with our HTML"
// }

// /* 5 */
// {
//     "_id" : ObjectId("60f70b0bafb90c679064fd6a"),
//     "title" : "Mugdha",
//     "content" : "Mugdha once touched the grill she was so hot that the grill got burnt.",
//     "__v" : 0
// }
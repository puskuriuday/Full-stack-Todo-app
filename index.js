const express = require("express");
const app = express();
const path = require("path");
const { v4 : uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const port = 3000;


app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"));
app.use(express.static(path.join(__dirname,"./public")));


app.get('/',(req,res) => {
    res.render("index")
})

app.listen(port)
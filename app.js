const express = require("express");
const bodyParser = require("body-parser");
const date = require (__dirname + "/date.js");



const app = express();

const items = ["1thing", "2thing", "3thing"]
const workItems=[]
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.get("/", function (req, res) {
const day = date.getDate();

    res.render("list", { listTitle: day, newListItems: items});
});

app.post("/", function (req, res) {
    const item = req.body.newItem;
    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }   else{
        items.push(item);
        res.redirect("/");
    }
    
    
});

app.get("/work", function(req, res){
    res.render("list",{listTitle: "Work List", newListItems: workItems });
});

app.post("/work", function(req, res){
    let item= req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});


app.listen(3000, function () {
    console.log("Server started on port 3000");
});


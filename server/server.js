var express=require("express");
var path=require("path");
var bodyParser=require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
///////////////////////////////////
app.get("/",function(req,res){
    console.log(req.body);
    res.sendFile(path.join(__dirname,"../index.html"));
});
app.get("/assets/pictures/Fallerein_Party.png",function(req,res){
    res.sendFile(path.join(__dirname,"../assets/pictures/Fallerein_Party.png"));
});
app.get("/assets/styles/headerCustom.css",function(req,res){
    res.sendFile(path.join(__dirname,"../assets/styles/headerCustom.css"));
});
app.get("/assets/styles/default.css",function(req,res){
    res.sendFile(path.join(__dirname,"../assets/styles/default.css"));
});
app.get("/assets/js/accountSystem.js",function(req,res){
    res.sendFile(path.join(__dirname,"../assets/js/default.js"));
});
app.get("/assets/js/accountSystem.js",function(req,res){
    res.sendFile(path.join(__dirname,"../assets/js/default.js"));
});
app.get("/assets/pictures/background.png",function(req,res){
    res.sendFile(path.join(__dirname,"../assets/pictures/background.png"));
    console.log(req.body);
});
///////////////////////////////////
app.listen(PORT,function(){
    console.log("Listening on PORT: "+PORT);
})
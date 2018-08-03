var express=require("express");
var path=require("path");
var bodyParser=require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../index.html"));
});

app.listen(PORT,function(){
    console.log("Listening on PORT: "+PORT);
})
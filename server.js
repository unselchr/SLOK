var express=require("express");
var path=require("path");
var bodyParser=require("body-parser");
var exphbs=require("express-handlebars");
require('dotenv').config();

var app = express();
var PORT = process.env.PORT || 3000;
app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");
app.use(express.static("public"));
//////////////////ROUTES///////////////////////
app.get("/",function(req,res){
    res.render("index",{});
})
app.get("/home",function(req,res){
    res.render("index",{});
})
app.get("/index.html",function(req,res){
    res.render("index",{});
})
app.get("/index",function(req,res){
    res.render("index",{});
})
//Above is all sudo for home
app.get("/users",function(req,res){

})
app.get("/users/:user",function(req,res){
    var user=req.params.user;
})
app.get("/users/myPage",function(req,res){

})
app.get("/games",function(req,res){

})
app.get("/games/game/:game",function(req,res){
    var game=req.params.game;
})
app.get("/games/myGames",function(req,res){

})
app.get("/games/allGames",function(req,res){

})
app.get("/currentGame",function(req,res){

})
//ROUTES FOR ASSETS//
// app.get("/assets/html/:filename",function(req,res){
//     res.sendFile(path.join(__dirname,"/assets/html/"+req.params.filename));
// })
// app.get("/assets/styles/:filename",function(req,res){
//     res.sendFile(path.join(__dirname,"/assets/styles/"+req.params.filename));
// })
// app.get("/assets/pictures/:filename",function(req,res){
//     res.sendFile(path.join(__dirname,"/assets/pictures/"+req.params.filename));
// })
// app.get("/assets/js/:filename",function(req,res){
//     res.sendFile(path.join(__dirname,"/assets/js/"+req.params.filename));
// })
////////////////END ROUTES////////////////////
app.listen(PORT,function(){
    console.log("App listening on port: "+PORT);
})
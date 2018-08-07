var express=require("express");
var path=require("path");
var bodyParser=require("body-parser");
require('dotenv').config()

var app = express();
var PORT = process.env.PORT || 3000;
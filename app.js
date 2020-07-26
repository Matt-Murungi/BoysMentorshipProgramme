const express = require("express");

const app = express();

const port = process.env.PORT;

app.get('/', function(req, res){
    res.send("hello");
});

module.exports = app;
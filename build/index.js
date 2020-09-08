"use strict";
exports.__esModule = true;
exports.app = void 0;
var express = require("express");
var app = express();
exports.app = app;
app.get('/', function (req, res) {
    res.send("Hello world!");
});
app.listen(3000, function () {
    console.log("App listen on port 3000");
});

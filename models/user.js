var express = require("express");
var db = require("./models");

var PORT = process.env.PORT || 3000;
var app = express();

db.sequelize.sync().then(function() {
app.listen(PORT, function() {
console.log("listening on port %s", PORT);
});
});


module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
    email: DataTypes.String,
    password: DataTypes.String,
    });
    return User;
    }
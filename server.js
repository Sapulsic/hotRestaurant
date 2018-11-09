var express = require('express');

var path = require("path");

var app = express();



var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

require("./hotRestaurantServer.js")(app);
// require("./backend/route.js")(app);

app.listen(PORT, function (){
    console.log("App listening on PORT: " + PORT);
});

//exports.hotRestaurants = whatever;
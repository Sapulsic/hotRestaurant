// Dependicies
// ==================================================

var waiting = require("./data/table");
var table = require("./data/waiting");
var path = require("path");
//var app = require("./server");

// Routes
// ==================================================

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "tables.html"));
    });
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "reserve.html"));
    });
    
    app.get("/api/tables", function(req, res) {
        return res.json(tables);
    });
    
    app.get("/api/tables/:table", function(req, res) {
        var chosen = req.params.table;
    
        console.log(chosen);
    
        for (var i = 0; i < tables.length; i++) {
            if (chosen === tables[i].routeName) {
            return res.json(tables[i]);
            }
        }
    
        return res.json(false);
    });


app.post("/api/tables", function(req, res) {
    var newTable = req.body;

    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);
})

app.post("/api/clear", function() {

    table = [];
    waiting = [];

    console.log(table);
    console.log(waiting);
    
});

};

// Starting Server
// ==================================================

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
// })
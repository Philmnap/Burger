// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "wupyqwjj9y5l8ygc",
    password: "b5is0fsiny4tkd9h",
    database: "rf4s2urfo95obo62"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
// Set up MySQL connection.
var mysql = require("mysql");

var connection; 
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
    port: 3306,
    host: "lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "fyzzj3fdz5g3ams2",
    password: "fzlfs87uuay6ixzg",
    database: "dpxqy5nld560x2rb"
});
};

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
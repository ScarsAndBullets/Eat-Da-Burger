var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "b00tcamp",
  database: "burger_db"
});

connection.connect(err => {
  if (err) {
    console.error("MySQL didn't connect: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});

module.exports = connection;
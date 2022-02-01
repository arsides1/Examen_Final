var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ventas-mysql-2022"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM usuario LIMIT 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "VENTAS-MYSQL-2022"
});

con.connect(function(err){
if(err) throw err;
console.log("Connected");
var sql = "delete from usuario  WHERE id = 5";
con.query(sql,function(err, result){
    if(err) throw err;
    console.log("1 record delete");
});
});
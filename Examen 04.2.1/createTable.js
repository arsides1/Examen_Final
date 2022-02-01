var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "VENTAS-MYSQL-2022"
});

con.connect(function(err){
    if(err)throw err;
    console.log("connected!");
    var sql = "CREATE TABLE usuario(id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(200), apellido VARCHAR(150), edad INT, celular VARCHAR(100), correo VARCHAR(100))"
    con.query(sql, function(err, result){
    if(err) throw err;
    console.log("Table Created usuario")    
});
});
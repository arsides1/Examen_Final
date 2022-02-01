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
    var sql = "INSERT INTO usuario(nombre, apellido, edad, celular, correo) VALUES ('Pablo','Diaz','19','976528463','´pablo29@')";
    con.query(sql,function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
});
});
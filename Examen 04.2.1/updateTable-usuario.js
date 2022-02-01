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
var sql = "UPDATE usuario SET nombre = 'Juanito', apellido = 'Gonzales', edad = '18', celular = '973627485' , correo = 'juan10@' WHERE id = 1";
con.query(sql,function(err, result){
    if(err) throw err;
    console.log("1 record update");
});
});
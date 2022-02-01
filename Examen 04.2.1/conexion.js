let jconexion = {

    host:"localhost",
    user:"root",
    password:"root",
    database:"VENTAS-MYSQL-2022"
}

var mysql = require('mysql');

var con = mysql.createConnection(jconexion);

con.connect(function(error){
    try{
        if(error){
            console.log("Error al establecer la conexion a la BD --"+ error);
        }else{
            console.log("Conexion exitosa a MYSQL");
        }    
    }catch (error){
        console.log("Contacto.agregarUsuario.connect --Error--" + error);
    }
});
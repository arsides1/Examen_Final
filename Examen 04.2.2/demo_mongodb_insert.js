var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("ventas-mongodb-2002");
    var cliobj =
    {nombre:"Justine de Sade" , autor:"MARQUÉS DE SADE" , numero_paginas:"26" , color:"azul"};
dbo.collection("libro").insertOne(cliobj, function(err, res){
    if (err) throw err;
    console.log("1 libro inserted");
    db.close();
});    
});
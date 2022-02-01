var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ventas-mongodb-2002");
  var myquery = { autor: "MIGUEL DE CERVANTES" };
  var newvalues = { $set: {nombre: "Lituma en los Andes", autor: "Mario Vargas Llosa" , numero_paginas:"21" , color:"morado"} };
  dbo.collection("libro").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 libro updated");
    db.close();
  });
});
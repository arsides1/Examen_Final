var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ventas-mongodb-2002");
  var myquery = { Autor: 'MARQUÉS DE SADE' };
  dbo.collection("libro").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 libro deleted");
    db.close();
  });
});
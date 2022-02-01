var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db){
    if (err) throw err;
    var dbo = db.db("ventas-mongodb-2002");
dbo.collection("libro").find({}).toArray(function(err, result){
    if (err) throw err;
    console.log(result);
    db.close();
});
});
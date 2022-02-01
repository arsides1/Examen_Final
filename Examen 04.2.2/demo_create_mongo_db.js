var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ventas-mongodb-2002"

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log("Database create!");
    db.close();
})
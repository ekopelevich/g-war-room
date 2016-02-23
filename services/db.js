var mongodb = require('mongodb');
var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/database'
mongodb.MongoClient.connect(url, function(err, db) {
  var collection = db.collection('collection');
  collection.findOne({user: “bob”})
}

var mongo = require('mongodb');
var url = (process.env.HEROKU_MONGODB_DB_URL || 'mongodb://localhost:27017/warroom';

module.exports = {
  connect: function() {
    return new Promise(function(resolve, reject) {
      mongo.MongoClient.connect(url, function(err, db) {
        if (err) reject(err);
        else resolve(db);
      });
    });
  },
  ObjectId: mongo.ObjectId
}

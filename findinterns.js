const assert = require('assert');

const findInterns = function(db, callback) {
    const collection = db.collection('myMovies');
    collection.findOne(({}), function(err, docs) {
        assert.equal(err, null);
        console.log("Found first document in the collection");
        console.log(docs);
        callback(docs);
    });
    
    collection.find({rating: "7"}).toArray(function(err, rating) {
        assert.equal(err, null);
        console.log("Found all movies with rating of 7");
        console.log(rating);
        callback(rating);
    });
    
    collection.find({}, { projection: {_id: 0, movie: true}}).toArray(function(err, projection) {
        assert.equal(err, null);
        console.log("Returned only movie titles ");
        console.log(projection);
        callback(projection);
    });
};

module.exports = findInterns;
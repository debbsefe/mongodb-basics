const assert = require('assert');

const updateInterns = function(db, callback) {
    const collection = db.collection('myMovies');
    collection.updateOne(
        { movie: "The Banker"},
        {$set: {movie: "IT", year: "2019", rating: "7"}}, 
        function(err, updates) {
            assert.equal(err, null);
            console.log("Movie updated successfully");
            console.log(updates);
            callback(updates);
    });
};

module.exports = updateInterns;
var mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const createInterns = require('./interns');
const findInterns = require('./findinterns');
const updateInterns = require('./updateinterns');

var url = 'mongodb://localhost:27017/mydb';

const dbname = 'debbsefe';
const client = new mongoClient(url);

client.connect(function(err) {
    assert.equal(null, err);
    console.log('Database created by debbsefe!');
    
            const db = client.db(dbname);
                createInterns(db, function(){
                findInterns(db, function() {
                updateInterns(db, function(){   
            });                 
        });
    });
});

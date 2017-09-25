const mongoose = require('mongoose');

before('Start database', () => {
    mongoose.connect('mongodb://localhost/shop', { useMongoClient: true });
    mongoose.connection.once('open', () => done());
})

beforeEach('Clear database', (done) => {
    mongoose.connection.db.dropDatabase().then(() => done());
});

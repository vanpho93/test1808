const mongoose = require('mongoose');
const PostSchema = require('./Post');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    posts: [PostSchema]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;

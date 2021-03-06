var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
var userSchema = new Schema({
	name: String,
	password: String,
	admin: Boolean
});

module.exports = mongoose.model('User', userSchema);
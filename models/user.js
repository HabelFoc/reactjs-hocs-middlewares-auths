const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// define our modal
const userSchema = new Schema({
	username: {
		type: String
	},
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	company: {
		type: String
	}
});

// create the model class
const user = mongoose.model('user', userSchema); // model name & our schema

// export the model
module.exports = user;
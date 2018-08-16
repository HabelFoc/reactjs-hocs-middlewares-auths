const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// define our modal
const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	password: String
});

// create the modal class
const userModal = mongoose.modal('user', userSchema); // modal name & our schema

// export the modal
module.exports = userModal;
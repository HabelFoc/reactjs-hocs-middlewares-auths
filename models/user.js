const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Bcrypt = require('bcrypt');

// define our modal
const userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: true
	},
	company: {
		type: String
	},
	password: {
		type: String,
		required: true
	}
});


// On save Hook, Encrypt password,
// Before saving a model
// userSchema.pre('save', function(next){
// 	let { password } = this;
// 	const saltRounds = 10;

// 	// Generate salt,
// 	Bcrypt.genSalt(saltRounds, (err, salt) => {
// 		if(err) { return next(err) }

// 		// Start hashing
// 		Bcrypt.hash(password, salt, (err, hashedPassword) => {
// 			if(err) { return next(err) }

// 			password = hashedPassword;
// 			next();

// 		})

// 	})

// })

// create the model class
const user = mongoose.model('user', userSchema); // model name & our schema

// export the model
module.exports = user;
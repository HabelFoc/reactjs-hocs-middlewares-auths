const User = require('../models/user'); // get mongoose instance model
const Bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const config = require('../config/keys');

// Handle Add User Route
module.exports.AddUser = (req, res, next) => {

	// incoming user data
	const { username, email, company, password } = req.body;

	function tokenForUser(user){
		const timestamp = new Date().getTime();
		return jwt.encode({ sub: user._id, iat: timestamp }, config.jwtSecret);
	}

	// check if user exist,
	// response error if user exist
	User.findOne({ email }, (err, user) => {
		if(err){
			return next(err);
		}

		if(user){
			return res.json({ success: true, error: 'email already exist', msg: 'Email_Already_Exist' })
		}

		/* if user not exist, start saving user to database */

		// Ecrypt password
		const saltRounds = 10; // Default value
		Bcrypt.genSalt(saltRounds, function(err, salt){

			Bcrypt.hash(password, salt, function(err, hashedPassword){
				console.log(hashedPassword)
				// Start user data to database
				const newUser = new User({
					username: username,
					email: email,
					company: company,
					password: hashedPassword
				})


				// response to indicating user has successful stored on database
				newUser.save((err, user) => {
					if(err) { 
						return next(err) 
					}

					res.json({ success: true, msg: 'Sign_Up_Successfully', token: tokenForUser(user) });
				})		

			})

		})

	})

}
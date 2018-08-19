const User = require('../models/user');
const passportService = require('../services/passport');


// Handle Fetching Users
module.exports.FetchUsers = (req, res, next) => {

	// Gets All User 
	User.find({}, (err, users) => {

		if(err){
			return next(err);
		}


		if(users){
			res.send(users);
		}

	})

}
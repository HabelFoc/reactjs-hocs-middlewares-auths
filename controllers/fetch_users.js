const User = require('../models/user')


// Handle Fetching Users
module.exports.FetchUsers = (req, res, next) => {

	// Gets All User 
	User.find({}, (err, users) => {

		if(err){
			console.log(err);
			return next(err);
		}


		if(users){
			res.send(users);
		}

	})

}
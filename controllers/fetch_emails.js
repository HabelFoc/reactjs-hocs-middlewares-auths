const User = require('../models/user')


// Handle Fetching Users
module.exports.FetchEmails = (req, res, next) => {

	// Gets All User 
	User.find({}, (err, users) => {

		if(err){
			console.log(err);
			return next(err);
		}


		if(users){
			console.log(users)
			res.send(users);
		}

	})

}
const User = require('../models/user'); // get mongoose instance model


// Handle Add User Route
module.exports.AddUser = (req, res, next) => {

	// incoming user data
	const { username, email, company } = req.body;
	console.log(req.body)
	// check if user exist,
	// response error if user exist
	User.findOne({ email }, (err, user) => {
		if(err){
			console.log(err)
			return next(err);
		}

		if(user){
			return res.json({ success: true, error: 'email already exist', msg: 'email_already_exist' })
		}

		// if user not exist, save to database
		const newUser = new User({
			username: username,
			email: email,
			company: company
		})


		// response to indicating user has successful stored on database
		newUser.save((err, user) => {
			if(err) { 
				console.log(err)
				return next(err) 
			}

			console.log(user)
			res.json({ success: true, msg: 'user_saved'});
		})		


	})

	


}
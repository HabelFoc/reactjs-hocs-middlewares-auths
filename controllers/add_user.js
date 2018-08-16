const User = require('../models/user');


module.exports.AddUser = (req, res, next) => {

	// user data
	const { username, email, company } = req.body;

	// check if user exist,
	// response error if user exist
	User.findOne({ email }, (err, user) => {
		if(err){
			return next(err);
		}

		if(user){
			console.log('user found!',user);
			return res.json({ success: true, error: 'email already exist', msg: 'email already exist' })
		}

		// if user not exist, save to database
		const newUser = new User({
			username,
			email,
			company
		})


		// response to indicating user has successful stored on database
		newUser.save((err, user) => {
			if(err) { return next(err) }

			res.json({ success: true, msg: 'user saved'});
		})		


	})

	


}
const User = require('../models/user');


module.exports.DeleteUser = (req, res, next) => {

	// Get user id from url 
	console.log(req.params.userid)
	const userId = req.params.userid;

	// find on database
	User
	.findOneAndRemove({ _id: userId })
	.then((result) => {
		console.log(result);
		res.json({
			success: true,
			msg: 'successful_deleted_user'
		})
	});


}
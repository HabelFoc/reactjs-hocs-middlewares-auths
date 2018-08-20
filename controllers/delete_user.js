const User = require('../models/user');


module.exports.DeleteUser = (req, res, next) => {

	// Get user id from url 
	const userId = req.params.userid;

	// find on database
	User
	.findOneAndRemove({ _id: userId })
	.then((result) => {
		
		if(result){
			res.json({
				success: true,
				msg: 'Delete_User_Success'
			})
		}
	});


}
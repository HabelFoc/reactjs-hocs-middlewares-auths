const express = require('express');
const router = express.Router();
const AddUserController = require('../controllers/add_user');


	// @Route 	'/'
	// @desc 	Get all users
	router.get('/', (req, res) => {
		res.json({
			success:true,
			msg: 'api req success:getting users...'
		});
	});


	// @Route 	'/adduser'
	// @desc 	Adds user to database
	router.post('/adduser', AddUserController.AddUser);




module.exports = router;
const express = require('express');
const router = express.Router();
const AddUserController = require('../controllers/add_user');
const FetchUsersController = require('../controllers/fetch_users');
const DeleteUserController = require('../controllers/delete_user');


	// @Route 	'/'
	// @Desc 	Get all users
	router.get('/', (req, res) => {
		res.json({
			success:true,
			msg: 'api req success:getting users...'
		});
	});


	// @Route 	'/adduser'
	// @Desc 	Adds user to database
	router.post('/adduser', AddUserController.AddUser);


	// @Route 	'/emails'
	// @Desc 	Get all user data
	router.get('/users', FetchUsersController.FetchUsers);


	// @Route 	'/deleteuser/:userid'
	// @Desc 	Delete single user from database
	router.delete('/deleteuser/:userid', DeleteUserController.DeleteUser);




module.exports = router;
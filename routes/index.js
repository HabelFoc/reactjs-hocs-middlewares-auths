const express = require('express');
const router = express.Router();
const AddUserController = require('../controllers/add_user');
const FetchUsersController = require('../controllers/fetch_users');
const DeleteUserController = require('../controllers/delete_user');
const passport = require('passport');
const jwt = require('jwt-simple');
const config = require('../config/keys');

// Encode for JWT Token
function tokenForUser(user){
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user._id, iat: timestamp }, config.jwtSecret);
}

// JWT Auth
const requireAuth = passport.authenticate('jwt', { session: false });

// Local Auth
const requireSignIn = passport.authenticate('local', { session: false });


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


	// @Route 	'/signin'
	// @Desc 	SignIn User to get authorization
	router.post('/signin', requireSignIn, (req, res, next) => {

		res.json({ token: tokenForUser(req.user), msg: 'Successfully_Sign_In' });

	});


module.exports = router;
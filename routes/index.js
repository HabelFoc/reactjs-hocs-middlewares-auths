const express = require('express');
const router = express.Router();


	// @Route 	'/'
	// @desc 	Get all users
	router.get('/', (req, res) => {
		res.json({
			success:true,
			msg: 'api req success:getting users...'
		});
	});




module.exports = router;
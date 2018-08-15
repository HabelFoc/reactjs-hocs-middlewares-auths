const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

/* All Middlewares Stuff Setup */
// logging framework middlewares (debugging purposes)
app.use(morgan('combine'));
// middlwares for handling/parses incoming json payload
app.use(express.json());


/* Setup static file */
app.use(express.static(path.join(__dirname, '/client/dist')));


/* Routing */
// @GET 	'/'
// @desc	Serve Home Page
app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})


app.post('/useradd', (req, res) => {
	console.log(req.body)
	res.json({success:true});
})

app.listen(3030, () => console.log('listening on port 3030'));
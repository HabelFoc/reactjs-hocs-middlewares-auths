const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');



// Connect MongoDB
const db = require('./config/keys').mongoURI;
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log('mongodb connected...'))
.catch(err => console.log('Error: MongoDB: ',err));


/* All Middlewares Stuff Setup */
// allow CORS
const whitelist = ['http://localhost:8080', 'http://example2.com']
const corsOptionsDelegate = function (req, callback) {

	const domainAllowed = /^(http){1}\:{1}(\/\/){1}(localhost){1}\:{1}(8080){1}\/*/g;

	if (whitelist.indexOf(req.header('Origin')) !== -1) {
		callback(null, true);
	}else{
		if(req.header('Referer').search(domainAllowed) !== -1){
			callback(null, true);
		}else{
			callback(new Error('Origin Not Allowed'))
		}
	} 
}
// logging framework middlewares (debugging purposes)
app.use(morgan('tiny'));
// middlwares for handling/parses incoming json payload
app.use(express.json());


/* Routing */
app.use('/api', cors(corsOptionsDelegate), require('./routes'));

// if in production use this routing
if(process.env.NODE === 'production'){
	/* Setup static file */
	app.use(express.static(path.join(__dirname, '/client/dist')));

	app.get('*', (req,res) => {
		res.sendFile(path.join(__dirname, '/client/dist/index.html'))
	})
}


// PORT
app.listen(process.env.PORT || 3030, () => console.log('listening on port 3030'));
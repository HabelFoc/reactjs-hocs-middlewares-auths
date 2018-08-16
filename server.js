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
const corsOptions = {
	origin: 'http://localhost:3030',
	optionsSuccessStatus: 200
};
app.use(function(req, res, next) {
  cors(corsOptions);
  next();
});
// logging framework middlewares (debugging purposes)
app.use(morgan('tiny'));
// middlwares for handling/parses incoming json payload
app.use(express.json());




/* Routing */
app.use('/api/users', require('./routes'));

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
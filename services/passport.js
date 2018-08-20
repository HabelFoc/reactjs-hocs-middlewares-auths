const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const User = require('../models/user');
const Config = require('../config/keys');
const Bcrypt = require('bcrypt');


// Create Local Strategy
const localOptions = { usernameField: 'email' }; // Overwrite default 'username' field to 'email'
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {


	// Verify email & password, 
	// then call 'done' with a user object,
	// Otherwise call 'done' with 'false'
	User.findOne({ email }, function(err, user){

		if(err) { return done(err); }
		if(!user) { return done(null, false); }

		if(user){
			// Start comparing hashed password from db & current inputed password
			const hashedPassword = user.password;
			Bcrypt.compare(password, hashedPassword, (err, isMatch) => {

				if(err) { return done(err); }
				if(isMatch === true){
					return done(null, user);
				}else{
					return done(null, false);
				}

			}); // End of 'compare()'
		}

	}); // End of 'find()'


}); 


// Setup JWT Strategy options
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
	secretOrKey: Config.jwtSecret
};
// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {

	// See if user ID in the payload exist in our database,
	// If so, call 'done' with a user object
	// If not, call 'done' without a user object
	User.find({ _id: payload.sub }, (err, user) => {

		// If error occurred
		if(err) { return done(err, false); }

		// If user exist
		if(user){
			return done(null, user);
		}else{
			return done(null, false);
		}

	}); // End of 'find()'


}); 


// Tell Passport to Use the Strategy
passport.use(jwtLogin);
passport.use(localLogin);

import { 
	AUTH_USER, 
	UNAUTH_USER, 
	USER_SIGN_IN, 
	USER_SIGN_OUT, 
	FETCH_USERS, 
	ADD_USER, 
	DELETE_USER,
	IS_USER_AUTH
} from './types';
import axios from 'axios';


// #HELPER_FUNCTION
// axios headers
function withHeaders(){
	const token = localStorage.getItem('token');

	return {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};
}


// Check User Logged Status
// If token available, make user logged in 
export const checkUserLoggedStatus = (callback) => {

	console.log(withHeaders())

	axios
	.get('/api/isauthenticated', withHeaders())
	.then(res => {

		// log response object
		console.log(res.data);

		// logged in user 
		if(res.data.success === true){
			callback(res.data);
		}

		return res;
	})
	.catch(err => {
		console.log('Error: ',err);
		callback('Required_Signing_In')
	})

	return {
		type: IS_USER_AUTH
	};
}


export const userSignOut = (callback) => {

	const signOutUserResponse = axios
	.get('/api/signout')
	.then(res => {
		// log response object
		console.log(res.data)

		// remove token from localStorage
		localStorage.removeItem('token');

		// callback for, change user auth status to 'true' (authenticatedUser())
		// then, redirect to home page /w url message
		callback(res.data.msg);

		// return response object
		return res;
	})

	return {
		type: USER_SIGN_OUT
	};
}

// Signing User to App
export const userSignIn = (user, callback) => {

	const sigInUserResponse = axios
	.post('/api/signin', { ...user })
	.then(res => {
		// log response message
		console.log(res.data);

		// store token on localStorage
		localStorage.setItem('token', res.data.token);

		// callback for, change user auth status to 'true' (authenticatedUser())
		// then, redirect to home page /w url message
		callback(res.data.msg);

		// return response object
		// return res;
	})

	return {
		type: USER_SIGN_IN
	};
}


// Deleting Single User from Database
export const deleteUser = (userId, callback) => {

	const deleteUserResponse = axios
	.delete(`/api/deleteuser/${userId}`)
	.then(res => {
		console.log(res.data)
		callback(res.data.msg);
	})

	return {
		type: DELETE_USER,
		payload: deleteUserResponse
	}
}


// Adding New User
export const signUp = (user, callback) => {

	// start storing user in database
	const userResponse = axios
	.post('/api/adduser', { ...user })
	.then(res => { 
		// log response object
		console.log(res.data);

		// store token on localStorage
		localStorage.setItem('token', res.data.token)

		// redirect to home page
		callback(res.data.msg); 
		
		// return response object
		return res;
	});

	return {
		type: ADD_USER
	}
}


// Authenticated User
export const authenticatedUser = () => {

	console.log('authenticatedUser action trigger...')

	return {
		type: AUTH_USER,
		payload: true
	};
}


// UnAuthenticated User
export const unAuthenticatedUser = () => {

	console.log('unAuthenticatedUser action trigger...')

	return {
		type: UNAUTH_USER,
		payload: false
	}
}


// Fetching Emails
export const fetchUsers = () => {

	const response = axios.get('/api/users', withHeaders())

	return {
		type: FETCH_USERS,
		payload: response
	};
}
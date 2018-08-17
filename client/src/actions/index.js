import { TOGGLE_AUTH, FETCH_USERS, ADD_USER } from './types';
import axios from 'axios';


// Adding New User
export const addUser = (user, callback) => {

	// start storing user in database
	const userResponse = axios
	.post('http://localhost:3030/api/adduser', { ...user })
	.then(res => { 
		callback(res.data.msg); 
		console.log(res.data);
	});

	return {
		type: ADD_USER,
		payload: userResponse
	}
}


// Toggle Authentication
export const toggleAuthentication = (authState) => {
	return {
		type: TOGGLE_AUTH,
		payload: authState
	}
}


// Fetching Emails
export const fetchUsers = (callActionAgain) => {

	
	// const response = axios.get('https://jsonplaceholder.typicode.com/users')
	const response = axios.get('http://localhost:3030/api/users')

	return {
		type: FETCH_USERS,
		payload: response
	};
}
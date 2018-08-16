import { TOGGLE_AUTH, FETCH_EMAILS, ADD_USER } from './types';
import axios from 'axios';


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

export const toggleAuthentication = (authState) => {
	return {
		type: TOGGLE_AUTH,
		payload: authState
	}
}


// let externalEmails = null;

export const fetchEmails = (callActionAgain) => {

	
	const response = axios.get('https://jsonplaceholder.typicode.com/users')
	
	// axios
	// .get('https://jsonplaceholder.typicode.com/users')
	// .then(res => {
		
	// 	externalEmails = res.data;
	// 	callActionAgain()
	// 	console.log(externalEmails)
	// })
	// .catch(err => console.log(err))


	// return {
	// 	type: FETCH_EMAILS,
	// 	payload: (externalEmails !== null) ? externalEmails:dummyEmails
	// };

	return {
		type: FETCH_EMAILS,
		payload: response
	};
}
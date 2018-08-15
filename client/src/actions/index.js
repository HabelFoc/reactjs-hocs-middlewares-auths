import { TOGGLE_AUTH, FETCH_EMAILS } from './types';
import axios from 'axios';

export const toggleAuthentication = (authState) => {
	return {
		type: TOGGLE_AUTH,
		payload: authState
	}
}


const dummyEmails = [
	{
		id:1,	
		username: 'HabelFoc',
		company: 'FocDev.com',
		email: 'focdev@gmail.com'
	},
	{
		id:2,
		username: 'Steve vie',
		company: 'Micro.net',
		email: 'micronet@gmail.com'
	}
]

//

let externalEmails = null;

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
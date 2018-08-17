import { FETCH_USERS } from '../actions/types';

const dummyEmails = [
	{
		_id:1,	
		username: 'HabelFoc',
		company: 'FocDev.com',
		email: 'focdev@gmail.com'
	},
	{
		_id:2,
		username: 'Steve vie',
		company: 'Micro.net',
		email: 'micronet@gmail.com'
	}
]

export default (state = dummyEmails, action) => {
	switch(action.type){
		case FETCH_USERS:
			return [ ...action.payload.data ];
		default:
			return state;
	}
}
import { FETCH_EMAILS } from '../actions/types';

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

export default (state = dummyEmails, action) => {
	switch(action.type){
		case FETCH_EMAILS:
			return [ ...action.payload.data ];
		default:
			return state;
	}
}
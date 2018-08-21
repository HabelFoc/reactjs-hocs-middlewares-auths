import { AUTH_USER, UNAUTH_USER } from '../actions/types';

const initialState = {
	authenticated: false
};

export default (state = initialState, action) => {
	switch(action.type){
		case AUTH_USER:
			return { ...state, authenticated: action.payload };
		case UNAUTH_USER:
			return { ...state, authenticated: action.payload };
		default:
			return state;
	}
}
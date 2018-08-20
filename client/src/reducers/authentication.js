import { TOGGLE_AUTH, SIGN_IN_USER } from '../actions/types';

const initialState = {
	authState: false,
	token: ''
}

export default (state = initialState, action) => {
	switch(action.type){
		case TOGGLE_AUTH:
			return { ...state, authState: action.payload };
		case SIGN_IN_USER:
			return { ...state, token: action.payload.data.token };
		default:
			return state;
	}
}
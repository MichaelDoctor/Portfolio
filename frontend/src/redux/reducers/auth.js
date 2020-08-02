import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	AUTHENTICATED
} from '../actions/types';

const initialState = {
	token           : localStorage.getItem('token'),
	isAuthenticated : null,
	isLoading       : false,
	user            : null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading : true
			};
		case USER_LOADED:
			return {
				...state,
				isAuthenticated : true,
				isLoading       : false,
				user            : action.payload
			};

		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			localStorage.setItem('token', action.payload.access_token);
			return {
				...state,
				...action.payload,
				isAuthenticated : true,
				isLoading       : false
			};
		case AUTHENTICATED:
			return {
				...state,
				isAuthenticated : true,
				isLoading       : false,
				user            : action.payload
			};
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				token           : null,
				isAuthenticated : false,
				isLoading       : false,
				user            : null
			};

		default:
			return state;
	}
};

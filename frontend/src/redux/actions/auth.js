import {
	AUTH_ERROR,
	USER_LOADING,
	USER_LOADED,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	REGISTER_FAIL,
	REGISTER_SUCCESS
} from './types';
import { errorMessage } from './messages';
import axios from 'axios';

// const baseUrl = 'http://0.0.0.0:5000';
const baseUrl = 'https://michael-doctor.me';

//Register
export const register = ({ username, email, password1, password2, csrfmiddlewaretoken }) => (dispatch) => {
	const config = {
		headers : {
			'Content-Type' : 'application/json',
			'X-CSRFTOKEN'  : csrfmiddlewaretoken
		}
	};
	console.log(username);

	const body = JSON.stringify({ username, password1, password2, email });

	axios
		.post(`${baseUrl}/auth/register/`, body, config)
		.then((res) => {
			dispatch({
				type    : REGISTER_SUCCESS,
				payload : res.data
			});
		})
		.catch((err) => {
			dispatch(errorMessage(err.response.data, err.response.status));
			dispatch({ type: REGISTER_FAIL });
		});
};

//Login
export const login = ({ email, password, csrfmiddlewaretoken }) => (dispatch) => {
	const config = {
		headers : {
			'Content-Type' : 'application/json',
			'X-CSRFTOKEN'  : csrfmiddlewaretoken
		}
	};

	const body = JSON.stringify({ email, password });

	axios
		.post(`${baseUrl}/auth/login/`, body, config)
		.then((res) => {
			dispatch({
				type    : LOGIN_SUCCESS,
				payload : res.data
			});
		})
		.catch((err) => {
			dispatch(errorMessage(err.response.data, err.response.status));
			dispatch({ type: LOGIN_FAIL });
		});
};

//logout
export const logout = ({ csrfmiddlewaretoken }) => (dispatch, getState) => {
	axios
		.post(`${baseUrl}/auth/logout/`, tokenConfig(getState, csrfmiddlewaretoken))
		.then((res) => {
			dispatch({
				type : LOGOUT
			});
		})
		.catch((err) => {
			dispatch(errorMessage(err.response.data, err.response.status));
		});
};

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
	dispatch({ type: USER_LOADING });
	axios
		.get(`${baseUrl}/auth/user/`, null, tokenConfig(getState, ''))
		.then((res) => {
			dispatch({
				type    : USER_LOADED,
				payload : res.data
			});
		})
		.catch((err) => {
			dispatch(errorMessage(err.response.data, err.response.status));
			dispatch({ type: AUTH_ERROR });
		});
};

//token config
export const tokenConfig = (getState, csrfmiddlewaretoken) => {
	let config = {};
	if (csrfmiddlewaretoken === '') {
		config = {
			headers : {
				'Content-Type' : 'application/json'
			}
		};
	}
	else {
		config = {
			headers : {
				'Content-Type' : 'application/json',
				'X-CSRFTOKEN'  : csrfmiddlewaretoken
			}
		};
	}

	const token = getState().auth.token;

	if (token) {
		config.headers['Authorization'] = `Token ${token}`;
	}
	return config;
};

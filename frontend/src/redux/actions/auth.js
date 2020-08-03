import {
	AUTH_ERROR,
	USER_LOADING,
	USER_LOADED,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	AUTHENTICATED
} from './types';
import { errorMessage } from './messages';
import axios from 'axios';
import { setErrors, setAlert } from './alerts';

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

	const body = JSON.stringify({ username, password1, password2, email });

	axios
		.post(`${baseUrl}/auth/register/`, body, config)
		.then((res) => {
			dispatch({
				type    : REGISTER_SUCCESS,
				payload : res.data
			});
			dispatch(setAlert('Successfully Registered', 'success'));
		})
		.catch((err) => {
			dispatch(setErrors(err.response.data));
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
			dispatch(setErrors(err.response.data));
			dispatch(errorMessage(err.response.data, err.response.status));
			dispatch({ type: LOGIN_FAIL });
		});
};

export const authenticated = () => (dispatch) => {
	axios.get(`${baseUrl}/auth/current/`).then((res) => {
		if (res.data.pk !== 'None') {
			dispatch({
				type    : AUTHENTICATED,
				payload : res.data
			});
		}
		else {
			dispatch({ type: AUTH_ERROR });
		}
	});
};

//logout
export const logout = ({ csrfmiddlewaretoken }) => (dispatch) => {
	const config = {
		headers : {
			'Content-Type' : 'application/json',
			'X-CSRFTOKEN'  : csrfmiddlewaretoken
		}
	};
	axios
		.post(`${baseUrl}/auth/logout/`, null, config)
		.then((res) => {
			dispatch({
				type : LOGOUT
			});
		})
		.catch((err) => {
			dispatch(setErrors(err.response.data));
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
			dispatch(setErrors(err.response.data));
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

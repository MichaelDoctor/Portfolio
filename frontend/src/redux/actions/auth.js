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

//Register
export const register = ({ username, email, password1, password2, csrfmiddlewaretoken }) => (dispatch) => {
	const config = {
		headers : {
			'Content-Type' : 'application/json',
			'X-CSRFTOKEN'  : csrfmiddlewaretoken
		}
	};

	axios
		.post('http://0.0.0.0:5000/auth/register/', { username, password1, password2, email }, config)
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

//logout

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
	dispatch({ type: USER_LOADING });
	//add the rest later
};

//token config
export const tokenConfig = (getState) => {
	const token = getState().auth.token;

	const config = {
		headers : {
			'Content-Type' : 'application/json'
		}
	};
	if (token) {
		config.headers['Authorization'] = `Token ${token}`;
	}
	return config;
};

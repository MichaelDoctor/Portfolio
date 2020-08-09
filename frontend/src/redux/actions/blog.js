import { CREATE_POST, CLEAR_POST } from './types';
import { errorMessage } from './messages';
import axios from 'axios';
import { setErrors, setAlert } from './alerts';

// const baseUrl = 'http://0.0.0.0:5000';
const baseUrl = 'https://michael-doctor.me';

//Create post
export const createPost = ({ formData, csrfmiddlewaretoken }) => (dispatch) => {
	const config = {
		headers : {
			'Content-Type' : 'multipart/form-data',
			'X-CSRFTOKEN'  : csrfmiddlewaretoken
		}
	};

	axios
		.post(`${baseUrl}/api/blogs/create/post/`, formData, config)
		.then((res) => {
			dispatch(setAlert('Post Successfully Created', 'success'));
			dispatch({
				type    : CREATE_POST,
				payload : res.data
			});
		})
		.catch((err) => {
			dispatch(setAlert('Error Creating Post', 'danger'));
		});
};

//Create comment
export const createComment = ({ formData, csrfmiddlewaretoken, slug }) => (dispatch) => {
	const config = {
		headers : {
			'Content-Type' : 'multipart/form-date',
			'X-CSRFTOKEN'  : csrfmiddlewaretoken
		}
	};

	axios
		.post(`${baseUrl}/api/blogs/create/comment/`, formData, config)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			dispatch(setAlert('Error creating comment', 'danger'));
			dispatch(setErrors(err.response.data));
			dispatch(errorMessage(err.response.data, err.response.status));
		});
};

// For redirect
export const postCreated = () => (dispatch) => {
	dispatch({
		type : CLEAR_POST
	});
};

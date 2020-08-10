import { CREATE_POST, CLEAR_POST, CREATE_COMMENT } from './types';
import axios from 'axios';
import { setAlert } from './alerts';

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
export const createComment = ({ formData, csrfmiddlewaretoken }) => (dispatch) => {
	const config = {
		headers : {
			'Content-Type' : 'multipart/form-data',
			'X-CSRFTOKEN'  : csrfmiddlewaretoken
		}
	};

	axios
		.post(`${baseUrl}/api/blogs/create/comment/`, formData, config)
		.then((res) => {
			dispatch(setAlert('Comment Successfully Created', 'success'));
			dispatch({
				type    : CREATE_COMMENT,
				payload : res.data
			});
		})
		.catch((err) => {
			dispatch(setAlert('Error creating comment', 'danger'));
		});
};

// For redirect
export const postCreated = () => (dispatch) => {
	dispatch({
		type : CLEAR_POST
	});
};

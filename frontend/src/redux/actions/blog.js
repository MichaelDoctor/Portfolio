import { CREATE_POST, GET_POST, GET_POSTS } from './types';
import { errorMessage } from './messages';
import axios from 'axios';
import { setErrors, setAlert } from './alerts';

// const baseUrl = 'http://0.0.0.0:5000';
const baseUrl = 'https://michael-doctor.me';

// List of posts
export const getPostList = () => (dispatch) => {
	axios.get(`${baseUrl}/api/blogs/`).then((res) => {
		console.log(res);
	});
};

// Detail post view
export const getPost = (slug) => (dispatch) => {
	axios.get(`${baseUrl}/api/blogs/blog/${slug}`).then((res) => {
		console.log(res);
	});
};

//Create post
export const createPost = ({ formData, csrfmiddlewaretoken }) => (dispatch) => {
	const config = {
		headers : {
			'Content-Type' : 'multipart/form-date',
			'X-CSRFTOKEN'  : csrfmiddlewaretoken
		}
	};

	axios
		.post(`${baseUrl}/api/blogs/create/post/`, formData, config)
		.then((res) => {
			dispatch(setAlert('Post Successfully Created', 'success'));
		})
		.catch((err) => {
			dispatch(setErrors(err.response.data));
			dispatch(errorMessage(err.response.data, err.response.status));
		});
};

//Create comment
export const createComment = ({ formData, csrfmiddlewaretoken }) => (dispatch) => {
	const config = {
		headers : {
			'Content-Type' : 'multipart/form-date',
			'X-CSRFTOKEN'  : csrfmiddlewaretoken
		}
	};

	axios
		.post(`${baseUrl}/api/blogs/create/comment/`, formData, config)
		.then((res) => {
			dispatch(setAlert('Comment Successfully Created', 'success'));
		})
		.catch((err) => {
			dispatch(setErrors(err.response.data));
			dispatch(errorMessage(err.response.data, err.response.status));
		});
};

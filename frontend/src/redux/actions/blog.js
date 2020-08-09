import { CREATE_POST, GET_POST, GET_POSTS } from './types';
import { errorMessage } from './messages';
import axios from 'axios';
import { setErrors, setAlert } from './alerts';

// const baseUrl = 'http://0.0.0.0:5000';
const baseUrl = 'https://michael-doctor.me';

// List of posts
export const getPostList = () => (dispatch) => {
	axios.get(`${baseUrl}/api/blogs/`).then((res) => {
		let postIds = [];
		let userIds = [];
		res.data.forEach((post) => {
			postIds.push(post.id);
			userIds.push(post.author);
		});
		dispatch({
			type    : GET_POSTS,
			payload : res.data,
			users   : userIds,
			posts   : postIds
		});
	});
};

// Detail post view
export const getPost = (slug) => (dispatch) => {
	axios
		.get(`${baseUrl}/api/blogs/blog/${slug}`)
		.then((res) => {
			dispatch({
				type    : GET_POST,
				payload : res.data
			});
		})
		.catch((err) => {
			dispatch(setAlert('Post does not exist', 'danger'));
		});
};

// get User
export const getUser = (user) => (dispatch) => {
	axios.get(`${baseUrl}/auth/user/${user}/`).then((res) => {
		return res.data.username;
	});
};

// get number of comments
export const getNumComments = (blog) => (dispatch) => {
	axios.get(`${baseUrl}/api/blogs/comment/${blog}/`).then((res) => {
		return res.data.length;
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
			dispatch({
				type    : CREATE_POST,
				payload : res.data
			});
		})
		.catch((err) => {
			dispatch(setAlert('Error Creating Post', 'danger'));
			dispatch(setErrors(err.response.data));
			dispatch(errorMessage(err.response.data, err.response.status));
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
			getPostList(slug);
		})
		.catch((err) => {
			dispatch(setAlert('Error creating comment', 'danger'));
			dispatch(setErrors(err.response.data));
			dispatch(errorMessage(err.response.data, err.response.status));
		});
};

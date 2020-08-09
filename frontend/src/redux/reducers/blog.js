import { GET_POST, GET_POSTS, CREATE_POST, GET_USERS, GET_COMMENTS } from '../actions/types';

const initialState = {
	postList    : null,
	post        : null,
	comments    : [],
	users       : [],
	commentLens : []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				postList : action.payload,
				users    : action.users,
				postIds  : action.posts
			};
		case GET_USERS:
			return {
				...state,
				users : action.payload
			};
		case GET_POST:
			return {
				...state,
				post     : action.payload.post,
				comments : action.payload.comments
			};
		case CREATE_POST:
			return {
				...state,
				post     : action.payload,
				comments : []
			};
		default:
			return state;
	}
};

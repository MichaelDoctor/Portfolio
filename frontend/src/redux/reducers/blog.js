import { GET_POST, GET_POSTS, CREATE_POST } from '../actions/types';

const initialState = {
	postList : null,
	post     : null,
	comments : []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				postList : action.payload,
				post     : null,
				comments : []
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

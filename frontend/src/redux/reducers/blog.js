import { CLEAR_POST, CREATE_POST } from '../actions/types';

const initialState = {
	postList : null,
	post     : null,
	comments : []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_POST:
			return {
				...state,
				post     : action.payload,
				comments : []
			};
		case CLEAR_POST:
		default:
			return state;
	}
};

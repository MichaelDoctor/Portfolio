import { CLEAR_POST, CREATE_POST, CREATE_COMMENT } from '../actions/types';

const initialState = {
	postList : null,
	post     : null,
	comment  : null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_POST:
			return {
				...state,
				post    : action.payload,
				comment : null
			};
		case CREATE_COMMENT:
			return {
				...state,
				comment : action.payload
			};
		case CLEAR_POST:
			return initialState;
		default:
			return state;
	}
};

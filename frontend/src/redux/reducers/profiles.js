import { GET_PROFILES, DELETE_PROFILE, ADD_PROFILE, CLEAR_PROFILES } from '../actions/types';

const initialState = {
	profiles : []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PROFILES:
			return {
				...state,
				profiles : action.payload
			};
		case CLEAR_PROFILES:
			return {
				...state,
				profiles : []
			};
		default:
			return state;
	}
};

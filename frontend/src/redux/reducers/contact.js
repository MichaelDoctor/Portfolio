import { CONTACT_SUCCESS, CONTACT_FAIL } from '../actions/types';

const initialState = {
	isSent : false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CONTACT_SUCCESS:
			return {
				isSent : true
			};
		case CONTACT_FAIL:
			return {
				isSent : false
			};

		default:
			return state;
	}
};

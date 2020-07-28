import { combineReducers } from 'redux';
import auth from './auth';
import messages from './messages';
import errors from './errors';
import alerts from './alerts';

export default combineReducers({
	alerts,
	auth,
	messages,
	errors
});

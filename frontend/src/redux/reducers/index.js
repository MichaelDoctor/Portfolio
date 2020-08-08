import { combineReducers } from 'redux';
import auth from './auth';
import messages from './messages';
import errors from './errors';
import alerts from './alerts';
import contact from './contact';
import blog from './blog';

export default combineReducers({
	alerts,
	auth,
	blog,
	contact,
	errors,
	messages
});

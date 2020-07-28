import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERTS } from './types';

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
	const id = uuidv4();
	dispatch({
		type    : SET_ALERT,
		payload : { msg, alertType, id }
	});

	setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export const setErrors = (msgs) => (dispatch) => {
	const alertType = 'danger';
	const timeout = 5000;
	const errors = Object.keys(msgs);
	errors.forEach((error) => {
		const msg = msgs[error][0];
		const id = uuidv4();

		dispatch({
			type    : SET_ALERT,
			payload : { msg, alertType, id }
		});

		setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
	});
};

export const clearAlerts = () => (dispatch) => {
	setTimeout(() => dispatch({ type: CLEAR_ALERTS }), 5000);
};

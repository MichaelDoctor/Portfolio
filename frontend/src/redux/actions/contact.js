import { CONTACT_SUCCESS, CONTACT_FAIL } from './types';
import { errorMessage } from './messages';
import axios from 'axios';
import { setAlert } from './alerts';

// const baseUrl = 'http://0.0.0.0:5000';
const baseUrl = 'https://michael-doctor.me';

export const contact = ({ name, email, subject, message, csrfmiddlewaretoken }) => (dispatch) => {
	const config = {
		headers : {
			'Content-Type' : 'application/json',
			'X-CSRFTOKEN'  : csrfmiddlewaretoken
		}
	};

	const body = JSON.stringify({ name, email, subject, message });

	axios
		.post(`${baseUrl}/contact/`, body, config)
		.then((res) => {
			dispatch({
				type : CONTACT_SUCCESS
			});
			dispatch(setAlert(res.data.msg, 'success'));
		})
		.catch((err) => {
			dispatch({ type: CONTACT_FAIL });
			dispatch(setAlert(err.response.statusText, 'danger'));
			dispatch(errorMessage(err.response.statusText, err.response.status));
		});
};

export const resetSent = () => (dispatch) => {
	dispatch({ type: CONTACT_FAIL });
};

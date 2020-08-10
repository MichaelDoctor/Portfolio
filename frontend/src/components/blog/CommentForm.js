import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DjangoCSRFToken from 'django-react-csrftoken';
import { createComment } from '../../redux/actions/blog';
import { setAlert } from '../../redux/actions/alerts';

const CommentForm = ({ auth: { isAuthenticated, user }, id, createComment }) => {
	const [ inputs, setInputs ] = useState({
		blog                : id,
		author              : '',
		content             : '',
		csrfmiddlewaretoken : ''
	});
	useEffect(() => {
		setInputs({ csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value });
	}, []);
	const handleChange = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputs.content) {
			setAlert('Comment required', 'danger');
		}
		else if (!user) {
			setAlert('Login required', 'danger');
		}
		else {
			setInputs({
				...inputs,
				author : user.pk
			});
			const { csrfmiddlewaretoken } = inputs;

			let formData = new FormData();
			formData.append('blog', inputs.blog);
			formData.append('author', inputs.author);
			formData.append('content', inputs.content);
			createComment({ formData, csrfmiddlewaretoken });
		}
	};
	return (
		<div id="comment-form">
			<h3 className="main-title">Leave a comment</h3>
			<hr />
			<form className="form-horizontal">
				<DjangoCSRFToken />
				<div className="form-group">
					<div className="col-sm-12">
						{isAuthenticated ? (
							<input
								type="text"
								className="form-control"
								placeholder="Comment"
								onChange={(e) => handleChange(e)}
								name="content"
								required
							/>
						) : (
							<input
								type="text"
								className="form-control"
								placeholder="Login to leave a comment"
								disabled
								onChange={(e) => handleChange(e)}
								name="content"
								required
							/>
						)}
					</div>
				</div>

				{isAuthenticated ? (
					<button onClick={(e) => handleSubmit(e)} className="btn btn-primary btn-outlined">
						Comment
					</button>
				) : (
					<a className="btn btn-primary btn-outlined disabled"> Comment</a>
				)}
			</form>
		</div>
	);
};

CommentForm.propTypes = {
	auth          : PropTypes.object.isRequired,
	createComment : PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { createComment })(CommentForm);

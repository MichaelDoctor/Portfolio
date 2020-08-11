import React, { useState, useEffect } from 'react';
import DjangoCSRFToken from 'django-react-csrftoken';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../../redux/actions/blog';
import { setAlert } from '../../redux/actions/alerts';

const Reply = ({ id, blog_id, createComment, setAlert, auth }) => {
	const [ inputs, setInputs ] = useState({
		blog                : '',
		author              : '',
		content             : '',
		csrfmiddlewaretoken : '',
		parent              : ''
	});
	useEffect(
		() => {
			if (auth.isAuthenticated) {
				setInputs({
					...inputs,
					author              : auth.user.pk,
					csrfmiddlewaretoken : document.getElementsByName('csrfmiddlewaretoken')[0].value,
					blog                : blog_id,
					parent              : id
				});
			}
		},
		[ id, blog_id, auth ]
	);
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
		else {
			const { csrfmiddlewaretoken } = inputs;

			let formData = new FormData();
			formData.append('blog', inputs.blog);
			formData.append('author', inputs.author);
			formData.append('content', inputs.content);
			formData.append('parent', inputs.parent);
			createComment({ formData, csrfmiddlewaretoken });
		}
	};
	return (
		<div>
			<button
				className="pull-right btn btn-primary btn-outlined"
				data-toggle="collapse"
				data-target={`#reply_field${id}`}
				aria-expanded="false"
				aria-controls={`reply_field${id}`}
			>
				Reply
			</button>
			<form class="collapse" id={`reply_field${id}`}>
				<DjangoCSRFToken />
				<div className="col-sm-6">
					{auth.isAuthenticated ? (
						<input
							type="text"
							className="form-control"
							placeholder="Comment"
							name="content"
							onChange={(e) => handleChange(e)}
							required
						/>
					) : (
						<input
							type="text"
							className="form-control"
							placeholder="Login to leave a comment"
							disabled
							name="content"
							required
						/>
					)}
				</div>
				<div className="col-sm-4">
					{auth.isAuthenticated ? (
						<button className="btn btn-primary btn-outlined" onClick={(e) => handleSubmit(e)}>
							Submit
						</button>
					) : (
						<a className="btn btn-primary btn-outlined disabled">Submit</a>
					)}
				</div>
			</form>
		</div>
	);
};

Reply.propTypes = {
	createComment : PropTypes.func.isRequired,
	auth          : PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth : state.auth
});

export default connect(mapStateToProps, { createComment, setAlert })(Reply);

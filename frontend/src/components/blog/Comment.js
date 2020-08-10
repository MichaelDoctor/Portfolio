import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import DjangoCSRFToken from 'django-react-csrftoken';

const Comment = ({ children, isAuthenticated, comment, id, comments }) => {
	const [ username, setUsername ] = useState('');
	const [ date, setDate ] = useState(new Date());
	useEffect(
		() => {
			axios
				.get(`https://michael-doctor.me/auth/user/${comment.author_id}/`)
				.then((res) => {
					return res.data;
				})
				.then((result) => {
					setUsername(result.username);
				});
			setDate(new Date(comment.date.split('T')[0]));
		},
		[ comment.author_id, comment.date ]
	);
	const replyElements = () => {
		return comments.map(
			(com) => com.parent_id === id && <Comment id={com.id} comment={com} key={com.id} comments={comments} />
		);
	};
	return (
		<div class="media comment" id={id}>
			<div class="pull-left">
				<img class="avatar img-thumbnail comment-avatar" src="http://placehold.it/400x400" alt="User avatar" />
			</div>
			<div class="media-body">
				<div class="well">
					<div class="media-heading">
						<strong>{username}</strong>&nbsp; <small>{date.toDateString()}</small>
					</div>
					<p>{comment.content}</p>
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
							{isAuthenticated ? (
								<input
									type="text"
									className="form-control"
									placeholder="Comment"
									name="content"
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
							{isAuthenticated ? (
								<button className="btn btn-primary btn-outlined">Submit</button>
							) : (
								<a className="btn btn-primary btn-outlined disabled">Submit</a>
							)}
						</div>
					</form>
				</div>

				{replyElements()}
				{children}
			</div>
		</div>
	);
};

Comment.propTypes = {
	isAuthenticated : PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated : state.auth.isAuthenticated
});
export default connect(mapStateToProps)(Comment);

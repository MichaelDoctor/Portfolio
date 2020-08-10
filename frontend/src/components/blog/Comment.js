import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

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
					<a
						className={
							isAuthenticated ? (
								'pull-right btn btn-primary btn-outlined'
							) : (
								'pull-right btn btn-primary btn-outlined disabled'
							)
						}
						href="#"
					>
						Reply
					</a>
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

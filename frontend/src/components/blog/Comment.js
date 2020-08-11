import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Reply from './Reply';

const Comment = ({ children, comment, id, comments, blog_id }) => {
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
				<img
					class="avatar img-thumbnail comment-avatar"
					src="https://res.cloudinary.com/hsse18xji/image/upload/v1597182430/media/blog_images/smiley_tvba40.jpg"
					alt="User avatar"
				/>
			</div>
			<div class="media-body">
				<div class="well">
					<div class="media-heading">
						<strong>{username}</strong>&nbsp; <small>{date.toDateString()}</small>
					</div>
					<p>{comment.content}</p>
					<Reply id={id} blog_id={blog_id} />
				</div>

				{replyElements()}
				{children}
			</div>
		</div>
	);
};

Comment.propTypes = {};

export default connect(null)(Comment);

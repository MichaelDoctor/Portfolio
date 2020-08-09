import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import axios from 'axios';
export const BlogDetail = ({ slug }) => {
	const [ post, setPost ] = useState({});
	const [ comments, setComments ] = useState([]);
	const [ username, setUsername ] = useState('');
	const [ date, setDate ] = useState(new Date());
	useEffect(
		() => {
			axios
				.get(`https://michael-doctor.me/api/blogs/blog/${slug}/`)
				.then((res) => {
					return res.data;
				})
				.then((result) => {
					setPost(result.post);
					setDate(new Date(result.post.date.split('T')[0]));
					setComments(result.comments);
				});
			axios
				.get(`https://michael-doctor.me/auth/user/${post.author_id}/`)
				.then((res) => {
					return res.data;
				})
				.then((result) => {
					setUsername(result.username);
				});
		},
		[ slug, post.author_id ]
	);

	const commentElements = () => {
		return comments.map(
			(comment) =>
				!comment.parent_id && <Comment id={comment.id} comment={comment} key={comment.id} comments={comments} />
		);
	};
	return (
		<div className="blog">
			<div className="blog-item">
				<div class="blog-featured-image">
					<img
						class="img-responsive img-blog center-block"
						src={`https://res.cloudinary.com/hsse18xji/image/upload/v1/${post.img}`}
						alt="Blog Post"
					/>
				</div>
				<div className="blog-content">
					<h3 class="main-title">{post.title}</h3>
					<div class="entry-meta">
						<span>
							<i class="fa fa-user" /> <a href="#"> {username}</a>
						</span>
						<span>
							<i class="fa fa-clock-o" /> {date.toDateString()}
						</span>
						<span>
							<i class="fa fa-comment" />&nbsp;
							<a href="r#comments">
								<span>{comments.length}</span> Comments
							</a>
						</span>
					</div>

					<p class="lead">{post.content}</p>

					<hr />
					<div id="comments">
						<div id="comments-list">
							<h3>{comments.length} Comments</h3>
							{commentElements()}
						</div>
					</div>
					<div className="gap" />
					<CommentForm />
				</div>
			</div>
		</div>
	);
};

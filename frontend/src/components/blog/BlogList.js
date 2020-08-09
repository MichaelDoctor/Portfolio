import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

const BlogList = ({ id, title, slug, img, date, content, author }) => {
	const [ comments, setComments ] = useState(0);
	const [ username, setUsername ] = useState('');
	const formattedDate = new Date(date.split('T')[0]);
	useEffect(
		() => {
			axios
				.get(`https://michael-doctor.me/auth/user/${author}/`)
				.then((res) => {
					return res.data;
				})
				.then((result) => {
					setUsername(result.username);
				});
			axios
				.get(`https://michael-doctor.me/api/blogs/comment/${id}/`)
				.then((res) => {
					return res.data;
				})
				.then((result) => {
					setComments(result.length);
				});
		},
		[ id, author, comments, username ]
	);
	return (
		<div>
			<div className="blog-item">
				<div className="blog-featured-image">
					<img className="img-responsive img-blog center-block" src={img} alt="Blog Post" />
					<div className="overlay">
						<Link className="preview btn btn-outlined btn-primary" to={slug}>
							<i className="fa fa-link" />
						</Link>
					</div>
				</div>
				<div class="blog-content">
					<a href={slug}>
						<h3 class="main-title">{title}</h3>
					</a>
					<div class="entry-meta">
						<span>
							<i class="fa fa-user" /> <a href="#linktoprofilelater"> {username}</a>
						</span>&nbsp;
						<span>
							<i class="fa fa-clock" /> {formattedDate.toDateString()}
						</span>&nbsp;
						<span>
							<i class="fa fa-comment" />&nbsp;
							<a href={`${slug}#comments`}>
								<span class="counter">{comments}</span> Comments
							</a>
						</span>
					</div>
					<p>{content} Make this only show a small ammount of post content later</p>
					<div class="read-more-wrapper">
						<a class="btn btn-outlined btn-primary" href={slug}>
							Read More
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default connect(null, {})(BlogList);

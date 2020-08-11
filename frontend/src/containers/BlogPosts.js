import React, { useState, useEffect } from 'react';
import { HeadHelmet } from '../components/all/HeadHelmet';
import { Banner } from '../components/all/Banner';
import { Footer } from '../components/all/Footer';
import BlogList from '../components/blog/BlogList';
import BlogCreate from '../components/blog/BlogCreate';
import axios from 'axios';
import { postCreated } from '../redux/actions/blog';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const BlogPosts = ({ postCreated }) => {
	const [ posts, setPosts ] = useState([]);
	useEffect(
		() => {
			axios
				.get(`https://michael-doctor.me/api/blogs/`)
				.then((res) => {
					return res.data;
				})
				.then((result) => {
					setPosts(result);
				});
			postCreated();
		},
		[ postCreated ]
	);

	return (
		<div>
			<HeadHelmet title="Blog Project" />
			<Banner
				title="Blog Project"
				description="This is blog page displays all posts by all users. This project utilizes database relationships, user authorization with private routes, and blog posts with comments and replies. "
			/>
			<div id="content-wrapper">
				<section id="blog" class="white">
					<div class="container">
						<div class="gap" />
						<div class="row">
							<div className="col-lg-12">
								<h3 className="center">Create a blog post</h3>
								<BlogCreate />
								<hr />
								{posts.map((post) => (
									<BlogList
										key={post.id}
										id={post.id}
										title={post.title}
										author={post.author}
										date={post.date}
										img={post.img}
										slug={`/blog/slug/${post.slug}/`}
										content={post.content}
									/>
								))}
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
};
BlogPosts.propTypes = {
	postCreated : PropTypes.func.isRequired
};

export default connect(null, { postCreated })(BlogPosts);

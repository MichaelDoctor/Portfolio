import React, { useState, useEffect } from 'react';
import { HeadHelmet } from '../components/all/HeadHelmet';
import { Banner } from '../components/all/Banner';
import { Footer } from '../components/all/Footer';
import { BlogList } from '../components/blog/BlogList';
import { Pagination } from '../components/all/Pagination';
import BlogCreate from '../components/blog/BlogCreate';
import { getPostList, getUsers } from '../redux/actions/blog';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BlogPosts = ({ getPostList, blog: { postList, users, postIds } }) => {
	const description =
		'This is blog page displays all posts by all users. This project utilizes database relationships, user authorization with private routes, and blog posts with comments and replies. ';

	const [ posts, setPosts ] = useState(postList);
	useEffect(
		() => {
			getPostList();
		},
		[ getPostList, posts ]
	);

	return (
		<div>
			<HeadHelmet title="Blog Project" />
			<Banner title="Blog Project" description={description} />
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
										id={post.id}
										title={post.title}
										author={post.author}
										date={post.date}
										img={post.img}
										slug={`/blog/slug/${post.slug}/`}
										content={post.content}
									/>
								))}

								<Pagination />
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
	getPostList : PropTypes.func.isRequired,
	blog        : PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	blog : state.blog
});

export default connect(mapStateToProps, { getPostList })(BlogPosts);

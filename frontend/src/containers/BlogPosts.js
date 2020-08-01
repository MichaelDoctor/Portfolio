import React from 'react';
import PropTypes from 'prop-types';
import { HeadHelmet } from '../components/all/HeadHelmet';
import { Banner } from '../components/all/Banner';
import { Footer } from '../components/all/Footer';
import { BlogList } from '../components/blog/BlogList';
import { connect } from 'react-redux';

const BlogPosts = () => {
	const description =
		'This is blog page displays all posts by all users. This project utilizes database relationships, user authorization with private routes, and blog posts with comments and replies. ';
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
								<BlogList
									title="Test"
									author="Michael"
									date="September 1, 2019"
									img="https://placehold.it/1200x600"
									slug="/blog/slug"
									comments={[ 1, 2 ]}
									content="This is the body of the post."
								/>
								<h1>Fix pagination style and script with api pagination!!!!</h1>
								<ul class="pagination pagination-lg">
									<li>
										<a href="#">
											<i class="fa fa-angle-left" />
										</a>
									</li>
									<li class="active">
										<a href="#">1</a>
									</li>
									<li>
										<a href="#">2</a>
									</li>
									<li>
										<a href="#">3</a>
									</li>
									<li>
										<a href="#">4</a>
									</li>
									<li>
										<a href="#">5</a>
									</li>
									<li>
										<a href="#">
											<i class="fa fa-angle-right" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
};

BlogPosts.propTypes = {};

export default BlogPosts;

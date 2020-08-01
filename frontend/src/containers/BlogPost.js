import React from 'react';
import PropTypes from 'prop-types';
import { HeadHelmet } from '../components/all/HeadHelmet';
import { Footer } from '../components/all/Footer';
import { BlogDetail } from '../components/blog/BlogDetail';
const BlogPost = (props) => {
	const slug = window.location.pathname.slice(6, window.location.pathname.length);
	return (
		<div>
			<HeadHelmet title="Change this to post title" />
			<div id="content-wrapper">
				<section id="blog" class="white">
					<div class="container">
						<div class="gap" />
						<div class="row">
							<div className="col-lg-12">
								<h1>{slug}</h1>
								<BlogDetail />
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
};

BlogPost.propTypes = {};

export default BlogPost;

import React from 'react';
import { HeadHelmet } from '../components/all/HeadHelmet';
import { Footer } from '../components/all/Footer';
import { BlogDetail } from '../components/blog/BlogDetail';
const BlogPost = () => {
	const slug = window.location.pathname.slice(11, window.location.pathname.length - 1);
	return (
		<div>
			<HeadHelmet title="Change this to post title" />
			<div id="content-wrapper">
				<section id="blog" class="white">
					<div class="container">
						<div class="gap" />
						<div class="row">
							<div className="col-lg-12">
								<BlogDetail slug={slug} />
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

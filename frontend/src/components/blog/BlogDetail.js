import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
export const BlogDetail = () => {
	return (
		<div className="blog">
			<div className="blog-item">
				<div class="blog-featured-image">
					<img class="img-responsive img-blog" src="https://placehold.it/1200x600" alt="Blog Post" />
					<div class="overlay">
						<a class="preview btn btn-outlined btn-primary" href="#blog-content" rel="prettyPhoto">
							<i class="fa fa-link" />
						</a>
					</div>
				</div>
				<div className="blog-content">
					<h3 class="main-title">Civility vicinity graceful is it at.</h3>
					<div class="entry-meta">
						<span>
							<i class="fa fa-user" /> <a href="#"> Michael Doctor</a>
						</span>
						<span>
							<i class="fa fa-clock-o" /> April 5th, 2014
						</span>
						<span>
							<i class="fa fa-comment" />&nbsp;
							<a href="r#comments">
								<span class="counter">14</span> Comments
							</a>
						</span>
					</div>

					<p class="lead">
						No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him
						sympathize her collecting occasional. Do answered bachelor occasion in of offended no concerns.
						Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be.
						Alone visit use these smart rooms ham. No waiting in on enjoyed placing it inquiry.{' '}
					</p>

					<p>
						Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment no by
						projection. To loud lady whom my mile sold four. Need miss all four case fine age tell. He
						families my pleasant speaking it bringing it thoughts. View busy dine oh in knew if even. Boy
						these along far own other equal old fanny charm. Difficulty invitation put introduced see
						middletons nor preference.{' '}
					</p>

					<p>
						Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.
						Hill sold ham men made lose case. Views abode law heard jokes too. Was are delightful solicitude
						discovered collecting man day. Resolving neglected sir tolerably but existence conveying for.
						Day his put off unaffected literature partiality inhabiting.{' '}
					</p>

					<hr />
					<div id="comments">
						<div id="comments-list">
							<h3>3 Comments</h3>
							<Comment>
								<Comment />
								<Comment />
							</Comment>
							<Comment />
						</div>
					</div>
					<div className="gap" />
					<CommentForm />
				</div>
			</div>
		</div>
	);
};

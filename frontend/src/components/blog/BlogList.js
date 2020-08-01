import React from 'react';
import { Link } from 'react-router-dom';

export const BlogList = ({ title, author, date, img, slug, comments, content }) => {
	return (
		<div>
			<div className="blog-item">
				<h1>Fix styling of hover later!!!!!!!!!!!!And add a form for posting if user is authenticated</h1>
				<div className="blog-featured-image">
					<img className="img-responsive img-blog" src={img} alt="post image" />
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
							<i class="fa fa-user" /> <a href="#linktoprofilelater"> {author}</a>
						</span>&nbsp;
						<span>
							<i class="fa fa-clock" /> {date}
						</span>&nbsp;
						<span>
							<i class="fa fa-comment" />&nbsp;
							<a href={`${slug}#comments`}>
								<span class="counter">{comments.length}</span> Comments
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

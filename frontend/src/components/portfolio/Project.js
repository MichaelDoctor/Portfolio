import React from 'react';

export const Project = ({ className, img, title, author, datetime, date, content, link }) => {
	return (
		<li className={className}>
			<div className="item-inner">
				<div className="post">
					<div className="post-img-content">
						<img src={img} className="img-responsive" />
						<div className="overlay">
							<a className="preview btn btn-outlined btn-primary" href="#">
								<i className="fa fa-link" />
							</a>
						</div>
					</div>
					<div className="content">
						<h2 className="post-title">{title}</h2>
						<div className="author">
							<i className="fa fa-user" /> By <b>{author}</b> | <i className="fa fa-clock-o" />{' '}
							<time dateTime={datetime}>{date}</time>
						</div>
						<div>{content}</div>
						<div className="read-more-wrapper">
							<a href={link} className="btn btn-outlined btn-primary">
								Read more
							</a>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

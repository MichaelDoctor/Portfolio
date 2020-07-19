import React from 'react';
import { Link } from 'react-router-dom';

export const Project = ({ className, img, title, author, datetime, date, content, link }) => {
	return (
		<li className={className}>
			<div className="item-inner">
				<div className="post">
					<div className="post-img-content">
						<img src={img} className="img-responsive" alt={`${title}`} />
						<div className="overlay">
							<Link className="preview btn btn-outlined btn-primary" to={link}>
								<i className="fa fa-link" />
							</Link>
						</div>
					</div>
					<div className="content">
						<h2 className="post-title">{title}</h2>
						<div className="author">
							<i className="fa fa-user" /> By <b>{author}</b> | <i className="fa fa-clock-o" />
							&nbsp;Updated:&nbsp;
							<time dateTime={datetime}>{date}</time>
						</div>
						<div>{content}</div>
						<div className="read-more-wrapper">
							<Link to={link} className="btn btn-outlined btn-primary">
								Check it out
							</Link>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

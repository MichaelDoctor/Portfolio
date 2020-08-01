import React from 'react';

export const Comment = ({ children }) => {
	return (
		<div class="media">
			<div class="pull-left">
				<img class="avatar img-thumbnail comment-avatar" src="http://placehold.it/400x400" alt="User image" />
			</div>
			<div class="media-body">
				<div class="well">
					<div class="media-heading">
						<strong>Michael Doctor</strong>&nbsp; <small>August 1, 2020</small>
					</div>
					<p>
						Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably
						but existence conveying for. Day his put off unaffected literature partiality inhabiting.
					</p>
					<a class="pull-right btn btn-primary btn-outlined" href="#">
						Reply
					</a>
				</div>
				{children}
			</div>
		</div>
	);
};

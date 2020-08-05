import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Comment = ({ children, isAuthenticated }) => {
	return (
		<div class="media">
			<div class="pull-left">
				<img class="avatar img-thumbnail comment-avatar" src="http://placehold.it/400x400" alt="User avatar" />
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
					<a
						className={
							isAuthenticated ? (
								'pull-right btn btn-primary btn-outlined'
							) : (
								'pull-right btn btn-primary btn-outlined disabled'
							)
						}
						href="#"
					>
						Reply
					</a>
				</div>
				{children}
			</div>
		</div>
	);
};

Comment.propTypes = {
	isAuthenticated : PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated : state.auth.isAuthenticated
});
export default connect(mapStateToProps)(Comment);

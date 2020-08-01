import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = (props) => {
	return (
		<div id="comment-form">
			<h3 class="main-title">Leave a comment</h3>
			<hr />
			<h5>Login to leave a comment. Show this message if user not logged in.</h5>
			<form class="form-horizontal" role="form">
				<div class="form-group">
					<div class="col-sm-12">
						<textarea rows="8" class="form-control" placeholder="Comment" />
					</div>
				</div>
				<button type="submit" class="btn btn-primary btn-outlined">
					{' '}
					Comment
				</button>
			</form>
		</div>
	);
};

CommentForm.propTypes = {};

export default CommentForm;

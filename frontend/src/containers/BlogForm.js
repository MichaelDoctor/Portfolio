import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BlogForm = ({ isAuthenticated }) => {
	return (
		<div id="post-form">
			<h3 class="main-title">Create a post</h3>
			<hr />
			<form class="form-horizontal">
				<div class="form-group">
					<div class="col-sm-12">
						<textarea rows="8" class="form-control" placeholder="Comment" />
					</div>
				</div>
				<button type="submit" class="btn btn-primary btn-outlined">
					&nbsp; Comment
				</button>
			</form>
		</div>
	);
};

BlogForm.propTypes = {
	isAuthenticated : PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated : state.auth.isAuthenticated
});

export default connect(mapStateToProps)(BlogForm);

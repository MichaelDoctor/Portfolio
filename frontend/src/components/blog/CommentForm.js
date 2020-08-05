import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CommentForm = ({ isAuthenticated }) => {
	return (
		<div id="comment-form">
			<h3 className="main-title">Leave a comment</h3>
			<hr />
			<form className="form-horizontal">
				<div className="form-group">
					<div className="col-sm-12">
						<textarea
							rows="8"
							className="form-control"
							placeholder={isAuthenticated ? 'Comment' : 'Login to Leave a Comment'}
							disabled={isAuthenticated ? 'false' : 'true'}
						/>
					</div>
				</div>

				{isAuthenticated ? (
					<button type="submit" className="btn btn-primary btn-outlined">
						&nbsp; Comment
					</button>
				) : (
					<a className="btn btn-primary btn-outlined disabled"> Comment</a>
				)}
			</form>
		</div>
	);
};

CommentForm.propTypes = {
	isAuthenticated : PropTypes.bool
};

const mapStateToProps = (state) => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps)(CommentForm);

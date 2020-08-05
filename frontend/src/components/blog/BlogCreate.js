import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const BlogCreate = ({ isAuthenticated }) => {
	return (
		<div className="text-center">
			{isAuthenticated ? (
				<Link to="/blog/create/" class="btn btn-outlined btn-primary">
					Create a Post
				</Link>
			) : (
				<Link to="/blog/create/" class="btn btn-outlined btn-primary disabled">
					Login to Create a Post
				</Link>
			)}
		</div>
	);
};

BlogCreate.propTypes = {
	isAuthenticated : PropTypes.bool
};
const mapStateToProps = (state) => ({
	isAuthenticated : state.auth.isAuthenticated
});
export default connect(mapStateToProps, {})(BlogCreate);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BlogForm = ({ isAuthenticated }) => {
	const imageChange = (e) => {
		const fileName = e.target.files[0];
		if (fileName) {
			document.getElementById('fileButton').innerHTML = fileName.name;
		}
		else {
			document.getElementById('fileButton').innerHTML = 'Upload an image...';
		}
	};
	return (
		<div id="content-wrapper">
			<section id="blog" className="white">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="blog-content">
								<h3 className="main-title center">Create a post</h3>
								<hr />
								<form className="form-horizontal">
									<div className="form-group">
										<div className="col-sm-12">
											<input
												type="text"
												className="form-control"
												name="title"
												placeholder="Title"
												required
											/>
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-12">
											<div class="custom-file">
												<input
													type="file"
													class="custom-file-input hidden"
													id="validatedCustomFile"
													onChange={(e) => imageChange(e)}
													name="img"
													accept="image/png, image/jpeg"
													required
												/>
												<label
													class="custom-file-label btn btn-primary btn-outlined"
													for="validatedCustomFile"
													id="fileButton"
												>
													Upload an image...
												</label>
											</div>
										</div>
									</div>

									<div className="form-group">
										<div className="col-sm-12">
											<textarea
												rows="8"
												className="form-control"
												name="content"
												placeholder="Content"
												required
											/>
										</div>
									</div>
									<button type="submit" className="btn btn-primary btn-outlined">
										&nbsp; Comment
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
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

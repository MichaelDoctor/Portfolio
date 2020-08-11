import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DjangoCSRFToken from 'django-react-csrftoken';
import { createPost } from '../redux/actions/blog';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../redux/actions/alerts';
import { Footer } from '../components/all/Footer';

const BlogForm = ({ createPost, blog, auth }) => {
	const [ data, setData ] = useState({
		author  : auth.user.pk,
		title   : '',
		content : '',
		img     : null
	});
	useEffect(() => {
		setData({ ...data, csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value });
	}, []);
	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};
	const imageChange = (e) => {
		const fileName = e.target.files[0];
		if (fileName) {
			document.getElementById('fileButton').innerHTML = fileName.name;
		}
		else {
			document.getElementById('fileButton').innerHTML = 'Upload an image...';
		}
		setData({
			...data,
			[e.target.name]: e.target.files[0]
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!data.title) {
			setAlert('Title required', 'danger');
		}
		else if (!data.img) {
			setAlert('Image required', 'danger');
		}
		else if (!data.content) {
			setAlert('Content required', 'danger');
		}
		else {
			const { csrfmiddlewaretoken } = data;
			let formData = new FormData();
			formData.append('img', data.img, data.img.name);
			formData.append('title', data.title);
			formData.append('content', data.content);
			formData.append('author', data.author);
			createPost({ formData, csrfmiddlewaretoken });
		}
	};
	if (blog.post) return <Redirect to="/blog/" />;
	return (
		<div>
			<div id="content-wrapper">
				<section id="blog" className="white">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="blog-content">
									<h3 className="main-title center">Create a post</h3>
									<hr />
									<form className="form-horizontal">
										<DjangoCSRFToken />
										<div className="form-group">
											<div className="col-sm-12">
												<input
													type="text"
													className="form-control"
													name="title"
													placeholder="Title"
													onChange={(e) => handleChange(e)}
													required
												/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-sm-12">
												<div class="custom-file">
													<input
														type="file"
														className="custom-file-input hidden"
														id="validatedCustomFile"
														onChange={(e) => imageChange(e)}
														name="img"
														accept="image/png, image/jpeg"
														required
													/>
													<label
														className="custom-file-label btn btn-primary btn-outlined"
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
													onChange={(e) => handleChange(e)}
													required
												/>
											</div>
										</div>
										<button
											onClick={(e) => handleSubmit(e)}
											className="btn btn-primary btn-outlined"
										>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
};

BlogForm.propTypes = {
	auth       : PropTypes.object.isRequired,
	createPost : PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	auth : state.auth,
	blog : state.blog
});

export default connect(mapStateToProps, { createPost })(BlogForm);

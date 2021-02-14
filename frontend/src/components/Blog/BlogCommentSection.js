import React from 'react';
import BlogComment from './BlogComment';

const BlogCommentSection = () => {
  return (
    <div className="comment-section">
      <div className="hr" />
      <div className="comment-item comment-form-border">
        <div className="comment-form-wrap">
          <div className="blog-form-block">
            <form className="blog-form">
              <input
                type="text"
                className="blog-text-field w-input"
                maxLength="256"
                name="name"
                placeholder="Name"
                id="name"
              />
              <textarea
                name="commContent"
                maxLength="5000"
                id="commContent"
                placeholder="Type your comments here!"
                className="blog-text-field blog-text-area w-input"
              />
              <input
                type="submit"
                value="Comment"
                className="slider-btn hover1 proj-btn w-button"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="hr comment-hr" />
      <div className="comment-item comments">
        <BlogComment
          name="Michael Doctor"
          date="February 14, 2021"
          content="Place holder comment"
        />
      </div>
    </div>
  );
};
export default BlogCommentSection;

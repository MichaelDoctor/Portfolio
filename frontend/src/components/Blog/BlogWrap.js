import React from 'react';
import Footer from '../Footer/Footer';
import BlogCommentSection from './BlogCommentSection';

const BlogWrap = ({ blog, children }) => {
  return (
    <div className="content-container">
      <div className="nav-gap" />
      <div className="info-content">
        <div className="about-me-container">
          <div className="blog-wrap">{children}</div>
        </div>
      </div>
      <BlogCommentSection blog={blog} />
      <Footer />
    </div>
  );
};
export default BlogWrap;

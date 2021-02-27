import React from 'react';

const BlogSection = ({ title, children }) => {
  return (
    <div className="blog-section">
      <div className="blog-head-wrap">
        <h1 className="blog-header" id={title}>{title}</h1>
      </div>
      {children}
    </div>
  );
};
export default BlogSection;

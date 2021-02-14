import React from 'react';

const BlogMainHeader = ({ titleMain, titleSub, author, date }) => {
  return (
    <div className="about-header">
      <div className="section-title">
        <h1 className="heading blog-heading">
          {titleMain} <br />
          {titleSub}
        </h1>
      </div>
      <div className="hr"></div>
      <div className="about-sub blog-title-sub">By: {author}</div>
      <div className="about-sub blog-title-sub blog-date">Created: {date}</div>
    </div>
  );
};
export default BlogMainHeader;

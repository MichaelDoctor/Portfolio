import React from 'react';

const BlogComment = ({ name, date, content }) => {
  return (
    <div className="comment">
      <div className="comment-name">{name}</div>
      <div className="comment-date">{date}</div>
      <div className="comment-content">{content}</div>
    </div>
  );
};
export default BlogComment;

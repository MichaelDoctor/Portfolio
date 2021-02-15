import React from 'react';
import newLine from '../../hooks/newLine.hook';

const BlogComment = ({ name, date, content }) => {
  return (
    <div className="comment">
      <div className="comment-name">{name}</div>
      <div className="comment-date">{date}</div>
      <div className="comment-content">{newLine(content)}</div>
    </div>
  );
};
export default BlogComment;

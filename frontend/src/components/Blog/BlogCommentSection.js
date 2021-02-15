import React, { useState, useEffect, useRef } from 'react';
import BlogComment from './BlogComment';
import DjangoCSRFToken from 'django-react-csrftoken';
import axios from 'axios';
import useAxios from '../../hooks/useAxios.hook';
import PageLoader from '../pageLoader/PageLoader';
import moment from 'moment';

const BlogCommentSection = ({ blog }) => {
  const [comments, setComments] = useState();
  const [inputs, setInputs] = useState({});
  const authorRef = useRef();
  const commentRef = useRef();
  const [loadingComments, setLoadingComments] = useState(true);
  useEffect(() => {
    setInputs({
      csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0]
        .value,
    });
  }, []);
  useEffect(() => {
    if (comments) {
      setLoadingComments(false);
    }
  }, [comments]);
  const baseUrl = 'https://michael-doctor.me';
  // const baseUrl = 'http://localhost:8000';

  useAxios(`${baseUrl}/api/blog/comment/${blog}/`, setComments);
  const handleChange = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let { csrfmiddlewaretoken, author, content } = inputs;
    if (!author) author = authorRef.current.value;
    if (!content) content = commentRef.current.value;
    setInputs({ csrfmiddlewaretoken, author, content });
    createComment({ csrfmiddlewaretoken, author, content, blog });
  };

  const createComment = ({ csrfmiddlewaretoken, author, content, blog }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFTOKEN': csrfmiddlewaretoken,
      },
    };

    const body = JSON.stringify({ blog, author, content });

    axios
      .post(`${baseUrl}/api/blog/create/comment/`, body, config)
      .then(res => {
        commentRef.current.value = '';
        let tempComments = {};

        comments
          ? (tempComments = {
              length: comments.length + 1,
              comments: [res.data, ...comments.comments],
            })
          : (tempComments = {
              length: 1,
              comments: [res.data],
            });
        setComments(tempComments);
      })
      .catch(err => {
        commentRef.current.value =
          '***** An Error Occured! Try again later 😭*****';
        authorRef.current.disabled = true;
        commentRef.current.disabled = true;
      });
  };
  return (
    <div className="comment-section">
      <div className="hr" />
      <div className="comment-item comment-form-border"></div>
      <div className="hr comment-hr" />
      <div className="comment-item comments">
        <div className="num-com-wrap">
          <div className="comment-name">
            {!loadingComments ? comments.length : 'Loading'} Comment
            {loadingComments ? 's' : comments.length === 1 ? '' : 's'}
          </div>
        </div>
        <div className="comment-form-wrap">
          <div className="blog-form-block">
            <form className="blog-form" onSubmit={handleSubmit}>
              <DjangoCSRFToken />
              <input
                type="text"
                className="blog-text-field w-input"
                maxLength="256"
                name="author"
                placeholder="Name"
                id="author"
                onChange={handleChange}
                ref={authorRef}
                required
              />
              <textarea
                name="content"
                maxLength="5000"
                id="content"
                placeholder="Type your comments here!"
                className="blog-text-field blog-text-area w-input"
                onChange={handleChange}
                ref={commentRef}
                required
              />
              <input
                type="submit"
                value="Comment"
                className="slider-btn hover1 proj-btn w-button"
              />
            </form>
          </div>
        </div>
        {!loadingComments ? (
          comments.comments.map(({ id, author, content, date }) => (
            <BlogComment
              key={id}
              name={author}
              date={moment(date).format('MMMM DD, YYYY')}
              content={content}
            />
          ))
        ) : (
          <PageLoader />
        )}
      </div>
    </div>
  );
};
export default BlogCommentSection;

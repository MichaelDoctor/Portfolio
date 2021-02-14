import React from 'react';
import Project from '../Projects/Project';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      img:
        'https://res.cloudinary.com/hsse18xji/image/upload/v1/media/photos/2020/09/03/beer_nyllny',
      title: 'Swift Part 1',
      author: 'Michael Doctor',
      date: 'February 13, 2021',
      content: 'Temporary content. Think of one later!',
      link: '/blog/1',
    },
  ];

  return (
    <div className="projects-container" id="blogs">
      <div
        data-w-id="555ee04a-b52e-f8fb-a4a6-d21ac831f8d7"
        className="section-heading projects slide-left"
      >
        <div className="section-title">
          <h1 className="heading div-head">My Blogs</h1>
        </div>
        <div className="hr"></div>
        <div className="section-desc">
          <div className="text-block">
            Check out my{' '}
            <a href="https://github.com/MichaelDoctor" className="link">
              Github <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
      <div
        data-w-id="555ee04a-b52e-f8fb-a4a6-d21ac831f8d7"
        className="projects proj-block slide-left"
      >
        <div className="project-container">
          {blogs.map(blog => (
            <Project
              key={blog.id}
              img={blog.img}
              title={blog.title}
              author={blog.author}
              date={blog.date}
              content={blog.content}
              link={blog.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blogs;

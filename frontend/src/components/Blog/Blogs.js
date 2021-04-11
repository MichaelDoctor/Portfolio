import React from 'react';
import Project from '../Projects/Project';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      img:
        'https://developer.apple.com/swift/images/swift-og.png',
      title: 'Swift Part 1',
      author: 'Michael Doctor',
      date: 'February 13, 2021',
      content: 'Are you a developer with Java experience? Then this blog post is for you! From Comments to Extensions, this blog introduces the basics of the Swift Programming Language!',
      link: '/blog/1',
    },
    {
      id: 2,
      img:
        'https://developer.apple.com/swift/images/swift-og.png',
      title: 'Swift Part 2',
      author: 'Michael Doctor',
      date: 'April 10, 2021',
      content: 'Are you someone who always has to decide on what to eat? Then this blog is for you. This is the sequel to my first Swift Blog. It uses the knowledge from the original, to create an iOS App to save the Food Pickers of the World.',
      link: '/blog/2',
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
              tab={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blogs;

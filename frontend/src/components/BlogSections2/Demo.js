import React from 'react';
import BlogSection from '../Blog/BlogSection';
import YoutubeWrap from '../Blog/YoutubeWrap';

const Demo = () => {
  return (
    <BlogSection title="Demo">
      <div className="about-desc blog-content">
        Complete Demo Code:
        <br />
      </div>
      <a
        href="https://github.com/MichaelDoctor/Blog-2-Demo"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Food Pickers vs. the World
      </a>
      <YoutubeWrap link="https://www.youtube.com/embed/wVlbl3Ck6NU"/>
    </BlogSection>
  );
};
export default Demo;

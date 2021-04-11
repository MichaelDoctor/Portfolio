import React from 'react';
import BlogSection from '../Blog/BlogSection';
import YoutubeWrap from '../Blog/YoutubeWrap';

const Storyboard = () => {
  return (
    <BlogSection title="StoryBoard">
      <div className="about-desc blog-content">
        This step relies heavily on the GUI of Xcode. Follow this video to setup
        our storyboard:
        <br />
      </div>
      <YoutubeWrap link="https://www.youtube.com/embed/wVlbl3Ck6NU"/>
      <div className="about-desc blog-content">
        In the video, the Navigation Controller,{' '}
        <strong className="blog-bold">Cell Identifier</strong>,{' '}
        <strong className="blog-bold">Storyboard ID</strong>, and button code
        connection is shown. The final UI should look like the image below:
        <br />
      </div>
      <div className="blog-img"></div>
    </BlogSection>
  );
};
export default Storyboard;

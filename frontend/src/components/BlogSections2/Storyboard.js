import React from 'react';
import BlogSection from '../Blog/BlogSection';
import YoutubeWrap from '../Blog/YoutubeWrap';

const Storyboard = () => {
  return (
    <BlogSection title="StoryBoard">
      <div className="about-desc blog-content">
        This step relies heavily on the GUI of Xcode. Follow this video to set up
        our storyboard:
        <br />
      </div>
      <YoutubeWrap link="https://www.youtube.com/embed/mXIEjTiOUdI"/>
      <div className="about-desc blog-content">
        In the video, the Navigation Controller,{' '}
        <strong className="blog-bold">Cell Identifier</strong>,{' '}
        <strong className="blog-bold">Storyboard ID</strong>, and button code
        connection are shown.
        <br />
      </div>
    </BlogSection>
  );
};
export default Storyboard;

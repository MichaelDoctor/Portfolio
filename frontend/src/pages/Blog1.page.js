import React from 'react';
import BlogMainHeader from '../components/Blog/BlogMainHeader';
import BlogSections from '../components/Blog/BlogSections';
import BlogWrap from '../components/Blog/BlogWrap';
import Navbar from '../components/Navbar/Navbar';
import useScript from '../hooks/useScript.hook';

const Blog1 = () => {
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1606877900/portfolio/js/jquery_xpecxx.js',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1607053094/portfolio/js/webflow.animation_skydrw.js',
  );
  return (
    <div className="container">
      <Navbar />
      <BlogWrap blog={1}>
        <BlogMainHeader
          titleMain="Swift Blog Part 1:"
          titleSub="The Language"
          author="Michael Doctor"
          date="February 13, 2021"
        />
        <BlogSections />
      </BlogWrap>
    </div>
  );
};
export default Blog1;

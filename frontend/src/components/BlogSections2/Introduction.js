import React from 'react';
import BlogSection from '../Blog/BlogSection';

const Introduction = () => {
  return (
    <BlogSection title="Introduction">
      <div className="about-desc blog-content">
        What is the meaning of life? Which came first, the chicken or the egg?
        Does pineapple belong on a pizza? These questions have haunted humanity
        for centuries. One of the most haunting questions is &quot;What are we
        going to eat? You decide I&#x27;m fine with anything&quot;. In this
        world, there are two types of people. Those who always have to pick what
        to eat and those who do not. Unfortunately, I am someone who always has
        to decide what we&#x27;re going to eat. In this blog, I will create a
        solution to this difficult question.
      </div>
      <div className="about-desc blog-content">
        In the last blog, I went over the Swift programming language. This time,
        we will use what we learned and create an iOS app that will save the
        food pickers of the world!  This app will allow you to add, edit, and
        delete food options. With the press of a button, the app will pick one
        of the food options for you! 👏👏👏 You can find the demo code here:
      </div>
      <a
        href="https://github.com/MichaelDoctor/FoodPickerDemo"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Food Pickers vs. the World
      </a>
    </BlogSection>
  );
};
export default Introduction;

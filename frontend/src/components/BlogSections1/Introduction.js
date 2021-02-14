import React from 'react';
import BlogSection from '../Blog/BlogSection';

const Introduction = () => {
  return (
    <BlogSection title="Introduction">
      <div className="about-desc blog-content">
        Are you a developer with Java experience? Then this blog post is for
        you!
      </div>
      <div className="about-desc blog-content">
        Both Java and Swift are general-purpose, compiled programming languages.
        So if you understand Java, Swift will make sense to you (hopefully)! The
        programming language Swift is used for macOS, iOS, watchOS, tvOS, and
        more. This blog will focus on the Swift language for now.
      </div>
      <div className="about-desc blog-content">
        Basic programming knowledge is required to understand this blog. If you
        are a beginner, I would recommend{' '}
        <a
          href="https://www.hackingwithswift.com/100"
          target="_blank"
          rel="noopener noreferrer"
          className="blog-text-link"
        >
          Paul Hudson&#x27;s 100 Days of Swift
        </a>
        . Regardless of if you have coding experience with Java or another
        language, I can guarantee that at least you won&#x27;t fall asleep
        reading this blog. Instead, you might get hungry or cringe 😅. Sorry,
        I&#x27;m writing this while waiting for my food, so a lot of my example
        code will be food-related.
      </div>
    </BlogSection>
  );
};
export default Introduction;

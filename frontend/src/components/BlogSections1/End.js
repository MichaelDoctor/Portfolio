import React from 'react';
import BlogSection from '../Blog/BlogSection';

const End = () => {
  return (
    <BlogSection title="The End">
      <div className="about-desc blog-content">
        Congratulations! You survived the onslaught of horrible jokes, weird
        analogies, random references, and the Swift programming language!
        Hopefully, I didn&#x27;t bore you or make you cringe too many times 😅.
        Wait for Part 2 for the actual implementation of the Swift language. I
        hope you&#x27;re ready for the next barrage of useful and random facts,
        next time on <span className="blog-strike">🐉🏀Z</span> My Swift Blog!
        <br />
      </div>
    </BlogSection>
  );
};
export default End;

/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import BlogSection from '../Blog/BlogSection';

const Arrays = () => {
  return (
    <BlogSection title="Arrays">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/CollectionTypes.html#ID107"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Basic Array Docs
      </a>
      <a
        href="https://developer.apple.com/documentation/swift/array"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Detailed Array Docs
      </a>
      <div className="about-desc blog-content">
        Arrays are a good way of making a list and checking it twice. Arrays in
        Swift are similar to ArrayLists in Java. In both Java and Swift, we
        can&#x27;t mix Datatypes in an Array. Here&#x27;s how to make one with
        Swift and <strong className="blog-bold">check the type </strong>that the{' '}
        <strong className="blog-bold">Array </strong>holds:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          // hmmm I wonder where I ordered from 🤔
          <br />‍<strong className="code-keyword">var</strong> todaysOrder:
          [String] = [<br />
          &quot;C2. Hot Soy Garlic Chicken&quot;,    <br />
          &quot;C9. Creamy Garlic Chicken Bite&quot;,    <br />
          &quot;C9. Creamy Garlic Chicken Bite&quot;
          <br />]<br />‍<br />
          type(of: todaysOrder) // Check the type of any variable
        </div>
      </div>
      <div className="about-desc blog-content">
        Now you may be wondering, &quot;where did he order from?&quot; or
        &quot;why is he so obsessed with food?&quot; or &quot;how do I make an
        empty array that I can fill in later?&quot;. These are all valid
        questions, but I can only answer one of those for now. Let&#x27;s use my
        stomach as an example for the third question:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">var</strong> inMyStomach: [String] =
          []
          <br />‍<strong className="code-keyword">var</strong> inMyStomach2 =
          [String]()
        </div>
      </div>
      <div className="about-desc blog-content">
        Hopefully, in a few minutes, I can eat some of my order and put it
        inside of my stomach. In Java ArrayList, we need to call the add()
        method. In Swift, there is a much simpler way of{' '}
        <strong className="blog-bold">appending to an Array</strong>.  Since I
        can&#x27;t do this in real life yet, let&#x27;s do it in Swift:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">var</strong> firstIndex =
          todaysOrder[0]
          <br />
          inMyStomach += [&quot;C3. Krabby Patty&quot;]
        </div>
      </div>
    </BlogSection>
  );
};
export default Arrays;

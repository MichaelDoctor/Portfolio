/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import BlogSection from '../Blog/BlogSection';

export const Extensions = () => {
  return (
    <BlogSection title="Extensions">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/Extensions.html"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Extensions Docs
      </a>
      <div className="about-desc blog-content">
        Extensions make a woman&#x27;s hair longer and voluminous. Swift
        Extensions do the same thing! Swift{' '}
        <strong className="blog-bold">Extensions </strong>allow us to add or
        modify data types and Protocols:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">extension</strong> Int {'{'}
          <br />    <strong className="code-keyword">func</strong> divBy1()
          -&gt; Int {'{'}
          <br />        print(&quot;Such a useful function 😂&quot;)
          <br />        <strong className="code-keyword">return</strong>{' '}
          <strong className="code-keyword">self</strong> / 1<br />    {'}'}
          <br />‍<br />    <strong className="code-keyword">
            mutating
          </strong>{' '}
          <strong className="code-keyword">func</strong> incr() {'{'}
          <br />        <strong className="code-keyword">self</strong> += 1
          <br />    {'}'}
          <br />
          {'}'}
          <br />
          <br />‍<strong className="code-keyword">var</strong> extendMe: Int = 8
          <br />
          print(extendMe.divBy1())
          <br />
          extendMe.incr()
          <br />
          print(extendMe)
          <br />
          <br />
          /*
          <br />
          &quot;Such a useful function 😂&quot;
          <br />
          &quot;8&quot;
          <br />
          &quot;9\n&quot; */
        </div>
      </div>
    </BlogSection>
  );
};

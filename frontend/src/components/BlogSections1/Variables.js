/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import BlogSection from '../Blog/BlogSection';

const Variables = () => {
  return (
    <BlogSection title="Comments | Variables | Constants">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID310"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Constants and Variables Docs
      </a>
      <div className="about-desc blog-content">
        We will begin with something simple. Let&#x27;s create
        <strong className="blog-bold"> Comments</strong>! Similar to Youtube,
        you can create a comment at the bottom of this blog 😅. But in Swift, we
        can create single line comments with &quot;command&quot; +
        &quot;/&quot;. We can also create documentation comments by typing
        &quot;command&quot; + &quot;option&quot; + &quot;/&quot;. : <br />
      </div>
      <div className="blog-code">
        <div className="code">
          // Single-line comment
          <br />‍<br />
          /* Multi-line comment
          <br />
          <strong>
            In the code below, multi-line comments will be used to emulate a
            print statement.
          </strong>
          <br />
          <br />
          <strong>Understanding the code:</strong>
          <br />
          <strong className="code-keyword">    (Swift keyword)</strong> (normal
          code):
          <br />
          <strong className="code-keyword">        var</strong> watermelon =
          &quot;colors&quot;
          <br />
          <strong className="code-keyword">    </strong>
          <span className="code-error">
            Error Code: <br />
          </span>{' '}
                 <span className="code-error">var 77watermelon</span>
          <br />
          */
          <br />
          <br />
          /// Documentation comment
          <br />
          /// &lt;#Description#&gt;
        </div>
      </div>
      <div className="about-desc blog-content">
        You will notice that any differences between Swift and Java are usually
        the syntax. Now let&#x27;s start by storing
        data in a <strong className="blog-bold">Variable </strong>without type
        annotation:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">var</strong> mood =
          &quot;Hungry&quot;
          <br />
          mood = &quot;still hungry&quot;
        </div>
      </div>
      <div className="about-desc blog-content">
        If we tried this with Java, Java would growl at you like my stomach is
        growling at me. Now let&#x27;s create a{' '}
        <strong className="blog-bold">Constant </strong>and try the same thing:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">let</strong> orderStatus = &quot;Mark
          is on the way with your Order.&quot;
          <br />
          <span className="code-error">
            orderStatus = &quot;Heads up! Your courier is about to arrive.&quot;{' '}
          </span>
          <br />
          <span className="code-error"></span>
        </div>
      </div>
      <div className="about-desc blog-content">
        Uh oh, Swift is getting hangry because you can&#x27;t change a
        constant&#x27;s data no matter how much you want it to be true 😭.
        <br />
      </div>
    </BlogSection>
  );
};
export default Variables;

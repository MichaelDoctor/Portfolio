/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import BlogSection from '../Blog/BlogSection';

const BasicDataTypes = () => {
  return (
    <BlogSection title="Basic Data Types">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID317"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Basic Data Types Docs
      </a>
      <a
        href="https://developer.apple.com/documentation/swift"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Detailed Data Types Docs
      </a>
      <div className="about-desc blog-content">
        Sometimes we want to declare a variable and add data later. If we tried
        that with the previous method, Swift&#x27;s stomach will growl again:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <span className="code-error">var anyType</span>
        </div>
      </div>
      <div className="about-desc blog-content">
        Swift&#x27;s stomach is growling because it doesn&#x27;t know that
        there&#x27;s nothing muffling the digestion sounds. To prevent this, we
        need to get a snack for Swift to muffle the rumbles and ensure people
        don&#x27;t mistake it for something else. We would do this with{' '}
        <strong className="blog-bold">Type Annotation</strong>:<br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">var</strong> anyType:{' '}
          <strong className="code-keyword">
            Any
            <br />‍<br />‍
          </strong>
          anyType = &quot;Mamba out&quot;
          <br />
          anyType = 8 + 24
        </div>
      </div>
      <div className="about-desc blog-content">
        Swift has several data types. For now, we will look at the basic ones.
        The basics would be <strong className="blog-bold">Any</strong>,{' '}
        <strong className="blog-bold">Double</strong>,{' '}
        <strong className="blog-bold">Bool</strong>,{' '}
        <strong className="blog-bold">Int</strong>, and{' '}
        <strong className="blog-bold">String</strong>:<br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">let</strong> price: Double = 64.39
          <br />‍<strong className="code-keyword">var</strong> isHungry: Bool ={' '}
          <strong className="code-keyword">
            true
            <br />
            let
          </strong>{' '}
          first: Int = 2_020
          <br />‍<strong className="code-keyword">var</strong> second: String =
          &quot;🥳&quot;
        </div>
      </div>
      <div className="about-desc blog-content">
        We can use underscores to make numbers more readable. Another great
        thing about Swift is that you can integrate emojis into your code 😲!{' '}
        <strong className="blog-bold">Underscores</strong> are also used to{' '}
        <strong className="blog-bold">Skip Unneeded Information</strong> (It
        also does something else, but it will be covered later).
        <br />
      </div>
      <div className="about-desc blog-content">
        You might be wondering why &quot;first&quot; and
        &quot;second&quot; contain two things that should never be in the same
        sentence with each other. Well, that&#x27;s because I didn&#x27;t get to
        finish my String. Let&#x27;s fix that with{' '}
        <strong className="blog-bold">String interpolation</strong>{' '}
        &quot;\()&quot;:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">var</strong> stringInterpolation:
          String = &quot;\(first) is over! \(second)&quot;
          <br />‍<br />
          /* &quot;2020 is over! 🥳&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        See! Now it all makes sense! Look at how much easier it is to do that in
        Swift! But don&#x27;t mind me, I&#x27;m just trying to make myself feel
        better about spending so much on a MacBook 😅. There is another way we
        could have fixed that sentence, but we&#x27;ll do this with the mood
        variable we initialized before. In case you forgot what &quot;mood&quot;
        contained, I&#x27;ll <strong className="blog-bold">Print </strong>out
        the sentence for you:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">var</strong> addString =
          &quot;I&#x27;m &quot; + mood + &quot; 😢&quot;
          <br />
          print(addString) // println in Java
          <br />‍<br />
          /* &quot;I&#x27;m still hungry 😢\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        A triple-double is when a player records double-digit scores in three
        categories. In Swift, triple-double quotes are used to create a  
        <strong className="blog-bold">Multi-line String</strong>. We can do this
        the Java way or the Python way:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">var</strong> javaWay: String =
          &quot;This is a multi\n&quot; + &quot;line\n&quot; +
          &quot;string&quot;
          <br />‍<strong className="code-keyword">var</strong> pythonWay: String
          = &quot;&quot;&quot;
          <br />
          This is a multi
          <br />
          line <br />
          string
          <br />
          &quot;&quot;&quot;
        </div>
      </div>
    </BlogSection>
  );
};
export default BasicDataTypes;

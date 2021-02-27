/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import BlogSection from '../Blog/BlogSection';
import YoutubeWrap from '../Blog/YoutubeWrap';

export const Optionals = () => {
  return (
    <BlogSection title="Optionals">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID330"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Optionals Docs
      </a>
      <div className="about-desc blog-content">
        Either I have a decent joke or no joke at all. If I don&#x27;t know if I
        have a joke, I shouldn&#x27;t force it (this makes more sense later).
        Not knowing if there will be a joke is similar to an Optional. An{' '}
        <strong className="blog-bold">Optional </strong>can either have a value
        or be nil. An optional is created by having a data type and a trailing
        question mark:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">func</strong> badJokeCounter(
          <strong className="code-keyword">_</strong> num: Int) -&gt; String?{' '}
          {'{'}
          <br />    <strong className="code-keyword">if</strong> num &gt;= 10{' '}
          {'{'}
          <br />        <strong className="code-keyword">return</strong>{' '}
          <strong className="code-keyword">
            nil
            <br />‍
          </strong>{' '}
             {'}'}
          <br />    <strong className="code-keyword">return</strong>{' '}
          &quot;Number of bad jokes = \(num)&quot;
          <br />
          {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        If you know that there is no way that the joke is nil, you can{' '}
        <strong className="blog-bold">Force Unwrap </strong>the Optional by
        appending an exclamation mark to it:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          print(badJokeCounter(9)!)
          <br />‍<br />
          /* &quot;Number of bad jokes = 9\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        But as you saw from the previous sections, it&#x27;s dangerous to assume
        that my jokes will be decent. In other words, it is best not to force
        it. I&#x27;m talking about Optionals and not my jokes (Fine! I was
        talking about both 😓). There are two safe ways of unwrapping your
        Optionals. These are the if-let statement and nil coalescing.
        <br />
      </div>
      <div className="about-desc blog-content">
        The if-let statement or <strong className="blog-bold">Optional Binding </strong>attempts to
        unwrap the Optional by implementing the if-else conditional. If the
        unwrapped returns nothing (unwrapped == nil), the else block is
        executed:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">if</strong>{' '}
          <strong className="code-keyword">let</strong> unwrapped =
          badJokeCounter(10) {'{'}
          <br />    print(unwrapped) // if it is a string
          <br />
          {'}'} <strong className="code-keyword">else</strong> {'{'}
          <br />    print(&quot;😴💤&quot;) // if its nil
          <br />
          {'}'}
          <br />‍<br />
          /* &quot;😴💤\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        The <strong className="blog-bold">Nil Coalescing </strong>attempts to
        unwrap the Optional by assigning it to a variable, returning a default
        value. Similar to when I make a weird joke, two question marks are
        typed. It is created by placing two question marks followed by a default
        value:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">let</strong> jokeLvl =
          badJokeCounter(10) ?? &quot;😴💤&quot;
          <br />
          print(jokeLvl)
          <br />‍<br />
          /* &quot;😴💤\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        If you don&#x27;t mind joke == nil, then you can try optional chaining.{' '}
        <strong className="blog-bold">Optional Chaining </strong>allows you to
        access the Optional&#x27;s properties and methods if it is not nil. If
        it is nil, the function calls after the question mark will not be
        attempted:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">let</strong> badJoke =
          badJokeCounter(9)?
          <br />    .uppercased()
          <br />‍<strong className="code-keyword">let</strong> badJoke2 =
          badJokeCounter(10)?
          <br />    .uppercased()
        </div>
      </div>
      <YoutubeWrap link="https://www.youtube.com/embed/wVlbl3Ck6NU"/>
    </BlogSection>
  );
};

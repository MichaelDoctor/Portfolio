/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import BlogSection from '../Blog/BlogSection';

const Operators = () => {
  return (
    <BlogSection title="Operators">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/BasicOperators.html"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Operators Docs
      </a>
      <div className="about-desc blog-content">
        Operator, a movie starring Martin Starr and Mae Whitman. <strong className="blog-bold">Operators</strong> perform
        mathematical, relational or logical operation. The basic{' '}
        <strong className="blog-bold">math operators</strong> would be the same
        things we learned as kids. The only difference is that we need to care
        about the type of data. Meaning, that we need to{' '}
        <strong className="blog-bold">convert </strong>some values in Swift:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">var</strong> yearDouble: Double =
          2020.2
          <br />‍<br />
          // var year = yearDouble + 1 will give you an error
          <br />‍<strong className="code-keyword">var</strong> year: Int =
          Int(yearDouble) + 1
        </div>
      </div>
      <div className="about-desc blog-content">
        We all know how to do addition, subtraction, multiplication, and
        division (most of the time 😅). Here&#x27;s the lazy way of{' '}
        <strong className="blog-bold">modifying and reassigning </strong>a
        variable:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          year += 1<br />
          year -= 1<br />
          year *= 1<br />
          year /= 1<br />
          year %= 2
        </div>
      </div>
      <div className="about-desc blog-content">
        <strong className="blog-bold">Comparison Operators </strong>are pretty
        straight forward and often used with conditionals. The only difference
        is that in Swift, we can check if Strings are equal using comparison
        operators (🤯 No more .equals(&quot;string&quot;)):
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">let</strong> hungerBefore: Int = 8
          <br />‍<strong className="code-keyword">var</strong> hungerNow: Int =
          9<br />
          print(&quot;My hunger level now is greater than my hunger level 10
          minutes before? \(hungerNow &gt; hungerBefore)&quot;)
          <br />‍<br />
          <strong className="code-keyword">var</strong> compare: Bool =
          &quot;still hungry&quot; == mood
          <br />
          compare = &quot;not hungry&quot; != mood
          <br />
          compare = hungerNow &gt;= hungerBefore
          <br />
          compare = hungerNow &lt; hungerBefore
          <br />‍<br />
          isHungry = <strong className="code-keyword">false</strong>
          <br />
          compare = !isHungry
          <br />‍<br />‍<strong className="code-keyword">let</strong>{' '}
          thatsMySecretCap: String = &quot;I&#x27;m always angr... hungry&quot;
        </div>
      </div>
    </BlogSection>
  );
};
export default Operators;

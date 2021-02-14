/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import BlogSection from '../Blog/BlogSection';

export const Loops = () => {
  return (
    <BlogSection title="Loops">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID121"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Loops Docs
      </a>
      <div className="about-desc blog-content">
        Loops! Froot loops, belt loops, loop de loops. There are many types of
        loops and many ways to create loops in Swift. Let&#x27;s start with the{' '}
        <strong className="blog-bold">for-loop </strong>that we are used to:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">for</strong> i{' '}
          <strong className="code-keyword">in</strong> 0 ..&lt;
          todaysOrder.count {'{'}
          <br />    print(todaysOrder[i])
          <br />
          {'}'}
          <br />‍<br />
          /* <br />
          &quot;C2. Hot Soy Garlic Chicken&quot;   <br />
          &quot;C9. Creamy Garlic Chicken Bite&quot;
          <br />
          &quot;C9. Creamy Garlic Chicken Bite&quot;
          <br />
          &quot;C3. Krabby Patty\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        The syntax looks different from Java but makes sense when compared to a
        Java for-loop. What if we only need the values inside of the Array?:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">for</strong> order{' '}
          <strong className="code-keyword">in</strong> todaysOrder {'{'}
          <br />    print(order)
          <br />
          {'}'}
          <br />‍<br />
          /* <br />
          &quot;C2. Hot Soy Garlic Chicken&quot;   <br />
          &quot;C9. Creamy Garlic Chicken Bite&quot;
          <br />
          &quot;C9. Creamy Garlic Chicken Bite&quot;
          <br />
          &quot;C3. Krabby Patty\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        <strong className="blog-bold">While </strong>reading this blog, you may
        have noticed that Swift differs in the use of brackets most of the time.
        The while loop is no exception to that (I&#x27;m not going to lie. I
        can&#x27;t try to be funny WHILE I&#x27;m eating...🤦):
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">var</strong> num = 0<br />‍
          <strong className="code-keyword">while</strong> num &lt; 2 {'{'}
          <br />    print(num)
          <br />    num += 1<br />
          {'}'}
          <br />‍<br />
          /* &quot;0\n1\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        As with Java, <strong className="blog-bold">continue </strong>(skips
        that iteration) and <strong className="blog-bold">break </strong>(break
        out of the loop) keywords are sometimes needed. But for real, I should
        not DO this blog WHILE eating...🤦 (Yes, it is the same as a{' '}
        <strong className="blog-bold">do-while loop </strong>in Java):
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">repeat </strong>
          {'{'}
          <br />    <strong className="code-keyword">if</strong> num == 2 {'{'}
          <br />        num -= 1<br />        
          <strong className="code-keyword">
            continue
            <br />‍
          </strong>{' '}
             {'}'}
          <br />    print(num)
          <br />    num -= 1<br />
          {'}'} <strong className="code-keyword">while</strong> num &gt;= 0
          <br />‍
          <br />
          /* &quot;1\n0\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        In Swift, &quot;break&quot; can be used on the outermost loop of a
        nested loop!:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          getMeOutThesePunsHurt: <strong className="code-keyword">for</strong>{' '}
          <strong className="code-keyword">_</strong>{' '}
          <strong className="code-keyword">in</strong> 0 ..&lt; 2 {'{'}
          <br />    <strong className="code-keyword">for</strong>{' '}
          <strong className="code-keyword">_</strong>{' '}
          <strong className="code-keyword">in</strong> 0 ..&lt; 2 {'{'}
          <br />        <strong className="code-keyword">break</strong>{' '}
          getMeOutThesePunsHurt
          <br />    {'}'}
          <br />
          {'}'}
        </div>
      </div>
    </BlogSection>
  );
};

/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import BlogSection from '../Blog/BlogSection';

export const Closures = () => {
  return (
    <BlogSection title="Closures">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/Closures.html"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Closures Docs
      </a>
      <div className="about-desc blog-content">
        A closure is an act of closing something. A{' '}
        <strong className="blog-bold">Closure </strong>in Swift is a variable
        that holds code. In part 2 of my Swift blog, I will cover these more
        in-depth, but for now, let&#x27;s learn the basics. In Java, the lambda
        expression would be the closest thing to a Closure. On its own, a
        Closure looks like this:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">let</strong> closureWithReturn ={' '}
          {'{'}
          <br />    (num: Int) -&gt; Int{' '}
          <strong>
            in
            <br />‍
          </strong>{' '}
             <strong className="code-keyword">return</strong> 34 + 35 + num
          <br />
          {'}'}
          <br />
          print(closureWithReturn(8))
          <br />
          <br />
          /* &quot;77\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        You might be wondering why you would ever create a closure when you
        could make a function. The answer is that you wouldn&#x27;t create a
        lonely closure. Closures are often inputs or outputs of functions.
        Often, they are the last input parameter for functions:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">func</strong> quickMath(
          <strong className="code-keyword">_</strong> num1: Int,{' '}
          <strong className="code-keyword">_</strong> num2: Int,{' '}
          <strong className="code-keyword">_</strong> closure:
          (Int,Int)-&gt;Int) {'{'}
          <br />    <strong className="code-keyword">let</strong> res =
          closure(num1, num2)
          <br />    print(&quot;\(num1) + \(num2) = \(res)&quot;)
          <br />
          {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        You have two methods of passing it into a function. You can follow the
        second method only if the closure is at the end of the input parameters
        (<strong className="blog-bold">Trailing Closure</strong>):
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          // writing something similar to a lonely closure
          <br />
          quickMath(400, 3, {'{'}
          <br />    (num1: Int, num2: Int) -&gt; Int{' '}
          <strong>
            in
            <br />‍
          </strong>{' '}
             print(&quot;This closure does addition&quot;)
          <br />    <strong className="code-keyword">return</strong> num1 + num2
          <br />
          {'}'})<br />
          <br />
          // preferred
          <br />
          quickMath(580, 7){'{'}
          <br />    print(&quot;This closure does addition&quot;)
          <br />    <strong className="code-keyword">return</strong> $0 + $1
          <br />
          {'}'}
          <br />
          <br />
          /* &quot;This closure does addition&quot;
          <br />
          &quot;400 + 3 = 403\n&quot; */
          <br />
          /* &quot;This closure does addition&quot;
          <br />
          &quot;580 + 7 = 587\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        Not only can you input a closure, but you can also return one:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          // func that returns a closure
          <br />‍<strong className="code-keyword">func</strong> iWant(
          <strong className="code-keyword">_</strong> str: String) -&gt;
          (String) -&gt; Void {'{'}
          <br />    <strong className="code-keyword">let</strong> start =
          &quot;I want \(str)&quot;
          <br />    <strong className="code-keyword">return</strong> {'{'}
          <br />        print(start + &quot; and \($0)!&quot;)
          <br />    {'}'}
          <br />
          {'}'}
          <br />‍<br />   // (func inputs)(closure inputs)
          <br />
          iWant(&quot;Steak&quot;)(&quot;Wine&quot;)
          <br />
          iWant(&quot;Chicken&quot;)(&quot;Mekju&quot;)
          <br />
          iWant(&quot;to eat delicious food&quot;)(&quot;lose weight&quot;)
          <br />
          <br />
          /*
          <br />
          &quot;I want Steak and Wine&quot;
          <br />
          &quot;I want Chicken and Mekju&quot;
          <br />
          &quot;I want to eat delicious food and lost weight\n&quot;*/
        </div>
      </div>
      <div className="about-desc blog-content">
        It does take a while to get used to it. Here&#x27;s how I tricked myself
        into understanding it. Look at the FedEx logo:
        <br />
      </div>
      <div
        className="blog-img"
        style={{
          backgroundImage: `url("https://www.fedex.com/content/dam/fedex-com/logos/FedEx-Logo.png")`,
        }}
      ></div>
      <div className="about-desc blog-content">
        Look in between the capital E and x. You can see an arrow. Now that
        you&#x27;ve seen the arrow, it can never be unseen. Now, imagine
        everything in between the first arrow and the open brace as what&#x27;s
        returned. So if you ever see more than one arrow you&#x27;ll think of
        FedEx, the vast amount of times that I&#x27;ve typed the word arrow
        in this paragraph, and returning Closures. Fun fact, when an Air Nomad receives their blue arrow
        tattoos when they master air bending (I recommend watching Avatar: the
        Last 💨 if you haven&#x27;t already).
        <br />
      </div>
    </BlogSection>
  );
};

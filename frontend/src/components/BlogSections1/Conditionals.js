/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import BlogSection from '../Blog/BlogSection';

export const Conditionals = () => {
  return (
    <BlogSection title="Conditionals">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID127"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Conditionals Docs
      </a>
      <div className="about-desc blog-content">
        <strong className="blog-bold">Conditionals</strong>, if I&#x27;m so
        hungry, why not just get a snack? Well, the answer to that is simple. My
        order comes in 10 minutes, and it&#x27;ll taste so much better if I
        wait. Anyway, we can use the{' '}
        <strong className="blog-bold">Logical Operators AND </strong>
        &quot;&amp;&amp;&quot; and <strong className="blog-bold">OR </strong>
        &quot;||&quot; in the same way we use it in Java. Here is an example of
        an ugly <strong className="blog-bold">if-else statement</strong>:<br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">if</strong> mood == &quot;still
          hungry&quot; || me.feeling == &quot;hangry&quot; {'{'}
          <br />    print(&quot;Check phone for delivery time 😢&quot;)
          <br />
          {'}'} <strong className="code-keyword">else</strong>{' '}
          <strong className="code-keyword">if</strong> mood == &quot;full&quot;
          &amp;&amp; !isHungry {'{'}    <br />    print(&quot;&quot;&quot;
          <br />        Take a nap!
          <br />        You have food coma🥱
          <br />        &quot;The drowsy sleepy feeling you get after eating a
          large meal&quot; &quot;&quot;&quot;)
          <br />
          {'}'}
          <strong className="code-keyword">else </strong>
          {'{'}    <br />    print(&quot;You are always hungry 🍗&quot;)
          <br />
          {'}'}
          <br />‍<br />
          /* &quot;Check phone for delivery time 😢\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        Now let&#x27;s make a{' '}
        <strong className="blog-bold">Ternary Operator </strong>(if mood is not
        &quot;still hungry&quot;, return &quot;Check phone for delivery time
        😢&quot; else, return &quot;sleeeepyyy 😴&quot;. Check the location of
        the question mark and colon!):
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          print(mood != &quot;still hungry&quot; ?<br />        &quot;Check
          phone for delivery time 😢&quot; : &quot;sleeeepyyy 😴&quot;)
          <br />‍<br />
          /* &quot;sleeeepyyy 😴\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        Here is a Switch case:
        <br />
      </div>
      <div
        className="blog-img"
        style={{
          backgroundImage: `url("https://images-na.ssl-images-amazon.com/images/I/81%2BcJVR3%2B0L._AC_SL1500_.jpg")`,
        }}
      ></div>
      <div className="about-desc blog-content">
        That&#x27;s the wrong Switch case 🤦. Another conditional that we can
        use is a <strong className="blog-bold">Switch-case</strong>. If
        we&#x27;re trying to match a possible value of a variable, this would be
        our best option:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">switch</strong> mood {'{'}
          <br />    <strong className="code-keyword">case</strong>{' '}
          &quot;hungry&quot;:
          <br />        print(&quot;as always&quot;)
          <br />    <strong className="code-keyword">case</strong>{' '}
          &quot;sleeeepyyy 😴&quot;:
          <br />        mood = &quot;Wooooo the food is here now!!!&quot;
          <br />        print(mood)
          <br />    <strong className="code-keyword">default</strong>:<br />    
             print(&quot;I love food 😂&quot;)
          <br />
          {'}'}
          <br />‍<br />
          /* &quot;Wooooo the food is here now!!!\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        Switch-cases can also use ranges if the values are numeric.{' '}
        <strong className="blog-bold">Range operators </strong>are created by
        typing an ellipsis &quot;...&quot; or &quot;..&lt;&quot; between
        numbers:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">let</strong> happinessLevel: Int = 10
          <br />‍<strong className="code-keyword">
            switch
          </strong> happinessLevel {'{'}
          <br />    <strong className="code-keyword">case</strong> 1 ... 3:
          <br />        print(&quot;1 - 3&quot;)
          <br />    <strong className="code-keyword">case</strong> 4 ..&lt; 7:
          <br />        print(&quot;4 - 6&quot;)
          <br />    <strong className="code-keyword">case</strong> 7 ..&lt; 9:
          <br />        print(&quot;7 - 8&quot;)
          <br />    <strong className="code-keyword">case</strong> 10:
          <br />        print(&quot;Time to eat 😁&quot;)
          <br />    <strong className="code-keyword">default</strong>:<br />    
             print(&quot;Wooooo the hunger related code is over!!&quot;)
          <br />
          {'}'}
          <br />‍<br />
          /* &quot;Time to eat 😁\n&quot; */
        </div>
      </div>
    </BlogSection>
  );
};

/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import BlogSection from '../Blog/BlogSection';

export const Functions = () => {
  return (
    <BlogSection title="Functions">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/Functions.html"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Function Docs
      </a>
      <div className="about-desc blog-content">
        Congratulations! You survived the onslaught of horrible jokes from the
        previous section. Now that I&#x27;ve finished eating and my brain is{' '}
        <strong className="blog-bold">FUNCTION</strong>ing ... 🤦:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">func</strong> innerThoughts(str:
          String = &quot;disappointing transitions&quot;) {'{'}
          <br />    print(&quot;I&#x27;m so \(str) &quot;)
          <br />
          {'}'}
          <br />‍<strong className="code-keyword">func</strong>{' '}
          innerThoughts2(str: String = &quot;full&quot; ) -&gt; Void {'{'}
          <br />    print(&quot;I&#x27;m so \(str) &quot;)
          <br />
          {'}'}
          <br />‍<br />
          innerThoughts(str: &quot;full&quot;)
          <br />
          innerThoughts2()
          <br />‍<br />
          /* &quot;I&#x27;m so full\n&quot; */
          <br />
          /* &quot;I&#x27;m so full\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        Can you spot the differences between the two? They both do the same
        thing! The arrow &quot;-&gt; Void&quot; is the same as saying that the
        function will not return anything. It&#x27;s like how you will not
        return if I make another bad transition. The other difference is that
        the second call did not pass any arguments but still printed the same
        thing. That is because we set a default value for the &quot;str&quot;
        parameter.
        <br />
      </div>
      <div className="about-desc blog-content">
        As you can see, we needed to put &quot;str: &quot; if we passed an
        argument into our function. There is a way to avoid this. We would do
        this by setting an{' '}
        <strong className="blog-bold">external and internal name </strong>for
        our parameters. The internal name is like the name that people call me
        before suffering through my transitions. The external name (underscore)
        is what they&#x27;ll call me after (nothing, and I don&#x27;t blame them
        😂):
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">func</strong> sleepyLevels(
          <strong className="code-keyword">_</strong> lvl: Int) -&gt; String{' '}
          {'{'}
          <br />    <strong className="code-keyword">return</strong>{' '}
          &quot;Sleepiness out of 10 = \(lvl)&quot;
          <br />
          {'}'}
          <br />
          print(sleepyLevels(10))
          <br />‍<br />
          /* &quot;Sleepiness out of 10 = 10\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        If you wanted to have a{' '}
        <strong className="blog-bold">Variadic function </strong>(a function
        that can take a variable number of arguments), place an ellipsis
        &quot;...&quot; after the datatype:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">func</strong> myMoodsToday(
          <strong className="code-keyword">_</strong> moods: String...) {'{'}
          <br />    <strong className="code-keyword">for</strong> mood{' '}
          <strong className="code-keyword">in</strong> moods {'{'}
          <br />        print(mood)
          <br />    {'}'}
          <br />
          {'}'}
          <br />
          myMoodsToday(&quot;sleepy&quot;, &quot;Hungry&quot;, &quot;still
          hungry&quot;, &quot;happy&quot;, &quot;disappointed&quot;,
          &quot;sleepy&quot;)
          <br />‍<br />
          /* &quot;
          <br />
          sleepy
          <br />
          Hungry
          <br />
          still hungry
          <br />
          happy
          <br />
          disappointed
          <br />
          sleepy\n&quot; */
        </div>
      </div>
    </BlogSection>
  );
};

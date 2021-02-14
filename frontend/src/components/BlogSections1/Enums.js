/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import BlogSection from '../Blog/BlogSection';

export const Enums = () => {
  return (
    <BlogSection title="Enumerations | Error Handling">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/Enumerations.html"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Enums Docs
      </a>
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID515"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Error Handling Docs
      </a>
      <div className="about-desc blog-content">
        The e num is called Euler&#x27;s number and has a value of 2.718...
        <strong className="blog-bold"> Enumerations </strong>or{' '}
        <strong className="blog-bold">Enums </strong>in Swift have nothing to do
        with that natural number. They allow us to define data types or group
        related data: <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">enum</strong> BadJokeType {'{'}
          <br />    <strong className="code-keyword">case</strong> tolerable
          <br />    <strong className="code-keyword">case</strong> tooMuch(amt:
          Int)
          <br />    <strong className="code-keyword">case</strong> painful
          <br />
          {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        Think of the cases in an enum as static properties of a Java class.
        Enums are useful when a variable can only be a few specific values. An
        enum case can also take parameters. Let&#x27;s write a function that
        takes our new type as input:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">func</strong> badJokeIndicator(
          <strong className="code-keyword">_</strong> val: BadJokeType) -&gt;
          String? {'{'}
          <br />    <strong className="code-keyword">var</strong> res: String?
          <br />    <strong className="code-keyword">switch</strong> val {'{'}
          <br />        <strong className="code-keyword">
            case
          </strong> .tooMuch( <strong className="code-keyword">let</strong> amt
          ) <strong className="code-keyword">where</strong> amt == 3000:
          <br />            res = &quot;I love you \(amt)&quot;
          <br />        <strong className="code-keyword">case</strong>{' '}
          .tolerable, .tooMuch:
          <br />            res ={' '}
          <strong className="code-keyword">
            nil
            <br />‍
          </strong>{' '}
                 <strong className="code-keyword">case</strong> .painful:
          <br />            res = &quot;I think you&#x27;re tired... Go to
          sleep&quot;
          <br />    {'}'}
          <br />    <strong className="code-keyword">return</strong> res
          <br />
          {'}'}
          <br />‍<br />
          // You can write these as one line or spaced out
          <br />
          print(
          <br />    badJokeIndicator(
          <br />        BadJokeType
          <br />            .tooMuch(amt: 3000)
          <br />    ) ?? &quot;I am Iron Man 😢&quot;
          <br />)<br />‍<br />
          print(
          <br />    badJokeIndicator(
          <br />        BadJokeType
          <br />            .painful
          <br />    ) ?? &quot;Not too bad yet!&quot;
          <br />)<br />
          /* &quot;I love you 3000\n&quot; */
          <br />
          /* &quot;I think you&#x27;re tired... Go to sleep\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        It is common to use a switch-case with enums. The switch-case must be{' '}
        <strong className="blog-bold">Exhaustive</strong> (cover all enum
        cases). A switch-case for enumerations must include all Fourteen
        million, six hundred, and five possible outcomes 😈👌💥 (don&#x27;t make
        an enum with that many 😅). That is why you can see &quot;tooMuch&quot;
        in two cases.
        <br />
      </div>
      <div className="about-desc blog-content">
        Enums can be used to quote the Avengers using a switch-case or could be
        used to create an error:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">enum</strong> JokeNotFound: Error{' '}
          {'{'}
          <br />    <strong className="code-keyword">case</strong> joke404
          <br />
          {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        Now, you may be wondering, &quot;did he cry watching Avengers?&quot; or
        &quot;is it possible to{' '}
        <strong className="blog-bold">throw an error </strong>in Swift?&quot;.
        The answer is yes. You can also use the{' '}
        <strong className="blog-bold">throws </strong>keyword and create the
        Swift version of a{' '}
        <strong className="blog-bold">try-catch block</strong>:<br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">func</strong> ThrowsJoke(){' '}
          <strong className="code-keyword">throws</strong> -&gt; Void{'{'}
          <br />    <strong className="code-keyword">throw</strong>{' '}
          JokeNotFound.joke404
          <br />
          {'}'}
          <br />‍<br />
          <strong className="code-keyword">do </strong>
          {'{'}
          <br />    <strong className="code-keyword">try</strong> ThrowsJoke()
          <br />    print(&quot;Woo didn&#x27;t force a joke&quot;)
          <br />
          {'}'} <strong className="code-keyword">catch </strong>
          {'{'}
          <br />    print(&quot;Do not TRY to THROW a pun! We will CATCH
          it...🤦&quot;)
          <br />
          {'}'}
        </div>
      </div>
    </BlogSection>
  );
};

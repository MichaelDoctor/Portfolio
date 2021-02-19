/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import BlogSection from '../Blog/BlogSection';

export const Dictionaries = () => {
  return (
    <BlogSection title="Dictionaries | Tuples">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/CollectionTypes.html#ID113"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Basic Dictionary Docs
      </a>
      <a
        href="https://developer.apple.com/documentation/swift/dictionary"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Detailed Dictionary Docs
      </a>
      <a
        href="https://docs.swift.org/swift-book/ReferenceManual/Types.html#ID448"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Tuples Docs
      </a>
      <div className="about-desc blog-content">
        Everything that I&#x27;ve introduced so far has been basic programming
        concepts that can also be found in Java, sprinkled with bad jokes and
        transitions. The following sections will cover more complex programming
        concepts, but there is no need to worry! The bad jokes are here to stay
        😈.
        <br />
      </div>
      <div className="about-desc blog-content">
        In Swift and many other programming languages, we have a complex data
        type similar to a dictionary. In Java, this would be called a HashMap.
        In Swift, its called a{' '}
        <strong className="blog-bold">Dictionary </strong>
        (key-value pair collection):
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">var</strong> wiki: [String: String] =
          [
          <br />    &quot;food coma&quot;: &quot;Postprandial somnolence or food
          coma is a normal state of drowsiness or lassitude following a
          meal&quot;,
          <br />    &quot;hangry&quot;: &quot;bad-tempered or irritable as a
          result of hunger&quot;
          <br />]<br />‍<br />
          // empty dictionaries
          <br />‍<strong className="code-keyword">var</strong> myStomach:
          [String: String] = [:]
          <br />‍<strong className="code-keyword">var</strong> myStomach2 =
          [String: String]()
        </div>
      </div>
      <div className="about-desc blog-content">
        Now to get an item from the menu, you would call that menu item in
        brackets. But, if you tried to order something that&#x27;s not in the
        Dictionary, you would get <strong className="blog-bold">nil </strong>
        (nil == null). We could prevent this by providing a default value:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          wiki[&quot;food coma&quot;]
          <br />
          wiki[&quot;Bangers and mash&quot;] // nil
          <br />
          wiki[&quot;Bangers and mash&quot;, default: &quot;Some type of
          food&quot;]
        </div>
      </div>
      <div className="about-desc blog-content">
        You may be wondering, &quot;why didn&#x27;t he just delete his bad
        jokes?&quot; or &quot;what if I wanted to store different data types in
        my Dictionary?&quot;. Unfortunately, we can&#x27;t do either. But we
        have a solution to the second question! We can create a{' '}
        <strong className="blog-bold">Tuple </strong>and get a value:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">var</strong> me = (firstName:
          &quot;Michael&quot;,
          <br />          lastName: &quot;Doctor&quot;,
          <br />          feeling: &quot;feelings&quot;,
          <br />          sleepyLevel: 10)
          <br />
          me.feeling
        </div>
      </div>
    </BlogSection>
  );
};

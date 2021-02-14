import React from 'react';
import BlogSection from '../Blog/BlogSection';

export const Protocols = () => {
  return (
    <BlogSection title="Protocols">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/Protocols.html"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Protocols Docs
      </a>
      <div className="about-desc blog-content">
        A Swift <strong className="blog-bold">Protocol </strong>is a set of
        required properties and methods that a Struct, Enum, or Class must
        implement. Think of a Protocol as a blueprint similar to the Krabby
        Patty secret formula. A Protocol in Java would be an interface:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">protocol</strong> KrabbyPattyFormula{' '}
          {'{'}
          <br />    <strong className="code-keyword">var</strong> ingredients:
          [String] {'{'} <strong className="code-keyword">get</strong>{' '}
          <strong className="code-keyword">set</strong> {'}'}
          <br />    <strong className="code-keyword">var</strong> cookingTime:
          Int {'{'} <strong className="code-keyword">get</strong>{' '}
          <strong className="code-keyword">set</strong> {'}'}
          <br />    <strong className="code-keyword">func</strong>{' '}
          ayeAyeCaptain()
          <br />
          {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        The <strong className="blog-bold">get</strong> and{' '}
        <strong className="blog-bold">set</strong> in between the braces
        indicate that the property can be acquired and mutated.
        <br />
      </div>
    </BlogSection>
  );
};

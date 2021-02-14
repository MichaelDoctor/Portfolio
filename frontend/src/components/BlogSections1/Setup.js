import React from 'react';
import BlogSection from '../Blog/BlogSection';

const Setup = () => {
  return (
    <BlogSection title="Setup">
      <div className="about-desc blog-content">
        This blog will only be of use if you have a Mac computer with macOS
        10.15 or higher. So join me on the dark side and get trapped in the
        Apple ecosystem! 😈
      </div>
      <div
        className="blog-img"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1957&q=80")`,
        }}
      ></div>
      <div className="about-desc blog-content">
        If you don&#x27;t want to spend your money on a Mac computer, you can
        always try running a VMware or VirtualBox for macOS. You can also try
        the Swift programming language here:
      </div>
      <a
        href="https://www.tutorialspoint.com/compile_swift_online.php"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Swift Online Program
      </a>
      <div className="about-desc blog-content">
        So with that out of the way, let&#x27;s install the Xcode IDE:
        <br />
      </div>
      <ol className="blog-list">
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Go to the App Store
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Install Xcode
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Wash your hands
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Grab a snack because that install will take a while
          </div>
        </li>
      </ol>
      <div className="about-desc blog-content">
        As a child, I played{' '}
        <a
          href="http://www.push2play.ca/games/grounders/"
          target="_blank"
          rel="noopener noreferrer"
          className="blog-text-link"
        >
          Grounders
        </a>{' '}
        with my friends on a playground. The first thing we will do is create a
        &quot;Playground&quot; file to play with ourselves and Swift:
        <br />
      </div>
      <ol className="blog-list">
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Open up Xcode
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Go to the menu bar up top
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Press &quot;File&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Press &quot;New&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Press &quot;Playground&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Choose the &quot;Blank&quot; Template
          </div>
        </li>
      </ol>
      <div
        className="blog-img"
        style={{
          backgroundImage: `url("https://uploads-ssl.webflow.com/5f9a24556170f63ee516953f/6026005604cd51a8e5d83e75_1.png")`,
        }}
      ></div>
    </BlogSection>
  );
};
export default Setup;

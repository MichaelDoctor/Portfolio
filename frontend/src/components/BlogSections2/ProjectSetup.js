import React from 'react';
import BlogSection from '../Blog/BlogSection';

const ProjectSetup = () => {
  return (
    <BlogSection title="Project Setup">
      <div className="about-desc blog-content">
        Let&#x27;s start saving my fellow food pickers:
      </div>
      <ol className="blog-list">
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Open Xcode
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Click &quot;Create a new Xcode Project&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Choose iOS App
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Click &quot;Next&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Enter &quot;FoodPickerDemo&quot; for the Product Name
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Enable &quot;Use Core Data&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Click &quot;Next&quot;
          </div>
        </li>
      </ol>
      <div
        className="blog-img"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/hsse18xji/image/upload/v1618178685/portfolio/images/bg/ProjectSetup_nbepys.png")`,
        }}
      ></div>
      <div className="about-desc blog-content">
        In the project setup, we enabled Core Data.{' '}
        <strong className="blog-bold">Core Data</strong> is a framework for
        connected objects and is not actually a database. All we need to know
        for now is that it will allow us to manipulate and keep our data
        persistent.
        <br />
      </div>
    </BlogSection>
  );
};
export default ProjectSetup;

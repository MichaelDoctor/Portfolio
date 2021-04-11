import React from 'react';
import BlogSection from '../Blog/BlogSection';

const ViewWillAppear = () => {
  return (
    <BlogSection title="View Controller: View Will Appear">
      <div className="about-desc blog-content">
        In Xcode, type &quot;
        <strong className="blog-bold">viewWillAppear</strong>
        &quot; and select the first suggestion. This function will run whatever
        is inside every time this view appears. This is needed if there is an
        update or delete that occurred in the DetailViewController. By calling
        our getAllItems function, the foods array will be updated and the table
        view will be reloaded:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
           <strong className="code-keyword">override func</strong>{' '}
          viewWillAppear(_ animated: Bool) {'{'}
          <br />
                  getAllItems()
          <br />    {'}'}
        </div>
      </div>
    </BlogSection>
  );
};
export default ViewWillAppear;

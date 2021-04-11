import React from 'react';
import BlogSection from '../Blog/BlogSection';

const DeleteFunction = () => {
  return (
    <BlogSection title="Detail View Controller: Delete Function">
      <div className="about-desc blog-content">
        Let&#x27;s create the function that will be used when the user clicks
        the delete button. This function can be placed anywhere below the
        viewDidLoad function:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">func</strong> deleteItem(item:
          FoodItem) {'{'}
          <br />
                  context.delete(item)
          <br />        <strong className="code-keyword">do</strong> {'{'}
          <br />            <strong class="code-keyword">try</strong>{' '}
          context.save()
          <br />        {
            '}'
          } <strong className="code-keyword">catch</strong> {'{'}
          <br />
                      print(&quot;deleteItem Error&quot;)
          <br />        {'}'}
          <br />    {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        This function is also pretty simple. The delete function takes the item
        as a parameter. The item is deleted using the delete method of our
        context and attempts to save the context without that item.
        <br />
      </div>
    </BlogSection>
  );
};
export default DeleteFunction;

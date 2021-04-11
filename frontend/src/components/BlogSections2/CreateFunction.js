import React from 'react';
import BlogSection from '../Blog/BlogSection';

const CreateFunction = () => {
  return (
    <BlogSection title="View Controller: Create Function">
      <div className="about-desc blog-content">
        Let&#x27;s create the function that will be used when the user clicks
        tries to add a new FoodItem. This function can be placed anywhere below
        the viewDidLoad function:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">func</strong> createItem(name:
          String) {'{'}
          <br />        <strong className="code-keyword">let</strong> newItem =
          FoodItem(context: context)
          <br />
                  newItem.name = name
          <br />        <strong className="code-keyword">do</strong> {'{'}
          <br />            <strong class="code-keyword">try</strong>{' '}
          context.save()
          <br />
                      getAllItems()
          <br />        {
            '}'
          } <strong className="code-keyword">catch</strong> {'{'}
          <br />
                      print(&quot;createItem Error&quot;)
          <br />        {'}'}
          <br />    {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        This creates a new item using the context and sets the name of the item
        to the parameter value. It then tries to save the context. If
        successful, the getAllItems() function is called to reload the table
        view.
        <br />
      </div>
    </BlogSection>
  );
};
export default CreateFunction;

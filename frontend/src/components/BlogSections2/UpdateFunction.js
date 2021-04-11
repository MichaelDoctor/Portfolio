import React from 'react';
import BlogSection from '../Blog/BlogSection';

const UpdateFunction = () => {
  return (
    <BlogSection title="Detail View Controller: Update Function">
      <div className="about-desc blog-content">
        We will start working on the DetailViewController.swift file. Let&#x27;s
        create the function that will be used when the user clicks the edit
        button. This function can be placed anywhere below the viewDidLoad
        function:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">func</strong> updateItem(
          <br />
          item: FoodItem, <br />
          newName: String) {'{'}
          <br />
                  item.name = newName
          <br />        <strong className="code-keyword">do</strong> {'{'}
          <br />            <strong class="code-keyword">try</strong>{' '}
          context.save()
          <br />        {'}'} <strong className="code-keyword">catch</strong> {'{'}
          <br />
                      print(&quot;updateItem Error&quot;)
          <br />        {'}'}
          <br />    {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        This function is pretty simple. The update function takes the item and the
        new name of the item as parameters. The name property of the item is
        updated to the new name. The function then attempts to save the updated
        item. <br />
      </div>
    </BlogSection>
  );
};
export default UpdateFunction;

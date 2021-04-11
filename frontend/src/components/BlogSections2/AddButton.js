import React from 'react';
import BlogSection from '../Blog/BlogSection';

const AddButton = () => {
  return (
    <BlogSection title="View Controller: Add Tapped">
      <div className="about-desc blog-content">
        In this section, we will add functionality to our add button in the
        Navigation Controller. As stated before, we need to create Objective C
        functions for those buttons. This sounds intimidating, but has a very
        simple solution. All we need to do is type &quot;
        <strong className="blog-bold">@objc</strong>&quot; before our usual
        function creation:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">@objc func</strong> addTapped() {'{'}
          <br />        <strong className="code-keyword">let</strong> alert =
          UIAlertController(
          <br />
                  title: &quot;New Food&quot;, <br />
                  message: &quot;Enter new food choice&quot;, <br />
                  preferredStyle: .alert)
          <br />‍<br />
                  alert.addTextField(
          <br />        configurationHandler:{' '}
          <strong className="code-keyword">nil</strong>
          <br />        )<br />‍<br />
                  alert.addAction(
          <br />
                  UIAlertAction(
          <br />
                  title: &quot;Submit&quot;, <br />        style: .default){'{'}
          <br />            [<strong className="code-keyword">weak self</strong>
          ] <strong className="code-keyword">_ in</strong>
          <br />            <strong class="code-keyword">guard let</strong>{' '}
          field = alert.textFields?.first, <br />           {' '}
          <strong class="code-keyword">let</strong> text = field.text, <br />   
                  !text.isEmpty <strong class="code-keyword">else</strong> {'{'}{' '}
          <strong className="code-keyword">return</strong> {'}'}
          <br />            <strong class="code-keyword">self</strong>?
          .createItem( name: text)
          <br />        {'}'})<br />‍<br />        present( alert, animated:{' '}
          <strong className="code-keyword">true</strong>)<br />    {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        First we are creating a UIAlertController object and assigning it to the
        alert constant. A text field is added to the alert object. A submit
        button is also created with a handler closure that is similar to the
        edit button shown earlier. The difference would be that this function is
        calling the createItem function.
        <br />
      </div>
    </BlogSection>
  );
};
export default AddButton;

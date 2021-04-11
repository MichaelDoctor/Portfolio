import React from 'react';
import BlogSection from '../Blog/BlogSection';

const DeleteButton = () => {
  return (
    <BlogSection title="Detail View Controller: Delete Touch Up Inside">
      <div className="about-desc blog-content">
        The delete button will also show an alert if it is touched up inside.
        After being touched up inside, it will ask for consent to delete the
        food item from our Core Data:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">@IBAction func</strong>{' '}
          deletePressed(_ sender: UIButton) {'{'}
          <br />        <strong className="code-keyword">let</strong> alert =
          UIAlertController(
          <br />
                  title: &quot;Delete&quot;, <br />
                  message: &quot;Are you sure you want to delete &#x27;\(
          item?.name! ?? &quot;item&quot;)&#x27;?&quot;, <br />
                  preferredStyle: .alert)
          <br />‍<br />
                  alert.addAction(
          <br />
                  UIAlertAction(
          <br />
                  title: &quot;No&quot;, <br />
                  style: .cancel))
          <br />‍<br />
                  alert.addAction(
          <br />
                  UIAlertAction(
          <br />
                  title: &quot;Yes&quot;, <br />        style: .destructive)
          {'{'}
          <br />            [<strong className="code-keyword">weak self</strong>
          ] <strong className="code-keyword">_ in</strong>
          <br />‍<br />           {' '}
          <strong className="code-keyword">self</strong>?
          <br />            .deleteItem(item: (
          <strong className="code-keyword">self</strong>?.item)!)
          <br />‍<br />           {' '}
          <strong className="code-keyword">self</strong>?
          <br />
                      .navigationController?
          <br />
                      .popToRootViewController(
          <br />            animated:{' '}
          <strong className="code-keyword">true</strong>
          )
          <br />        {'}'})<br />        present( alert, animated:{' '}
          <strong className="code-keyword">true</strong> )<br />    {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        The code is similar to the editPressed function before this. In this
        function, the deleteItem function is called and the view is returned to
        the root view controller (ViewController.swift). This code block
        completes our DetailViewController file.
        <br />
      </div>
    </BlogSection>
  );
};
export default DeleteButton;

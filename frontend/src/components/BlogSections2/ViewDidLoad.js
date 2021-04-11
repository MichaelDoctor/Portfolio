import React from 'react';
import BlogSection from '../Blog/BlogSection';

const ViewDidLoad = () => {
  return (
    <BlogSection title="View Controller: View Did Load">
      <div className="about-desc blog-content">
        In the View Controller, we will not create buttons to touch up inside.
        Instead, we will add buttons to the Navigation Controller. We will need
        to make the following changes to our viewDidLoad function:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">private var</strong> foods =
          [FoodItem]()
          <br />
          <br />
          <strong className="code-keyword">
            override func
          </strong> viewDidLoad() {'{'}
          <br />        <strong className="code-keyword">super</strong>
          .viewDidLoad()
          <br />
                  title = &quot;Food Picker&quot;
          <br />‍<br />
                  navigationItem
          <br />
                  .leftBarButtonItem = UIBarButtonItem(
          <br />
                  barButtonSystemItem: .add,
          <br />         target: <strong className="code-keyword">self</strong>,
          <br />
                   action: #selector( addTapped ))
          <br />‍<br />
                  navigationItem
          <br />
                  .rightBarButtonItem = UIBarButtonItem(
          <br />
                  barButtonSystemItem: .play,
          <br />         target: <strong className="code-keyword">self</strong>,
          <br />
                   action: #selector(playTapped))
          <br />‍<br />
                  getAllItems()
          <br />    {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        Above our viewDidLoad function, we create an empty array of FoodItems
        property called &quot;foods&quot;. Inside of the viewDidLoad function,
        we create add and play buttons on the left and right of the Navigation
        Controller by setting their respective navigationItem property. These
        buttons will call <strong className="blog-bold">Objective C</strong>{' '}
        functions that we have not created yet. Lastly, our getAllItems function
        is called to load our context data and fill the foods array. Now you may
        be wondering, &quot;Do we need to know Objective C?!&quot;. Creating an
        Objective C function is made easily and will be shown later.
        <br />
      </div>
    </BlogSection>
  );
};
export default ViewDidLoad;

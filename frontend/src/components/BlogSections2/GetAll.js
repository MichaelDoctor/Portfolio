import React from 'react';
import BlogSection from '../Blog/BlogSection';

const GetAll = () => {
  return (
    <BlogSection title="View Controller: Get All Function">
      <div className="about-desc blog-content">
        Now we will work on the ViewController.swift file. Let&#x27;s create the
        function that will get all of the context data and reloads the table
        view when the data is fetched. This function can be placed anywhere
        below the viewDidLoad function:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">func</strong> getAllItems() {'{'}
          <br />        <strong className="code-keyword">do</strong> {'{'}
          <br />            foods = <strong class="code-keyword">
            try
          </strong>{' '}
          context.fetch( FoodItem.fetchRequest() )<br />           
          DispatchQueue.main.async {'{'}
          <br />                <strong className="code-keyword">self</strong>
          .tableView.reloadData()
          <br />            {'}'}
          <br />        {
            '}'
          } <strong className="code-keyword">catch</strong> {'{'}
          <br />
                      print(&quot;getAllItems error&quot;)
          <br />        {'}'}
          <br />    {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        This function attempts to fetch all of the data from the context
        relating to our FoodItem entity. If the fetch is successful, the data
        populates our array of FoodItems (shown later in the View Did Load
        section) and the table view reloads its data. The{' '}
        <strong className="blog-bold">Dispatch.Queue.main.async</strong> is
        required because anything related to UI that is not in viewDidLoad must
        be put into the main thread.
        <br />
      </div>
    </BlogSection>
  );
};
export default GetAll;

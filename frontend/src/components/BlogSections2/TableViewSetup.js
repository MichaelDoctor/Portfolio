import React from 'react';
import BlogSection from '../Blog/BlogSection';

const TableViewSetup = () => {
  return (
    <BlogSection title="View Controller: Table View Setup">
      <div className="about-desc blog-content">
        For UITableView to display data, we must set up a few function.
        Thankfully, we can let Xcode&#x27;s auto complete setup the functions
        for us! In Xcode, type &quot;
        <strong className="blog-bold">numberOfRowsInSection</strong>&quot; and
        select the suggestion starting with tableView and add the following:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">override func</strong> tableView(
          <br />
          <strong className="code-keyword">_</strong> tableView: UITableView,{' '}
          <br />
          numberOfRowsInSection section: Int) -&gt; Int {'{'}
          <br />        <strong class="code-keyword">return</strong>{' '}
          foods.count    <br />
          {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        In this function, we simply need to return the number of items in our
        FoodItem array. This count is sent from our function to the UITableView
        to tell it how many rows it needs to have in a section.
        <br />
      </div>
      <div className="about-desc blog-content">
        Now we need to populate the cells of our table view with the data in our
        foods array. This can be done by typing &quot;
        <strong className="blog-bold">cellForRowAt</strong>&quot; and selecting
        the suggestion that starts with tableView and add the following:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">override func</strong> tableView(
          <br />
          <strong className="code-keyword">_</strong> tableView: UITableView,
          <br /> cellForRowAt indexPath: IndexPath) -&gt; UITableViewCell {'{'}
          <br />        <strong class="code-keyword">let</strong> cell =
          tableView
          <br />
                  .dequeueReusableCell(
          <br />
                  withIdentifier: &quot;Food Cell&quot;, <br />
                  for: indexPath)
          <br />‍<br />        <strong className="code-keyword">
            let
          </strong>{' '}
          food = foods[indexPath.row]
          <br />
                  cell.textLabel?.text = food.name
          <br />        <strong className="code-keyword">return</strong> cell
          <br />    {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        This function puts our data into the cells of our table view. A cell
        object is created using the{' '}
        <strong className="blog-bold">.dequeueReusableCell()</strong> method.
        This requires the <strong className="blog-bold">Cell Identifier</strong>{' '}
        we set in the Storyboard section and the indexPath.row. The{' '}
        <strong className="blog-bold">indexPath.row</strong> is the row that the
        cell will be placed into. This is similar to the specific index of an
        array and is used to set the name of the cells. The cell is then
        returned and inserted into a specific place in our table view.
        <br />
      </div>
      <div className="about-desc blog-content">
        The final function we need to setup our table view is the &quot;
        <strong className="blog-bold">didSelectRowAt</strong>&quot;:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">override func</strong> tableView(
          <br />
          <strong>_</strong> tableView: UITableView, <br />
          didSelectRowAt indexPath: IndexPath) {'{'}
          <br />        <strong className="code-keyword">if let</strong>{' '}
          detailViewController = storyboard?
          <br />
                  .instantiateViewController(
          <br />        identifier: &quot;Food Detail&quot;){' '}
          <strong className="code-keyword">as</strong>? DetailViewController{' '}
          {'{'}
          <br />‍<br />
                      detailViewController.item = foods[indexPath.row]
          <br />‍<br />
                      navigationController?
          <br />
                      .pushViewController(
          <br />
                      detailViewController, <br />            animated:{' '}
          <strong className="code-keyword">true</strong>)
          <br />        {'}'}
          <br />    {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        This function runs the code inside whenever a cell is selected. The
        if-let statement instantiates our DetailViewController using the{' '}
        <strong className="blog-bold">Storyboard ID</strong> that we set in the
        Storyboard section. If it passes the if-let statement, the item property
        that we set in our DetailViewController will be sent the selected cell.
        After, the navigationController will push the view to the
        DetailViewController that we created earlier.
        <br />
      </div>
    </BlogSection>
  );
};
export default TableViewSetup;

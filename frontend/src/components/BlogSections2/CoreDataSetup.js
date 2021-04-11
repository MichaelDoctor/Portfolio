import React from 'react';
import BlogSection from '../Blog/BlogSection';
import YoutubeWrap from '../Blog/YoutubeWrap';

const CoreDataSetup = () => {
  return (
    <BlogSection title="Core Data Setup">
      <div className="about-desc blog-content">
        Now let's set up our Core Data:
        <br />
      </div>
      <ol className="blog-list">
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            In the <strong className="blog-bold">Navigator</strong> (far left
            window pane) <br />
            select the &quot;FoodPicker.xcdatamodeld&quot; file
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Click &quot;Add Entity&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Rename the added entity to &quot;FoodItem&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Click &quot;Add Attribute&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Enter &quot;name&quot; for the attribute
            <br />
            and &quot;String&quot; for the type
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Click the &quot;FoodItem&quot; entity
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            In the <strong className="blog-bold">Inspectors</strong> (far right
            window pane)
            <br />
            go to the &quot;Data Model Inspector&quot; tab and change
            <br />
            &quot;codegen&quot; to &quot;Manual/None&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            At the very top of the screen
            <br />
            Click &quot;Editor&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Click &quot;Create NSManagedObject subclass&quot; and accept all
            defaults until 2 files are created
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Drag the 2 new files inside the &quot;FoodPicker&quot; folder
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Select both files, Right-click and click &quot;New Group from
            Selection&quot;
          </div>
        </li>
      </ol>
      <YoutubeWrap link="https://www.youtube.com/embed/Qr-37gYgjr0"/>
      <div className="about-desc blog-content">
        In our project, all of our code will go into the{' '}
        <strong className="blog-bold">ViewController.swift</strong> file and
        another file called{' '}
        <strong className="blog-bold">DetailViewController.swift</strong>. These
        controller files manage our UI and functionalities. We will make the
        following changes to the ViewController.swift file:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">class</strong> ViewController:
          UITableViewController {'{'}
          <br />    <strong class="code-keyword">let</strong> context =
          (UIApplication
          <br />
              .shared
          <br />    .delegate <strong class="code-keyword">as</strong>!
          AppDelegate)
          <br />
              .persistentContainer
          <br />
              .viewContext
          <br />
              <br />    <strong className="code-keyword">override</strong>{' '}
          <strong className="code-keyword">func</strong> viewDidLoad() {'{'}
          <br />        <strong className="code-keyword">super</strong>
          .viewDidLoad()
          <br />
                  title = &quot;Food Picker&quot;
          <br />    {'}'}
          <br />
          {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        We changed the inheritance from{' '}
        <strong className="blog-bold">UIViewController</strong> to{' '}
        <strong className="blog-bold">UITableViewController</strong>.
        UITableViewController allows us to manage a list view, while the
        UIViewController is a more general view controller. The{' '}
        <strong className="blog-bold">context</strong> constant is what we will
        use to access and manipulate our Core Data. Now lets create the
        DetailViewController.swift:
        <br />
      </div>
      <ol className="blog-list">
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Right-click the &quot;FoodPicker&quot; Folder
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Click &quot;New File...&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Select &quot;Swift File&quot; and click &quot;Next&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Name the file &quot;DetailViewController&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Click &quot;Create&quot;
          </div>
        </li>
        <li className="blog-list-item">
          <div className="about-desc blog-content blog-content-list">
            Copy-paste the contents of <br />
            &quot;ViewController.swift&quot; file and make these changes:
          </div>
        </li>
      </ol>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">import</strong> UIKit
          <br />
          <br />
          <strong className="code-keyword">class</strong> DetailViewController:
          UIViewController {'{'}
          <br />    <strong className="code-keyword">let</strong> context = (
          <br />
              UIApplication
          <br />
              .shared
          <br />    .delegate <strong class="code-keyword">as</strong>!
          AppDelegate)
          <br />
              .persistentContainer
          <br />
              .viewContext
          <br />
          <br />    <strong className="code-keyword">var</strong> item:
          FoodItem?
          <br />‍<br />   {' '}
          <strong className="code-keyword">
            override func
          </strong> viewDidLoad() {'{'}
          <br />        <strong className="code-keyword">super</strong>
          .viewDidLoad()
          <br />
                  title = item?.name!
          <br />    {'}'}
          <br />
          {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        In this app, the ViewController.swift file will be a list of FoodItems.
        If one of these FoodItems is clicked, the corresponding
        DetailViewController.swift file will be instantiated. In this view, we
        will be able to edit or delete the selected FoodItem. The connection
        between ViewController and the DetailViewController will be shown later.
        <br />
      </div>
      <div className="about-desc blog-content">
        The FoodItem object will be saved as a property of the
        DetailViewController. The function{' '}
        <strong className="blog-bold">viewDidLoad()</strong> is run the very
        first time that view is instantiated. Inside of this function, we also
        set the title for the{' '}
        <strong className="blog-bold">Navigation Controller</strong>. The
        Navigation Controller allows us to navigate between our different views.
        <br />
      </div>
    </BlogSection>
  );
};
export default CoreDataSetup;

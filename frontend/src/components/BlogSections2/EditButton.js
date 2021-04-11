import React from 'react';
import BlogSection from '../Blog/BlogSection';

const EditButton = () => {
  return (
    <BlogSection title="Detail View Controller: Edit Touch Up Inside">
      <div className="about-desc blog-content">
        Our UI is complete and connected to our Controller files. The first file
        we will work on will be the DetailViewController. This view will be be
        shown when a cell is selected. The Navigation Controller will push this
        view and show it to the user.
        <br />
      </div>
      <div className="about-desc blog-content">
        The DetailViewController contains an edit and delete button. These
        buttons use the touchUpInside event. A{' '}
        <strong className="blog-bold">touchUpInside</strong> event occurs when
        &quot;the finger is inside the bounds of the control&quot;. This means
        that if they are touched up inside, it will trigger an action to occur.
        All of this simply means that if you click a button 👉, it will either
        edit or delete the food item. Apple created this event so if the wording
        sounds weird, blame them 😅. <br />
      </div>
      <div className="about-desc blog-content">
        Let&#x27;s work on what happens when someone touches up inside of the
        edit button. In this app, we will cause an alert to show up when it is
        touched up. This alert will have a text field, submit, and cancel
        button. The editPressed function should look like this:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">@IBAction func</strong> editPressed(
          <strong className="code-keyword">_</strong> sender: UIButton) {'{'}
          <br />        <strong className="code-keyword">let</strong> alert =
          UIAlertController(
          <br />
                  title: &quot;Edit&quot;, <br />
                  message: &quot;Update \(item?.name! ??
          &quot;item&quot;)&quot;, <br />
                  preferredStyle: .alert)
          <br />‍<br />
                  alert.addTextField(
          <br />
                  configurationHandler: nil)
          <br />
                  alert.textFields?
          <br />
                  .first?.text = item?.name
          <br />‍<br />
                  alert.addAction(
          <br />
                  UIAlertAction(
          <br />
                  title: &quot;Submit&quot;, <br />        style: .default){'{'}
          <br />            [<strong className="code-keyword">weak self</strong>
          ] <strong className="code-keyword">_</strong>{' '}
          <strong className="code-keyword">in</strong>
          <br />            <strong class="code-keyword">guard let</strong>{' '}
          field = alert.textFields?.first, <br />           {' '}
          <strong class="code-keyword">let</strong> newName = field.text, <br />
                      !newName.isEmpty{' '}
          <strong className="code-keyword">else</strong> {'{'}{' '}
          <strong className="code-keyword">return</strong> {'}'}
          <br />
                      <br />           {' '}
          <strong className="code-keyword">self</strong>
          ?.updateItem(
          <br />            item: (
          <strong className="code-keyword">self</strong>
          ?.item)! , <br />
                      newName: newName)
          <br />‍<br />           {' '}
          <strong className="code-keyword">self</strong>
          ?.title = newName
          <br />        {'}'})<br />‍<br />
                  alert.addAction(
          <br />
                  UIAlertAction(
          <br />
                  title: &quot;Cancel&quot;, <br />
                  style: .cancel))
          <br />
                  <br />        present(alert, animated:{' '}
          <strong className="code-keyword">true</strong>)<br />    {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        In the code above, a{' '}
        <strong className="blog-bold">UIAlertController</strong> object is
        created and assigned to the constant &quot;alert&quot;. The constructor
        with the title, message, and preferredStyle is used. On the alert
        object, we insert a textField into the alert using the{' '}
        <strong className="blog-bold">.addTextField()</strong>. Since this view
        is only displayed when a cell is selected, it will already have an
        initial name. Using alert&#x27;s{' '}
        <strong className="blog-bold">.textFields.first.text</strong>{' '}
        properties, we can set the initial value inside the text field to the
        name of the food item.
        <br />
      </div>
      <div className="about-desc blog-content">
        The submit and cancel buttons in the alert are added by using the alert
        object&#x27;s <strong className="blog-bold">.addAction()</strong>{' '}
        method. This method takes in a UIAlertAction object. If the
        UIAlertAction has no handler closure (trailing closure in the above
        code), the button will cause the alert to close when pressed. This was
        used in the cancel action.
        <br />
      </div>
      <div className="about-desc blog-content">
        The submit action&#x27;s handler closure starts with{' '}
        <strong className="blog-bold">[weak self]</strong>. This is stating that
        the reference to self (DetailViewController) is weak. Without this, the
        closure could go through a retain cycle and that memory will never be
        freed up (<strong className="blog-bold">memory leak</strong>). A{' '}
        <strong className="blog-bold">Retain Cycle</strong> is created if the
        closure retains self and self is retaining the closure (strongly
        reference each other), causing an endless cycle.
        <br />
      </div>
      <div className="about-desc blog-content">
        The <strong className="blog-bold">guard-let statement</strong> is
        similar to the <strong className="blog-bold">if-let statement</strong>{' '}
        mentioned in my first blog. They both unwrap optionals if they are not
        null. In a guard-let statement, if the optional is null, then it will
        exit the current function, loop, or condition. In this case we create
        the field and newName constants. It checks if there is a value in the
        textField. If it passes the checks, we call the updateItem function and
        change the title of the view. Lastly, the alert object is presented to
        the user.
        <br />
      </div>
    </BlogSection>
  );
};
export default EditButton;

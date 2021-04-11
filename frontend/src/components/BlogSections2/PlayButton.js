import React from 'react';
import BlogSection from '../Blog/BlogSection';

const PlayButton = () => {
  return (
    <BlogSection title="View Controller: Play Tapped">
      <div className="about-desc blog-content">
        Finally, we have the play functionality:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">@objc func</strong> playTapped(){' '}
          {'{'}
          <br />        <strong className="code-keyword">let</strong> alert:
          UIAlertController
          <br />‍<br />        <strong class="code-keyword">if</strong>{' '}
          foods.count &gt; 0 {'{'}
          <br />            <strong class="code-keyword">let</strong> food =
          foods
          <br />
                      .randomElement()?
          <br />
                      .name
          <br />‍<br />
                      alert = UIAlertController(
          <br />
                      title: food, <br />
                      message: &quot;Try eating \(food!)&quot;, <br />
                      preferredStyle: .alert)
          <br />        {
            '}'
          } <strong className="code-keyword">else</strong> {'{'}
          <br />
                      alert = UIAlertController(
          <br />
                      title: &quot;Empty&quot;,
          <br />
                      message: &quot;Please add choices before running&quot;,
          <br />
                      preferredStyle: .alert)
          <br />        {'}'}
          <br />‍<br />
                  alert.addAction(
          <br />
                  UIAlertAction( title: &quot;OK&quot;, style: .default)
          <br />        )<br />‍<br />        present( alert, animated:{' '}
          <strong className="code-keyword">true</strong>)<br />    {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        In this function, we have two possible Alert Controllers. The first type
        would be if we have choices to choose from and the second would be if
        there were none. If there are choices, we would choose a random element
        from the FoodItem array and grab its name. With the name of the
        FoodItem, we would create an alert saving food pickers. If there are no
        FoodItems in our array, we would tell the user to add a food choice. An
        ok button is added to the alert to allow the user to dismiss the alert.{' '}
        <br />
      </div>
    </BlogSection>
  );
};
export default PlayButton;

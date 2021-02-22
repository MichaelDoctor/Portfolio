/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import BlogSection from '../Blog/BlogSection';

export const Classes = () => {
  return (
    <BlogSection title="Classes | Structs">
      <a
        href="https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        Classes and Structs Docs
      </a>
      <div className="about-desc blog-content">
        You may have noticed that I haven&#x27;t shown you how to create a class
        yet. In Swift, we have Classes and Structures. If you were to copy a
        Class, both the original and the copy would reference the same object.
        If you copy a Struct object, they reference two unique Struct objects.
        <br />
      </div>
      <div className="about-desc blog-content">
        Think of a Class as your reflection and a Struct as having an identical
        twin. If you change your clothes, your reflection will have the same
        changes. If you had a twin and changed your clothes, your twin
        wouldn&#x27;t change too. I mean, you and your twin could match clothes,
        but then you guys are just intentionally trying to confuse people 😅.
        <br />
      </div>
      <div className="about-desc blog-content">
        A Struct and a Class have only a few differences in structure and
        methods. We will start by looking at a{' '}
        <strong className="blog-bold">Structure</strong> or{' '}
        <strong className="blog-bold">Struct:</strong>
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">struct</strong> FoodStruct {'{'}
          <br />‍<br />    // properties
          <br />    <strong className="code-keyword">static</strong>{' '}
          <strong className="code-keyword">var</strong> isEdible: Bool ={' '}
          <strong className="code-keyword">true</strong> // static property
          <br />    <strong className="code-keyword">var</strong> name: String
          // public property
          <br />    <strong className="code-keyword">private</strong>{' '}
          <strong className="code-keyword">var</strong> rating: Int // private
          property
          <br />‍<br />    <strong className="code-keyword">lazy</strong>{' '}
          <strong className="code-keyword">var</strong> isCooked: Bool ={' '}
          <strong className="code-keyword">true</strong> // lazy - intialized
          when called
          <br />‍<br />    // computed property
          <br />    <strong className="code-keyword">var</strong> ratingPercent:
          String {'{'}
          <br />        <strong className="code-keyword">return</strong>{' '}
          &quot;\(
          <strong className="code-keyword">self</strong>.rating * 10)%
          rating&quot;
          <br />    {'}'}
          <br />‍<br />    // property observers - run code before or after
          changes
          <br />        // didSet = run after change
          <br />        // willSet = run before change
          <br />    <strong className="code-keyword">var</strong> cookPercent:
          Int {'{'}
          <br />        <strong className="code-keyword">willSet</strong>
          {'{'}
          <br />            print(&quot;\(name) is currently: \(cookPercent)%
          cooked&quot;)
          <br />        {'}'}
          <br />‍<br />        <strong className="code-keyword">didSet</strong>
          {'{'}
          <br />            print(&quot;\(name) changed to: \(cookPercent)%
          cooked&quot;)
          <br />        {'}'}
          <br />    {'}'}
          <br />‍<br />    // constructor
          <br />    <strong className="code-keyword">init</strong>(
          <strong className="code-keyword">_</strong> name: String,{' '}
          <strong className="code-keyword">_</strong> rating: Int = 0,{' '}
          <strong className="code-keyword">_</strong> cookPercent: Int = 0){' '}
          {'{'}
          <br />        <strong className="code-keyword">self</strong>.name =
          name
          <br />        <strong className="code-keyword">self</strong>.rating =
          rating
          <br />        <strong className="code-keyword">self</strong>
          .cookPercent = cookPercent
          <br />    {'}'}
          <br />
          <br />    // getter method
          <br />    <strong className="code-keyword">func</strong> getRating()
          -&gt; Int? {'{'}
          <br />        <strong className="code-keyword">return</strong>{' '}
          <strong className="code-keyword">self</strong>.rating
          <br />    {'}'}  <br />‍<br />    // setter method
          <br />    <strong className="code-keyword">mutating</strong>{' '}
          <strong className="code-keyword">func</strong> setRating(
          <strong className="code-keyword">_</strong> rating: Int) {'{'}
          <br />        <strong className="code-keyword">self</strong>.rating =
          rating
          <br />    {'}'}    <br />‍<br />    // static method
          <br />    <strong className="code-keyword">static</strong>{' '}
          <strong className="code-keyword">func</strong> printEnumType() {'{'}
          <br />        print(&quot;I am a Food&quot;)
          <br />    {'}'}
          <br />
          {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        The <strong className="blog-bold">static</strong>,{' '}
        <strong className="blog-bold">public </strong>and{' '}
        <strong className="blog-bold">private </strong>keywords serve the same
        purpose as in Java. The &quot;isCooked&quot; property is a{' '}
        <strong className="blog-bold">Lazy Variable</strong>. A lazy variable is
        a just-in-time calculation variable, meaning that a lazy variable is
        born when needed to avoid unnecessary work. The
        &quot;ratingPercent&quot; variable is a{' '}
        <strong className="blog-bold">Computed Property</strong>. A computed
        property executes code and saves the result into that variable 🤯.
        &quot;cookPercent&quot; is a{' '}
        <strong className="blog-bold">Property Observer</strong>. A property
        observer is similar to Santa Claus. It sees your property when it&#x27;s
        sleeping. It knows when it&#x27;s awake. If the property changes, Santa
        will run code before or after changes are made to a property (check the
        comments in the code for clarity).
        <br />
      </div>
      <div className="about-desc blog-content">
        The following functions are available in Java, but with a different
        syntax. In a Struct, to create a method that can change properties, the
        keyword <strong className="blog-bold">mutating </strong>must be used. To
        allow for a Struct to be mutated, it must be a variable. If a Struct is
        a constant, it can&#x27;t be mutated (even through mutating functions):
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">var</strong> food =
          FoodStruct(&quot;Spaghetti&quot;,10)
          <br />
          print(food.ratingPercent)
          <br />
          food.cookPercent = 77
          <br />
          print(&quot;1 minute later...&quot;)
          <br />
          food.cookPercent = 100
          <br />
          <br />
          /*
          <br />
          &quot;100% rating&quot;
          <br />
          &quot;Spaghetti is currently: 0% cooked&quot;
          <br />
          &quot;Spaghetti changed to: 77% cooked&quot;
          <br />
          &quot;1 minute later...&quot;
          <br />
          &quot;Spaghetti is currently: 77% cooked&quot;
          <br />
          &quot;Spaghetti changed to: 100% cooked\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        Now let&#x27;s look at a <strong className="blog-bold">Class</strong>:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          <strong className="code-keyword">class</strong> Food {'{'}
          <br />    <strong className="code-keyword">static</strong>{' '}
          <strong className="code-keyword">var</strong> isEdible: Bool ={' '}
          <strong className="code-keyword">
            true
            <br />‍
          </strong>{' '}
             <strong className="code-keyword">var</strong> name: String
          <br />    <strong className="code-keyword">private</strong>{' '}
          <strong className="code-keyword">var</strong> rating: Int
          <br />    <br />    <strong className="code-keyword">
            lazy
          </strong>{' '}
          <strong className="code-keyword">var</strong> isCooked: Bool ={' '}
          <strong className="code-keyword">
            true
            <br />‍
          </strong>{' '}
          <br />    <strong className="code-keyword">var</strong> ratingPercent:
          String {'{'}
          <br />        &quot;\(<strong className="code-keyword">self</strong>
          .rating * 10)% rating&quot;
          <br />    {'}'}
          <br />  <br />    <strong className="code-keyword">var</strong>{' '}
          cookPercent: Int {'{'}
          <br />        <strong className="code-keyword">willSet </strong>
          {'{'}
          <br />            print(&quot;\(name) is currently: \(cookPercent)%
          cooked&quot;)
          <br />        {'}'}      <br />  <br />      {' '}
          <strong className="code-keyword">didSet </strong>
          {'{'}
          <br />            print(&quot;\(name) changed to: \(cookPercent)%
          cooked&quot;)
          <br />        {'}'}
          <br />    {'}'}
          <br />  <br />    <strong className="code-keyword">init</strong>(
          <strong className="code-keyword">_</strong> name: String,{' '}
          <strong className="code-keyword">_</strong> rating: Int = 0,{' '}
          <strong className="code-keyword">_</strong> cookPercent: Int = 0){' '}
          {'{'}
          <br />        <strong className="code-keyword">self</strong>.name =
          name
          <br />        <strong className="code-keyword">self</strong>.rating =
          rating
          <br />        <strong className="code-keyword">self</strong>
          .cookPercent = cookPercent
          <br />    {'}'}
          <br />   <br />    <strong className="code-keyword">func</strong>{' '}
          getRating() -&gt; Int? {'{'}
          <br />        <strong className="code-keyword">return</strong>{' '}
          <strong className="code-keyword">self</strong>.rating
          <br />    {'}'}
          <br />   <br />    <strong className="code-keyword">func</strong>{' '}
          overrideMe() {'{'}
          <br />        print(&quot;Override me&quot;)
          <br />    {'}'}
          <br />   <br />    <strong className="code-keyword">
            static
          </strong>{' '}
          <strong className="code-keyword">func</strong> printEnumType() {'{'}
          <br />        print(&quot;I am a Food&quot;)
          <br />    {'}'}  <br />  <br />    // setter method don&#x27;t need
          mutating method anymore
          <br />    <strong className="code-keyword">func</strong> setRating(
          <strong className="code-keyword">_</strong> rating: Int) {'{'}
          <br />        <strong className="code-keyword">self</strong>.rating =
          rating
          <br />    {'}'}
          <br />    <br />    // clean up the class when deallocated
          <br />    <strong className="code-keyword">deinit</strong> {'{'}
          <br />        print(&quot;Mr. Stark, I don&#x27;t feel so good&quot;)
          <br />    {'}'}
          <br />
          {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        Almost everything is the same! There are only two differences within the
        Class (these are the methods with comments). The mutating keyword is not
        used (if only we could say the same about covid 😫). In Structs and
        Classes, we have an init function to initialize our object. In Classes
        only, we also can have a{' '}
        <strong className="blog-bold">Deinitialization Function</strong>.
        Deinitialization functions run when Class objects are deallocated from
        memory. You could even have your Class print &quot;Mr. Stark, I
        don&#x27;t feel so good&quot; if you wanted.
        <br />
      </div>
      <div className="about-desc blog-content">
        If you wanted to make a Class that could not be inherited, you would
        prepend <strong className="blog-bold">final </strong>to it. Similar to
        Java, parent Classes allow their children to inherit and override their
        methods. Like how a child can override the genetics they inherited from
        their parent. The parents could be 5&#x27;7&quot; and somehow the child
        becomes 6&#x27;9&quot; 🥺. I should have drank more milk as a kid.
        Anyway, a subclass can <strong className="blog-bold">inherit </strong>
        from a superclass, <strong className="blog-bold">override </strong>and
        call the superclass methods like so:
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          // no claases can inherit from this class
          <br />‍<strong className="code-keyword">final</strong>{' '}
          <strong className="code-keyword">class</strong> KoreanFriedChicken:
          Food {'{'}
          <br />    <strong className="code-keyword">private</strong>{' '}
          <strong className="code-keyword">var</strong> desc: String
          <br />    <strong className="code-keyword">init</strong>(
          <strong className="code-keyword">_</strong> name: String,{' '}
          <strong className="code-keyword">_</strong> rating: Int,{' '}
          <strong className="code-keyword">_</strong> cookPercent: Int = 0,{' '}
          <strong className="code-keyword">_</strong> desc: String =
          &quot;Delicious&quot;) {'{'}
          <br />        <strong className="code-keyword">self</strong>.desc =
          desc
          <br />        <strong className="code-keyword">super</strong>
          .init(name, rating, cookPercent)
          <br />    {'}'}
          <br />    <br />    // override a method in superclass
          <br />    <strong className="code-keyword">override</strong>{' '}
          <strong className="code-keyword">func</strong> overrideMe() {'{'}
          <br />        print(&quot;Overriden&quot;)
          <br />    {'}'}
          <br />
          {'}'}
        </div>
      </div>
      <div className="about-desc blog-content">
        With Classes, we can instantiate them as constants and mutate their
        properties. Although, we can only deallocate a Class object if it is a
        variable: <br />‍<strong className="blog-bold">Posture Check: </strong>
        If you&#x27;re slouching, stop that 😂.
        <br />
      </div>
      <div className="blog-code">
        <div className="code">
          ‍<strong className="code-keyword">let</strong> kfc =
          KoreanFriedChicken(
          <br />
          &quot;Creamy Garlic Bite&quot;, <br />
          10, <br />
          100, <br />
          &quot;Bad for a first date&quot;)
          <br />‍<br />
          <strong className="code-keyword">var</strong> kfc2:
          KoreanFriedChicken? = KoreanFriedChicken(
          <br />
          &quot;Creamy Garlic Bite&quot;, <br />
          10, <br />
          100, <br />
          &quot;Bad for a first date&quot;)
          <br />
          kfc2 = <strong className="code-keyword">nil</strong> // 😈👌💥
          deallocated
          <br />
          <br />
          /* &quot;Mr. Stark, I don&#x27;t feel so good\n&quot; */
        </div>
      </div>
      <div className="about-desc blog-content">
        In Swift, the use of Structs is more used than Classes. You only use Classes if you need a reference-based object, should be inherited, or need the ability to deinitialized.
      </div>
    </BlogSection>
  );
};

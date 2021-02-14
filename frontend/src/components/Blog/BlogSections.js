import React from 'react';
import BlogSection from './BlogSection';
import YoutubeWrap from './YoutubeWrap';

const BlogSections = () => {
  return (
    <div className="section-desc">
      <YoutubeWrap />
      <BlogSection title="Introduction">
        <div className="about-desc blog-content">
          Are you a developer with Java experience? Then this blog post is for
          you!
        </div>
        <div className="about-desc blog-content">
          Both Java and Swift are general-purpose, compiled programming
          languages. So if you understand Java, Swift will make sense to you
          (hopefully)! The programming language Swift is used for macOS, iOS,
          watchOS, tvOS, and more. This blog will focus on the Swift language
          for now.
        </div>
        <div className="about-desc blog-content">
          Basic programming knowledge is required to understand this blog. If
          you are a beginner, I would recommend{' '}
          <a
            href="https://www.hackingwithswift.com/100"
            target="_blank"
            rel="noopener noreferrer"
            className="blog-text-link"
          >
            Paul Hudson&#x27;s 100 Days of Swift
          </a>
          . Regardless of if you have coding experience with Java or another
          language, I can guarantee that at least you won&#x27;t fall asleep
          reading this blog. Instead, you might get hungry or cringe 😅. Sorry,
          I&#x27;m writing this while waiting for my food, so a lot of my
          example code will be food-related.
        </div>
      </BlogSection>
    
    <BlogSection title="Setup">
        <div class="about-desc blog-content">This blog will only be of use if you have a Mac computer with macOS 10.15 or higher. So join me on the dark side and get trapped in the Apple ecosystem! 😈</div>
                <div class="blog-img" style={{"backgroundImage": `url("https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1957&q=80")`}}></div>
                <div class="about-desc blog-content">If you don&#x27;t want to spend your money on a Mac computer, you can always try running a VMware or VirtualBox for macOS. You can also try the Swift programming language here:</div>
                <a href="https://www.tutorialspoint.com/compile_swift_online.php" target="_blank" rel="noopener noreferrer" class="blog-link">Swift Online Program</a>
                <div class="about-desc blog-content">So with that out of the way, let&#x27;s install the Xcode IDE:<br/></div>
                <ol class="blog-list">
                  <li class="blog-list-item">
                    <div class="about-desc blog-content blog-content-list">Go to the App Store</div>
                  </li>
                  <li class="blog-list-item">
                    <div class="about-desc blog-content blog-content-list">Install Xcode</div>
                  </li>
                  <li class="blog-list-item">
                    <div class="about-desc blog-content blog-content-list">Wash your hands</div>
                  </li>
                  <li class="blog-list-item">
                    <div class="about-desc blog-content blog-content-list">Grab a snack because that install will take a while</div>
                  </li>
                </ol>
                <div class="about-desc blog-content">As a child, I played <a href="http://www.push2play.ca/games/grounders/" target="_blank" rel="noopener noreferrer" class="blog-text-link">Grounders</a> with my friends on a playground. The first thing we will do is create a &quot;Playground&quot; file to play with ourselves and Swift:<br/></div>
                <ol class="blog-list">
                  <li class="blog-list-item">
                    <div class="about-desc blog-content blog-content-list">Open up Xcode</div>
                  </li>
                  <li class="blog-list-item">
                    <div class="about-desc blog-content blog-content-list">Go to the menu bar up top</div>
                  </li>
                  <li class="blog-list-item">
                    <div class="about-desc blog-content blog-content-list">Press &quot;File&quot;</div>
                  </li>
                  <li class="blog-list-item">
                    <div class="about-desc blog-content blog-content-list">Press &quot;New&quot;</div>
                  </li>
                  <li class="blog-list-item">
                    <div class="about-desc blog-content blog-content-list">Press &quot;Playground&quot;</div>
                  </li>
                  <li class="blog-list-item">
                    <div class="about-desc blog-content blog-content-list">Choose the &quot;Blank&quot; Template</div>
                  </li>
                </ol>
                <div class="blog-img" style={{"backgroundImage": `url("https://uploads-ssl.webflow.com/5f9a24556170f63ee516953f/6026005604cd51a8e5d83e75_1.png")`}}></div>
    </BlogSection>
    <BlogSection title="Comments | Variables | Constants">
        <a href="https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID310" target="_blank" class="blog-link">Constants and Variables Docs</a>
                <div class="about-desc blog-content">We will begin with something simple first. Let&#x27;s create<strong class="blog-bold"> Comments</strong>! Similar to Youtube, you can create a comment at the bottom of this blog 😅. But, in Swift we can create single line comments with &quot;command&quot; + &quot;/&quot;. We can also create documentation comments by typing &quot;command&quot; + &quot;option&quot; + &quot;/&quot;. : <br/></div>
                <div class="blog-code">
                  <div class="code">// Single-line comment<br/>‍<br/>/* Multi-line comment<br/><strong>In the code below, multi-line comments will be used to emulate a print statement.</strong><br/><br/><strong>Understanding the code:</strong><br/><strong class="code-keyword">    (Swift keyword)</strong> (normal code):<br/><strong class="code-keyword">        var</strong> watermelon = &quot;colors&quot;<br/><strong class="code-keyword">    </strong><span class="code-error">Error Code: <br/></span>        <span class="code-error">var 77watermelon</span><br/>*/<br/><br/>/// Documentation comment<br/>/// &lt;#Description#&gt;</div>
                </div>
                <div class="about-desc blog-content">You will notice that any differences between Swift and Java are usually the syntax. Now let&#x27;s start coding. Let&#x27;s start by storing data in a <strong class="blog-bold">Variable </strong>without type annotation:<br/></div>
                <div class="blog-code">
                  <div class="code"><strong class="code-keyword">var</strong> mood = &quot;Hungry&quot;<br/>mood = &quot;still hungry&quot;</div>
                </div>
                <div class="about-desc blog-content">If we tried this with Java, Java would growl at you like my stomach is growling at me. Now let&#x27;s create a <strong class="blog-bold">Constant </strong>and try the same thing:<br/></div>
                <div class="blog-code">
                  <div class="code"><strong class="code-keyword">let</strong> orderStatus = &quot;Mark is on the way with your Order.&quot;<br/><span class="code-error">orderStatus = &quot;Heads up! Your courier is about to arrive.&quot; </span><br/><span class="code-error"></span></div>
                </div>
                <div class="about-desc blog-content">Uh oh, Swift is getting hangry because you can&#x27;t change a constant&#x27;s data no matter how much you want it to be true 😭.<br/></div>
    </BlogSection>
    <BlogSection title="Basic Data Types">
        <a href="https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID317" target="_blank" class="blog-link">Basic Data Types Docs</a>
                <a href="https://developer.apple.com/documentation/swift" target="_blank" class="blog-link">Detailed Data Types Docs</a>
                <div class="about-desc blog-content">Sometimes we want to declare a variable and add data later. If we tried the with the previous method, Swift&#x27;s stomach will growl again:<br/></div>
                <div class="blog-code">
                  <div class="code"><span class="code-error">var anyType</span></div>
                </div>
                <div class="about-desc blog-content">Swift&#x27;s stomach is growling because it doesn&#x27;t know that there&#x27;s nothing muffling the digestion sounds. To prevent this, we need to get a snack for Swift to muffle the rumbles and ensure people don&#x27;t mistake it for something else. We would do this with <strong class="blog-bold">Type Annotation</strong>:<br/></div>
                <div class="blog-code">
                  <div class="code"><strong class="code-keyword">var</strong> anyType: <strong class="code-keyword">Any<br/>‍<br/>‍</strong>anyType = &quot;Mamba out&quot;<br/>anyType = 8 + 24</div>
                </div>
                <div class="about-desc blog-content">Swift has several data types. For now, we will look at the basic ones. The basics would be <strong class="blog-bold">Any</strong>, <strong class="blog-bold">Double</strong>, <strong class="blog-bold">Bool</strong>, <strong class="blog-bold">Int</strong>, and <strong class="blog-bold">String</strong>:<br/></div>
                <div class="blog-code">
                  <div class="code"><strong class="code-keyword">let</strong> price: Double = 64.39<br/>‍<strong class="code-keyword">var</strong> isHungry: Bool = <strong class="code-keyword">true<br/>let</strong> first: Int = 2_020<br/>‍<strong class="code-keyword">var</strong> second: String = &quot;🥳&quot;</div>
                </div>
                <div class="about-desc blog-content">We can use underscores to make numbers more readable. Another great thing about Swift is that you can integrate emojis into your code 😲! <strong class="blog-bold">Underscores</strong> are also used to <strong class="blog-bold">Skip Unneeded Information</strong> (It also does something else, but it will be covered later).<br/></div>
                <div class="about-desc blog-content">But now you might be wondering why &quot;first&quot; and &quot;second&quot; contain two things that should never be in the same sentence with each other. Well, that&#x27;s because I didn&#x27;t get to finish my String. Let&#x27;s fix that with <strong class="blog-bold">String interpolation</strong> &quot;\()&quot;:<br/></div>
                <div class="blog-code">
                  <div class="code"><strong class="code-keyword">var</strong> stringInterpolation: String = &quot;\(first) is over! \(second)&quot;<br/>‍<br/>/* &quot;2020 is over! 🥳&quot; */</div>
                </div>
                <div class="about-desc blog-content">See! Now it all makes sense! Look at how much easier it is to do that in Swift! But don&#x27;t mind me, I&#x27;m just trying to make myself feel better about spending so much on a MacBook 😅. There is another way we could have fixed that sentence, but we&#x27;ll do this with the mood variable we initialized before. In case you forgot what &quot;mood&quot; contained, I&#x27;ll <strong class="blog-bold">Print </strong>out the sentence for you:<br/></div>
                <div class="blog-code">
                  <div class="code"><strong class="code-keyword">var</strong> addString = &quot;I&#x27;m &quot; + mood + &quot; 😢&quot;<br/>print(addString) // println in Java<br/>‍<br/>/* &quot;I&#x27;m still hungry 😢\n&quot; */</div>
                </div>
                <div class="about-desc blog-content">A triple-double is when a player records double-digit scores in three categories. In Swift, triple-double quotes are used to create a  <strong class="blog-bold">Multi-line String</strong>. We can do this the Java way or the Python way:<br/></div>
                <div class="blog-code">
                  <div class="code"><strong class="code-keyword">var</strong> javaWay: String = &quot;This is a multi\n&quot; + &quot;line\n&quot; + &quot;string&quot;<br/>‍<strong class="code-keyword">var</strong> pythonWay: String = &quot;&quot;&quot;<br/>This is a multi<br/>line <br/>string<br/>&quot;&quot;&quot;</div>
                </div>
    </BlogSection>
    <BlogSection title="Operators" >
        <a href="https://docs.swift.org/swift-book/LanguageGuide/BasicOperators.html" target="_blank" class="blog-link">Operators Docs</a>
                <div class="about-desc blog-content">Operator, a movie starring Martin Starr and Mae Whitman (Katara in Avatar). <strong class="blog-bold">Operators</strong> perform mathematical, relational or logical operation. The basic <strong class="blog-bold">math operators</strong> would be the same things we learned as kids. The only difference is that we need to care about the type of data. Meaning, that we need to <strong class="blog-bold">convert </strong>some values in Swift:<br/></div>
                <div class="blog-code">
                  <div class="code"><strong class="code-keyword">var</strong> yearDouble: Double = 2020.2<br/>‍<br/>// var year = yearDouble + 1 will give you an error<br/>‍<strong class="code-keyword">var</strong> year: Int = Int(yearDouble) + 1</div>
                </div>
                <div class="about-desc blog-content">We all know how to do addition, subtraction, multiplication, and division (most of the time 😅). Here&#x27;s the lazy way of <strong class="blog-bold">modifying and reassigning </strong>a variable:<br/></div>
                <div class="blog-code">
                  <div class="code">year += 1<br/>year -= 1<br/>year *= 1<br/>year /= 1<br/>year %= 2</div>
                </div>
                <div class="about-desc blog-content"><strong class="blog-bold">Comparison Operators </strong>are pretty straight forward and often used with conditionals. The only difference is that in Swift, we can check if Strings are equal using comparison operators (🤯 No more .equals(&quot;string&quot;)):<br/></div>
                <div class="blog-code">
                  <div class="code"><strong class="code-keyword">let</strong> hungerBefore: Int = 8<br/>‍<strong class="code-keyword">var</strong> hungerNow: Int = 9<br/>print(&quot;My hunger level now is greater than my hunger level 10 minutes before? \(hungerNow &gt; hungerBefore)&quot;)<br/>‍<br/><strong class="code-keyword">var</strong> compare: Bool = &quot;still hungry&quot; == mood<br/>compare = &quot;not hungry&quot; != mood<br/>compare = hungerNow &gt;= hungerBefore<br/>compare = hungerNow &lt; hungerBefore<br/>‍<br/>isHungry = <strong class="code-keyword">false</strong><br/>compare = !isHungry<br/>‍<br/>‍<strong class="code-keyword">let</strong> thatsMySecretCap: String = &quot;I&#x27;m always angr... hungry&quot;</div>
                </div>
    </BlogSection>
    <BlogSection title="Arrays">
        <a href="https://docs.swift.org/swift-book/LanguageGuide/CollectionTypes.html#ID107" target="_blank" class="blog-link">Basic Array Docs</a>
                <a href="https://developer.apple.com/documentation/swift/array" target="_blank" class="blog-link">Detailed Array Docs</a>
                <div class="about-desc blog-content">Arrays are a good way of making a list and checking it twice. Arrays in Swift are similar to ArrayLists in Java. In both Java and Swift, we can&#x27;t mix Datatypes in an Array. Here&#x27;s how to make one with Swift and <strong class="blog-bold">check the type </strong>that the <strong class="blog-bold">Array </strong>holds:<br/></div>
                <div class="blog-code">
                  <div class="code">// hmmm I wonder where I ordered from 🤔<br/>‍<strong class="code-keyword">var</strong> todaysOrder: [String] = [<br/>&quot;C2. Hot Soy Garlic Chicken&quot;,    <br/>&quot;C9. Creamy Garlic Chicken Bite&quot;,    <br/>&quot;C9. Creamy Garlic Chicken Bite&quot;<br/>]<br/>‍<br/>type(of: todaysOrder) // Check the type of any variable</div>
                </div>
                <div class="about-desc blog-content">Now you may be wondering, &quot;where did he order from?&quot; or &quot;why is he so obsessed with food?&quot; or &quot;how do I make an empty array that I can fill in later?&quot;. These are all valid questions, but I can only answer one of those for now. Let&#x27;s use my stomach as an example for the third question:<br/></div>
                <div class="blog-code">
                  <div class="code"><strong class="code-keyword">var</strong> inMyStomach: [String] = []<br/>‍<strong class="code-keyword">var</strong> inMyStomach2 = [String]()</div>
                </div>
                <div class="about-desc blog-content">Hopefully, in a few minutes, I can eat some of my order and put it inside of my stomach. In Java ArrayList, we need to call the add() method. In Swift, there is a much simpler way of <strong class="blog-bold">appending to an Array</strong>.  Since I can&#x27;t do this in real life yet, let&#x27;s do it in Swift:<br/></div>
                <div class="blog-code">
                  <div class="code"><strong class="code-keyword">var</strong> firstIndex = todaysOrder[0]<br/>inMyStomach += [&quot;C3. Krabby Patty&quot;]</div>
                </div>
    </BlogSection>
    </div>
  );
};
export default BlogSections;

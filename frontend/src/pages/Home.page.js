import React from 'react';

import Intro from '../components/Intro/Intro';
import Navbar from '../components/Navbar/Navbar';
import Languages from '../components/Languages/Languages';
import Frameworks from '../components/Frameworks/Frameworks';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

import useScript from '../hooks/useScript.hook';

const Home = () => {
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1606877900/portfolio/js/jquery_xpecxx.js',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1607053094/portfolio/js/webflow.animation_skydrw.js',
  );
  return (
    <div className="container">
      <Intro />
      <Navbar />
      <div className="content-container">
        <div className="nav-gap" />
        <div className="content flex-content" id="home">
          <Languages />
          <Frameworks />
        </div>
      </div>
      <div className="content-container">
        <div className="nav-gap"></div>
        <div className="info-content">
          <About />
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

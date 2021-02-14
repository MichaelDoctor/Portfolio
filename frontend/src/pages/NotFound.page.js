import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
const NotFound = () => {
  return (
    <div className="container notfound-container">
      <Navbar />
      <div className="intro notfound-content">
        <div className="intro-headers">
          <div className="intro-left">
            <h3 className="intro-heading slider-name">404 Page not found</h3>
            <div className="hr slider-hr"></div>
            <h6 className="intro-heading sub-text notfound-heading">
              <span className="slider-desc">
                I can&#x27;t perform cpr or Find this page.
              </span>
              <br />
            </h6>
            <h6 className="intro-heading slider-icon">
              <span className="text-span-2">
                <i className="fas fa-dizzy" />
              </span>
            </h6>
            <Link to="/" className="slider-btn hover1 main w-button">
              return home
            </Link>
          </div>
        </div>
        <div className="contact-container">
          <div className="contact-result">
            <h1 className="text-span-2">
              <i className="fas fa-eye-slash" />
              <br />
              <br />
              <i className="fas fa-sad-cry" />
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default NotFound;

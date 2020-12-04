import React from 'react';
const Footer = () => {
  return (
    <div
      data-w-id="f50d5e09-e817-9552-6d28-c27f47cc01b0"
      className="footer opacity-scroll"
    >
      <div className="hr"></div>
      <div className="footer-container" id="footer">
        <div className="footer-info">
          <h5 className="footer-header">Michael Doctor&#x27;s Portfolio</h5>
          <div className="footer-desc">
            My personal website portfolio was made with React, Django,
            PostgreSQL, and Webflow.
          </div>
        </div>
        <div className="footer-links">
          <h5 className="footer-header">Links</h5>
          <a href="#projects" className="link">
            <i className="fab fa-github" /> Github
          </a>
          <a href="#projects" className="link">
            <i className="fab fa-linkedin" /> LinkedIn
          </a>
        </div>
        <div className="footer-contact">
          <h5 className="footer-header">Contact Info</h5>
          <h6 className="footer-name">Michael Doctor</h6>
          <div className="text-block-2">
            Canada
            <br />
            Calgary, AB
          </div>
          <a href="#projects" className="link">
            <i className="fab fa-google" /> michaeldoctoryyc@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

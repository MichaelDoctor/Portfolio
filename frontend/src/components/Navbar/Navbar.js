import React from 'react';
import NavTab from './NavTab';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-w-id="2b4fe990-422b-aafa-0844-15043c40d507"
      role="banner"
      className="navbar w-nav"
    >
      <div className="container w-container">
        <Link to="/" className="brand hover1 w-nav-brand">
          <div className="nav-logo">
            <i className="fas fa-code" /> MICHAEL DOCTOR
          </div>
        </Link>
        <nav role="navigation" className="nav-links w-nav-menu">
          <NavTab url="#intro" text="Home" />
          <NavTab url="#projects" text="Projects" />
          <NavTab url="#about" text="About Me" />
          <NavTab url="#intro" text="Contact Me" />
        </nav>
        <div className="menu-button hover1 w-nav-button">
          <div className="icon w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

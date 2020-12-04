import React from 'react';
const NavTab = ({ url, text }) => {
  return (
    <a href={url} className="nav-link hover1">
      {text}
      <br />
    </a>
  );
};
export default NavTab;

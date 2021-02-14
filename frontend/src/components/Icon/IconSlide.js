import React from 'react';
const IconSlide = ({ icon, title, direction }) => {
  return (
    <div className={direction}>
      <div className="grid-icon-container">
        <div className="grid-icon">
          <h1 className="heading logo-heading">
            <span className="grid-fa">
              <i className={icon} />
            </span>
          </h1>
        </div>
      </div>
      <div className="grid-name">
        <h4 className="heading logo-heading">{title}</h4>
      </div>
    </div>
  );
};
export default IconSlide;

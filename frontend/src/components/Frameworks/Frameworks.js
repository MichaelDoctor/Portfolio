import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch.hook';
import IconSlide from '../Icon/IconSlide';

const Frameworks = () => {
  const [frameworks, setFrameworks] = useState([]);
  useFetch('https://michael-doctor.me/api/skills/frameworks/', setFrameworks);
  return (
    <div className="section-1 content-right">
      <div
        data-w-id="f65e9104-11ba-98e7-f9f8-2e70377c93c4"
        className="section-heading right slide-right"
      >
        <div className="section-title">
          <h1 className="heading div-head">Frameworks</h1>
        </div>
        <div className="hr"></div>
        <div className="section-desc">
          <div className="about-sub">These are the frameworks I use!</div>
        </div>
      </div>
      <div
        data-w-id="f65e9104-11ba-98e7-f9f8-2e70377c93c4"
        className="icons slide-right"
      >
        <div className="icon-container">
          {frameworks.map(({ id, icon, title }) => (
            <IconSlide
              key={id}
              icon={icon}
              title={title}
              direction="grid left"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Frameworks;

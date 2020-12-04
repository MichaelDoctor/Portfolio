import React, { useState } from 'react';
import IconSlide from '../Icon/IconSlide';
import useFetch from '../../hooks/useFetch.hook';

const Languages = () => {
  const [languages, setLanguages] = useState([]);
  useFetch('https://michael-doctor.me/api/skills/languages/', setLanguages);
  return (
    <div className="section-1 content-left">
      <div
        data-w-id="555ee04a-b52e-f8fb-a4a6-d21ac831f8d7"
        className="section-heading left slide-left"
      >
        <div className="section-title">
          <h1 className="heading">Languages</h1>
        </div>
        <div className="hr"></div>
        <div className="section-desc">
          <div>These are the languages I use!</div>
        </div>
      </div>
      <div
        data-w-id="555ee04a-b52e-f8fb-a4a6-d21ac831f8d7"
        className="icons slide-left"
      >
        <div className="icon-container">
          {languages.map(({ id, icon, title }) => (
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

export default Languages;

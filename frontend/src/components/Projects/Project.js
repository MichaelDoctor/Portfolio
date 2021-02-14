import React from 'react';
const Project = ({ img, title, author, date, content, link }) => {
  return (
    <div className="project-content">
      <div className="project-gap" />
      <div className="project">
        <div className="project-left">
          <div className="project-img">
            <img
              src={img}
              loading="lazy"
              width="150"
              height="100"
              sizes="150px"
              alt="project"
              className="proj-img"
            />
          </div>
          <div className="project-author">
            <h4 className="project-title">{title}</h4>
            <h6 className="proj-author">By: {author}</h6>
          </div>
        </div>
        <div className="project-right">
          <div className="project-desc">
            <h6 className="heading-3">Updated: {date}</h6>
            <div className="proj-desc-content">{content}</div>
          </div>
          <div className="project-btn-container">
            <a href={link} className="slider-btn hover1 proj-btn w-button" target="_blank" rel="noopener noreferrer">
              Check it out
            </a>
          </div>
        </div>
      </div>
      <div className="project-gap" />
    </div>
  );
};
export default Project;

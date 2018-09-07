import React from 'react';

const Project = (props) => {
  return (
    <div className="project">
      <div className="project-img">
        img goes here
      </div>
      <div className="project-footer">
        <div className="project-title">{props.title}</div>
        <div className="project-desc">{props.desc}</div>
      </div>
    </div>
  );
};

export default Project;
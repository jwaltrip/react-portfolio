import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ReactImageMagnify from 'react-image-magnify';


const Project = (props) => {
  // logic to see if should show gitbut source chip
  let githubSrcChip = '';
  if (props.showGithubSrcChip) {
    githubSrcChip = <Chip
      avatar={<Avatar src="https://simpleicons.org/icons/github.svg"/>}
      label="GitHub Source"
      component="a"
      href={props.githubSrcLink}
      target="_blank"
      clickable
    />;
  }

  return (
    <div className="project">
      <div className="project-img">
        <ReactImageMagnify {...{
          smallImage: {
            alt: props.title,
            isFluidWidth: true,
            src: props.imgSrc
          },
          largeImage: {
            src: props.enlargedImg,
            width: 514,
            height: 418
          },
          enlargedImageContainerClassName: "enlarged-image",
          enlargedImagePosition: "over",
          className: "responsive-img"
        }} />
      </div>
      <div className="project-footer">
        <div className="footer-container">
          <div className="project-title">{props.title}</div>
          <div className="project-desc">{props.desc}</div>
          <div className="project-chips">
            <Chip
              avatar={<Avatar src="https://simpleicons.org/icons/github.svg"/>}
              label={props.demoChipLabel}
              component="a"
              href={props.demoLink}
              target="_blank"
              clickable
            />
            {githubSrcChip}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import ReactImageMagnify from 'react-image-magnify';


const Project = (props) => {
  let imageWidth = '100%';
  let imageHeight = '';
  if (props.limitImgHeight) {
    imageHeight = '100%';
    imageWidth = '';
  }

  return (
    <div className="project">
      <div className="project-img">
        {/*<img src={props.imgSrc} width={imageWidth} height={imageHeight} />*/}
        <ReactImageMagnify {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: props.imgSrc
          },
          largeImage: {
            src: props.imgSrc,
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
              label="Demo"
              component="a"
              href={props.demoLink}
              target="_blank"
              clickable
            />
            <Chip
              avatar={<Avatar src="https://simpleicons.org/icons/github.svg"/>}
              label="GitHub Source"
              component="a"
              href={props.githubSrcLink}
              target="_blank"
              clickable
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
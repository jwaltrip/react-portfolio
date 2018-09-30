import React from 'react';
import { Container, Row, Col, Visible, Hidden, setConfiguration } from 'react-grid-system';

import ProjectBootstrap from './ProjectBootstrap';

setConfiguration({ containerWidths: [540, 750, 960, 1400], breakpoints: [576, 768, 992, 1319] });

const ProjectGrid = (props) => {
  const col = {
    xs: 12,
    md: 6,
    lg: 3,
    xl: 3
  };

  return (
    <Container style={{ minHeight: '76vh' }}>
      <Hidden lg xl>
        <h2>Projects</h2>
      </Hidden>
      {/*<Visible xs sm md>*/}
        {/*<h2>Projects</h2>*/}
      {/*</Visible>*/}

      <Row>
        <Col md={col.md} xl={col.lg} >
          <ProjectBootstrap
            title="React Todo List"
            desc="A simple todo list written in React - fully styled by myself."
            demoLink="https://jwaltrip.github.io/react-todo-list/"
            githubSrcLink="https://github.com/jwaltrip/react-todo-list"
            imgSrc="https://i.imgur.com/IJ4XNOc.png"
            enlargedImg="https://i.imgur.com/IJ4XNOc.png"
          />
        </Col>
        <Col md={col.md} xl={col.lg} >
          <ProjectBootstrap
            title="EDI Web Portal"
            desc="A web portal built to convert inbound EDI 850 purchase order data and display it nicely formatted."
            imgSrc="https://i.imgur.com/LIgpTAQ.png"
            enlargedImg="https://i.imgur.com/LIgpTAQ.png"
          />
        </Col>
        <Col md={col.md} xl={col.lg} >
          <ProjectBootstrap
            title="React Scoreboard"
            desc="A scoreboard written in React to keep track of winners of: card games, board games, etc."
            demoLink="https://jwaltrip.github.io/react-scoreboard/"
            imgSrc="https://i.imgur.com/drH5uNA.png"
            enlargedImg="https://i.imgur.com/drH5uNA.png"
            limitImgHeight={false}
            githubSrcLink="https://github.com/jwaltrip/react-scoreboard"
          />
        </Col>
        <Col md={col.md} xl={col.lg} >
          <ProjectBootstrap
            title="React Reddit Viewer"
            desc="A simple React view that fetches Reddit's /r/all feed, and displays the feed with simple pagination."
            demoLink="https://jwaltrip.github.io/react-reddit-viewer"
            imgSrc=""
            enlargedImg=""
            limitImgHeight={false}
            githubSrcLink="https://github.com/jwaltrip/react-reddit-viewer"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectGrid;
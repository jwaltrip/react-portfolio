import React from 'react';
import ProjectBootstrap from "./Project";

import { Grid, Col, Row } from 'react-bootstrap';

const ProjectsSectionBootstrap = (props) => {
  return (
    <Grid>
      <Row  className="project-grid">
        <Col xs={12} md={4} lg={3} xl={3}>
          <ProjectBootstrap
            title="React Todo List"
            desc="A simple todo list written in React - fully styled by myself."
            demoLink="https://jwaltrip.github.io/react-todo-list/"
            githubSrcLink="https://github.com/jwaltrip/react-todo-list"
            imgSrc="https://i.imgur.com/IJ4XNOc.png"
            enlargedImg="https://i.imgur.com/IJ4XNOc.png"
          />
        </Col>
        <Col xs={12} md={4} lg={3} xl={3}>
          <ProjectBootstrap
            title="EDI Web Portal"
            desc="A web portal built to convert inbound EDI 850 purchase order data and display it nicely formatted."
            imgSrc="https://i.imgur.com/LIgpTAQ.png"
            enlargedImg="https://i.imgur.com/LIgpTAQ.png"
          />
        </Col>
        <Col xs={12} md={4} lg={3} xl={3}>
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

      </Row>
    </Grid>
  );
};

export default ProjectsSectionBootstrap;
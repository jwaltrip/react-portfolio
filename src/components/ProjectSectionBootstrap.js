import React from 'react';
import ProjectBootstrap from "./Project";

import { Grid, Col, Row } from 'react-bootstrap';

const ProjectsSectionBootstrap = (props) => {
  const cols = {
    xs: 12,
    md: 6,
    lg: 2,
    xl: 2
  };

  return (
    <div className="project-grid-container">
      <Grid>
        <Row  className="project-grid">
          <Col xs={cols.xs} md={cols.md} lg={cols.lg} xl={cols.xl}>
            <ProjectBootstrap
              title="React Todo List"
              desc="A simple todo list written in React - fully styled by myself."
              demoLink="https://jwaltrip.github.io/react-todo-list/"
              githubSrcLink="https://github.com/jwaltrip/react-todo-list"
              imgSrc="https://i.imgur.com/IJ4XNOc.png"
              enlargedImg="https://i.imgur.com/IJ4XNOc.png"
            />
          </Col>
          <Col xs={cols.xs} md={cols.md} lg={cols.lg} xl={cols.xl}>
            <ProjectBootstrap
              title="EDI Web Portal"
              desc="A web portal built to convert inbound EDI 850 purchase order data and display it nicely formatted."
              imgSrc="https://i.imgur.com/LIgpTAQ.png"
              enlargedImg="https://i.imgur.com/LIgpTAQ.png"
            />
          </Col>
          <Col xs={cols.xs} md={cols.md} lg={cols.lg} xl={cols.xl}>
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
          <Col xs={cols.xs} md={cols.md} lg={cols.lg} xl={cols.xl}>
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
      </Grid>
    </div>
  );
};

export default ProjectsSectionBootstrap;
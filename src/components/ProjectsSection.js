import React from 'react';
import Project from "./Project";

const ProjectsSection = (props) => {
  return (
    <section className="projects-section">
      <div className="container">
        <Project
          title="React Todo List"
          desc="A simple todo list written in React - fully styled by myself."
          demoLink="https://jwaltrip.github.io/react-todo-list/"
          githubSrcLink="https://github.com/jwaltrip/react-todo-list"
          imgSrc="https://i.imgur.com/IJ4XNOc.png"
          limitImgHeight={true}
        />
        <Project
          title="EDI Web Portal"
          desc="A web portal built to convert inbound EDI 850 purchase order data and display it nicely formatted."
          imgSrc="https://pieceloveandchocolate.com/wp-content/uploads/2014/08/coming-soon-icon.png"
          limitImgHeight={true}
        />
        <Project
          title="React Scoreboard"
          desc="A scoreboard written in React to keep track of winners of: card games, board games, etc."
          demoLink="https://jwaltrip.github.io/react-scoreboard/"
          imgSrc="https://i.imgur.com/drH5uNA.png"
          limitImgHeight={false}
          githubSrcLink="https://github.com/jwaltrip/react-scoreboard"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
import React, { Component } from 'react';
// import './App.css';
import './App2.css';
import {Header} from "./components/Header";
import BioCard from "./components/BioCard";
import BioSection from "./components/BioSection";

import HeaderSection from "./components/HeaderSection";
import Project from "./components/Project";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Header/>*/}
        {/*<BioSection/>*/}
        <HeaderSection />

        <section className="projects-section">
          <div className="container">
            <Project
              title="React Todo List"
              desc="A simple todo list written in React - fully styled by myself."
              demoLink="https://jwaltrip.github.io/react-todo-list/"
              imgSrc="https://i.imgur.com/IJ4XNOc.png"
              limitImgHeight={true}
            />
            <Project
              title="EDI Web Portal"
              desc="A web portal built to convert inbound EDI 850 purchase order data and display it nicely formatted."
            />
            <Project
              title="React Scoreboard"
              desc="A scoreboard written in React to keep track of winners of: card games, board games, etc."
              demoLink="https://jwaltrip.github.io/react-scoreboard/"
              imgSrc="https://i.imgur.com/WC1BsX1.png"
              limitImgHeight={false}
            />


          </div>
        </section>
      </div>
    );
  }
}

export default App;

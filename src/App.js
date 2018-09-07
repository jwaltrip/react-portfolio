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
              desc="A simple todo list written in React."
            />
            <Project
              title="React Scoreboard"
              desc="A scoreboard written in React to keep track of winners of: card games, board games, etc."
            />
            <Project
              title="EDI Web Portal"
              desc="A web portal built to convert inbound EDI 850 purchase order data and display it nicely formatted."
            />

          </div>
        </section>
      </div>
    );
  }
}

export default App;

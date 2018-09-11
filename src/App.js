import React, { Component } from 'react';
// import './App.css';
import './App2.css';
import {Header} from "./components/Header";
import BioCard from "./components/BioCard";
import BioSection from "./components/BioSection";

import HeaderSection from "./components/HeaderSection";
import ProjectsSection from "./components/ProjectsSection";


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSection />

        <ProjectsSection />

        <section className="contact-form-section">


          <div className="contact-container">
            <h2 className="contact-header-text">Contact Me</h2>

          </div>

        </section>

      </div>
    );
  }
}

export default App;

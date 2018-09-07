import React, { Component } from 'react';
// import './App.css';
import './App2.css';
import {Header} from "./components/Header";
import BioCard from "./components/BioCard";
import BioSection from "./components/BioSection";

import HeaderSection from "./components/HeaderSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Header/>*/}
        {/*<BioSection/>*/}
        <HeaderSection />

        <section className="projects-section">
          <div className="container">
            <h2>Projects</h2>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

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
        {/*<Header/>*/}
        {/*<BioSection/>*/}
        <HeaderSection />

        <ProjectsSection />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import HeaderSection from "./components/HeaderSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactFormSection from './components/ContactFormSection';


class App extends Component {

  render() {
    return (
      <div className="App">
        <HeaderSection />
        <ProjectsSection />
        <ContactFormSection />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Visible, Hidden } from 'react-grid-system';
// import './App.css';
import "./App2.css";

// import scrollToComponent from 'react-scroll-to-component';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import HeaderSection from "./components/HeaderSection";
import ProjectsSectionBootstrap from "./components/ProjectSectionBootstrap";
import ContactFormSection from './components/ContactFormSection';
import ProjectGridContainer from "./components/ProjectGridContainer";
import HeaderSectionMobile from "./components/HeaderSectionMobile";
import WorkHistory from "./components/WorkHistory";


class App extends Component {

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className="App">
        <Hidden xs sm md>
          <HeaderSection />
        </Hidden>
        <Visible xs sm md>
          <HeaderSectionMobile/>
        </Visible>

        <Element name="test1" className="element" >
          <ProjectGridContainer/>
        </Element>

        <WorkHistory/>

      </div>
    );
  }
}

export default App;

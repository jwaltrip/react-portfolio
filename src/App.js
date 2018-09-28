import React, { Component } from 'react';
// import './App.css';
import "./App2.css";

// import scrollToComponent from 'react-scroll-to-component';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import HeaderSection from "./components/HeaderSection";
import ProjectsSectionBootstrap from "./components/ProjectSectionBootstrap";
import ContactFormSection from './components/ContactFormSection';


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
        <HeaderSection />

        <Element name="test1" className="element" >
          <ProjectsSectionBootstrap />
        </Element>

        {/*<ContactFormSection />*/}

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Visible, Hidden } from 'react-grid-system';
// import './App.css';
import "./App2.css";

// import scrollToComponent from 'react-scroll-to-component';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import HeaderSection from "./components/HeaderSection";
import HeaderSectionMobile from "./components/HeaderSectionMobile";
import WorkHistory from "./components/WorkHistory";
import QuoteFooter from "./components/QuoteFooter";
import ProjectGrid from "./components/ProjectGrid";


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
          <ProjectGrid/>
        </Element>

        <WorkHistory/>

        <QuoteFooter/>

      </div>
    );
  }
}

export default App;

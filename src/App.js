import React, { Component } from 'react';
import { Visible, Hidden } from 'react-grid-system';
// import './App.css';
import "./Global.css";

// import scrollToComponent from 'react-scroll-to-component';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";
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
          <HeaderDesktop />
        </Hidden>
        <Visible xs sm md>
          <HeaderMobile/>
        </Visible>

        <Element name="project-section" className="element" >
          <ProjectGrid/>
        </Element>

        <Element name="work-section" className="element" >
          <WorkHistory/>
        </Element>

        <QuoteFooter/>

      </div>
    );
  }
}

export default App;

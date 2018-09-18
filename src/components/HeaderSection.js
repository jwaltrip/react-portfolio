import React, { Component } from 'react';
import GithubIcon from "./GithubIcon";
import LinkedInIcon from "./LinkedInIcon";
import GmailIcon from "./GmailIcon";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const HeaderSection = (props) => {
  return (
    <section className="header-section">
      <div className="container">
        <div className="bio">
          <div className="bio-name">Jake Waltrip</div>
          <div className="bio-sub">
            Full-Stack Javascript Student<br/>
            React • Node • MongoDB
          </div>
        </div>
        <div className="header-center">
          <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >
            ↓ SEE MY PROJECTS ↓
          </Link>
        </div>
        <div className="header-right">
          <GithubIcon width="75" height="75" />
          <LinkedInIcon width="75" height="75" />
          <GmailIcon width="75" height="75" />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
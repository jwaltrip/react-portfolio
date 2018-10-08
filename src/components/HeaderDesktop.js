import React from 'react';
import './HeaderDesktop.css';
import GithubIconDesktop from "./GithubIconDesktop";
import LinkedInIconDesktop from "./LinkedInIconDesktop";
import GmailIconDesktop from "./GmailIconDesktop";
import { Link, DirectLink } from 'react-scroll';


const HeaderDesktop = (props) => {
  return (
    <section className="header-section">
      <div className="container">
        <div className="bio">
          <div className="bio-img-container">
            <div className="bio-img-border">
              <div className="bio-img"> </div>
            </div>
          </div>
          <div className="bio-name">Jake Waltrip</div>
          <div className="bio-sub">
            Full-Stack Javascript Student<br/>
            React • Node • MongoDB
          </div>
        </div>
        <div className="header-center">
          <Link activeClass="active" className="test1" to="project-section" spy={true} smooth={true} duration={500} >
            ↓ SEE MY PROJECTS ↓
          </Link>
        </div>
        <div className="header-right">
          <GithubIconDesktop width="75" height="75" />
          <LinkedInIconDesktop width="75" height="75" />
          <GmailIconDesktop width="75" height="75" />
        </div>
      </div>
    </section>
  );
};

export default HeaderDesktop;
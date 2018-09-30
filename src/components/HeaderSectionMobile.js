import React from 'react';
import './HeaderMobile.css';


import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import GithubIconMobile from "./GithubIconMobile";
import GmailIconMobile from "./GmailIconMobile";
import LinkedInIconMobile from "./LinkedInIconMobile";

const HeaderSectionMobile = (props) => {

  const linkSize = {
    width: 35,
    height: 35
  };

  return (
    <section className="header-section-mobile">
      <div className="container">
        <div className="bio">
          <div className="bio-name">Jake Waltrip</div>
          <div className="bio-sub">
            Full-Stack Javascript Student<br/>
            React • Node • MongoDB
          </div>
          <br/>
          <div className="bio-links">
            <a href="https://github.com/jwaltrip" target="_blank">
              <GithubIconMobile width={linkSize.width} height={linkSize.height} />
            </a>
            <a href="mailto:jake.waltrip@gmail.com" target="_blank">
              <GmailIconMobile width={linkSize.width} height={linkSize.height} />
            </a>
            <a href="https://www.linkedin.com/in/jake-waltrip/" target="_blank">
              <LinkedInIconMobile width={linkSize.width} height={linkSize.height} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSectionMobile;
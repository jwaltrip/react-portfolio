import React, { Component } from 'react';
// import './App.css';
import './App2.css';
import {Header} from "./components/Header";
import BioCard from "./components/BioCard";
import BioSection from "./components/BioSection";
import GithubIcon from "./components/GithubIcon";
import LinkedInIcon from "./components/LinkedInIcon";
import GmailIcon from "./components/GmailIcon";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Header/>*/}
        {/*<BioSection/>*/}
        <section className="header-section">
          <div className="container">
            <div className="bio">
              <div className="bio-name">Jake Waltrip</div>
              <div className="bio-sub">
                Full-Stack Javascript Student<br/>
                React • Node • MongoDB
              </div>
            </div>
            <div className="header-right">
              <GithubIcon width="75" height="75" />
              <LinkedInIcon width="75" height="75" />
              <GmailIcon width="75" height="75" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import './App.css';
import './App2.css';
import {Header} from "./components/Header";
import BioCard from "./components/BioCard";
import BioSection from "./components/BioSection";

import HeaderSection from "./components/HeaderSection";
import ProjectsSection from "./components/ProjectsSection";


class App extends Component {
  state = {
    showContactForm: false
  };

  render() {
    // add css class to toggle show/hide of contact form
    let showContactFormClass = '';
    if (this.state.showContactForm) {
      showContactFormClass = ' show-contact-form';
    }

    return (
      <div className="App">
        <HeaderSection />
        <ProjectsSection />

        <section className="contact-form-section">
          <h2 className="contact-header-text">Contact Me</h2>

          <div className={"contact-form-container" + showContactFormClass}>
            <div className="contact-form-header">
              Let's Get Together!
            </div>
            <div className="contact-sub-text">
              Would you like to chat? Grab some coffee? Collab on a project?<br/>
              So would I!
            </div>
            <div className="contact-form">
              <form className="form" id="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
                <input type="text" placeholder="Your Location" />
                <textarea placeholder="Let me know what I can do for you!" ref="contact-from"/>
                <button>Submit</button>
              </form>
            </div>
          </div>


        </section>

      </div>
    );
  }
}

export default App;

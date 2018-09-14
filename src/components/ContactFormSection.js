import React, { Component } from 'react';

class ContactFormSection extends Component {
  state = {
    showContactForm: false
  };

  toggleContactForm = () => {
    this.setState({showContactForm: !this.state.showContactForm});
  };

  render() {
    // add css class to toggle show/hide of contact form
    let showContactFormClass = ' show';
    if (!this.state.showContactForm) {
      showContactFormClass = ' hide';
    }

    return (
      <section className="contact-form-section">
        <div className="contact-header-text" onClick={this.toggleContactForm}>Contact Me</div>

        <div className={"contact-form-container" + showContactFormClass}>
          <div className={"contact-form-header" + showContactFormClass}>
            Let's Get Together!
          </div>
          <div className={"contact-sub-text" + showContactFormClass}>
            Would you like to chat? Grab some coffee? Collab on a project?<br/>
            So would I!
          </div>
          <div className={"contact-form" + showContactFormClass}>
            <form className={"form" + showContactFormClass} id="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
              <input type="text" placeholder="Your Location" />
              <textarea placeholder="Let me know what I can do for you!" ref="contact-from"/>
              <button>Submit</button>
            </form>
          </div>
        </div>


      </section>
    );
  }
}

export default ContactFormSection;
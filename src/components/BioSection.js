import React, { Component } from 'react';
import BioCard from "./BioCard";

class BioSection extends Component {
  render() {
    return (
      <div className="bio-section">
        <BioCard/>
      </div>
    );
  }
}

export default BioSection;
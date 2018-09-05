import React, { Component } from 'react';

class BioCard extends Component {
  render() {
    return (
      <div className="bio-card">
        <div className="container">
          <div className="bio-text">
            <div className="bio-img"> </div>
            <div className="bio-name">Jake Waltrip</div>
            <div className="bio-subtitle">
              Full-Stack Javascript Student<br/>
              React • Node • MongoDB
            </div>
          </div>

          <div className="bio-right">
            <div className="bio-arrow">
              <i className="fas fa-arrow-alt-circle-right fa-5x"> </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BioCard;
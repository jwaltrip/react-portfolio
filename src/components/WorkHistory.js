import React from 'react';
import { Container, Row, Col, Visible, Hidden, setConfiguration } from 'react-grid-system';
import './WorkHistory.css';

setConfiguration({ containerWidths: [540, 750, 960, 1400], breakpoints: [576, 768, 992, 1319] });


const WorkHistory = (props) => {
  const col = {
    xs: 12,
    md: 6,
    lg: 3,
    xl: 6
  };

  return (
    <div>
      <Hidden lg xl>
        <div className="mobile-projects-header">
          <h2>Work and School History</h2>
        </div>
      </Hidden>
      <Hidden xs sm md>
        <div className="desktop-projects-header">
          <h2>Work and School History</h2>
        </div>
      </Hidden>

      <div className="work-history-section">
        <Container >


          <Row>
            <Col xl={col.xl} className="work">
              <h2 className="work-title">Austin Coding Academy</h2>
              <p>I am currently a full-stack javascript web development student at Austin Coding Academy.</p>
              <p>I will graduate this December with knowledge and expertise in Javascript, React, HTML/CSS, Node/Express, and MongoDB, and will graduate in December with a certificate and program completion of a full-stack Javascript course.</p>
              <br/>
              <p>TWC CERTIFICATION OF FULLSTACK WEB DEVELOPMENT AND PROGRAM COMPLETION</p>
            </Col>
            <Col xl={col.xl} className="work">
              <h2 className="work-title">Lumaprints</h2>
              <p>I have worked (and continue to work) at Lumaprints - a wholesale fine art print shop - managing various areas of their e-commerce store and business</p>
              <h4>Job Experience</h4>
              <ul className="work-list">
                <li>Helped manage a transition/re-brand from Canvas Memoirs to Lumaprints, which included a complete re-build of the e-commerce site</li>
                <li>Worked on client-side with a dev team to communicate many of the unique needs of a e-commerce site tailored for a print shop</li>
                <li>Helped manage the timelines of different phases of development of the new e-commerce site</li>
                <li>Was heavily involved in QA testing of features/imporovements implemented by the dev team</li>
                <li>Acted as a liason between new features implemented by the dev team and our custsomer service/production team, and helped ease the transition for them and let them know what changes to expect</li>
                <li>Setup an EDI document transaction system - myself with a with a co-worker - and implemented a custom ERP system to manage these automatic processes</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WorkHistory;
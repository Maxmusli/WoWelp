import React, { Component } from 'react';

export default class FooterNav extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footer-nav">
          <div className="icons">
            {/* <a href="#!">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-facebook fa-2x"></i>
            </a> */}
            <a href="https://www.linkedin.com/in/maxmus-li/">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/Maxmusli">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="links">
            <div className="about">
              <h2>About</h2>
              <div className="line"></div>
              <div className="about-links">
                <a href="">Portfolio</a>
                <a href={window.resume} target = "_blank">Resume</a>
                <a href="">AngelList</a>
              </div>
            </div>
            <div className="projects">
              <h2>Other Projects</h2>
              <div className="line"></div>
              <div className="project-links">
                <a href="">CampList</a>
                <a href="">Super Mario</a>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

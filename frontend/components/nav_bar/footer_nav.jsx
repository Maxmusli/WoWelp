import React, { Component } from 'react'

export default class FooterNav extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footer-nav">
          <div className="icons">
            <a href="#!">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/Maxmusli/WoWelp">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

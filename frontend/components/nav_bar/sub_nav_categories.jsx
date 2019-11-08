import React, { Component } from 'react'

export default class SubNavCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
    }

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  toggle(e) {
    e.preventDefault();
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter(e) {
    e.preventDefault();
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave(e) {
    e.preventDefault();
    this.setState({ dropdownOpen: false });
  }

  render() { 

    return (
      <div className="sub-nav-categories">
        <div className="wrapper">
          <div className="container">
            <div className="category">
              < a href="" >
                <div className="header-wrapper">
                  <i className="fas fa-utensils"></i>
                  <h3>Restaurants</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a >
            </div>
            
            <div className="category">
              <a href="">
                <div className="header-wrapper">
                  <i className="fas fa-hammer"></i>
                  <h3>Services</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a>
            </div>
            <div className="category">
              <a href="">
                <div className="header-wrapper">
                  <i className="fas fa-chess-rook"></i>
                  <h3>Cities</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a>
            </div>
            <div className="category">
              <a href="">
                <div className="header-wrapper">
                  <h3>More</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a>
            </div>

            <div className="blink">
            </div>

            <div className="category">
              <a href="">
                <div className="header-wrapper">
                  <i className="fas fa-feather-alt"></i>
                  <h3>Write a Review</h3>
                </div>
              </a>
            </div>
            <div className="category">
              <a href="">
                <div className="header-wrapper business">
                  <i className="fas fa-briefcase"></i>
                  <h3>For Businesses</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

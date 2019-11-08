import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
    const restaurantsDropDown = (
      <DropdownMenu className="sub-nav-drop-down">
        <DropdownItem>
          TEST
        </DropdownItem>
      </DropdownMenu>
    )

    const servicesDropDown = (
      <div
        className="sub-nav-drop-down"
        onMouseOver={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <ul className="services-nav">
          <li>
            <a href="">services</a>
          </li>
        </ul>
      </div>
    )

    const citiesDropDown = (
      <div>
        <ul className="cities-nav">
          <li>
            <a href="">cities</a>
          </li>
        </ul>
      </div>
    )

    const moreDropDown = (
      <div
        className="sub-nav-drop-down"
        onMouseOver={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <ul className="more-nav">
          <li>
            <a href="">more</a>
          </li>
        </ul>
      </div>
    )

    

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
              {/* {servicesDropDown} */}
            </div>
            
            <div className="category">
              <a href="">
                <div className="header-wrapper">
                  <i className="fas fa-hammer"></i>
                  <h3>Services</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a>
              {/* {servicesDropDown} */}
            </div>
            <div className="category">
              <a href="">
                <div className="header-wrapper">
                  <i className="fas fa-chess-rook"></i>
                  <h3>Cities</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a>
              {/* {citiesDropDown} */}
            </div>
            <div className="category">
              <a href="">
                <div className="header-wrapper">
                  <h3>More</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a>
              {/* {moreDropDown} */}
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

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class SubNavCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      find: this.props.find,
      near: this.props.near,
    }

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    // this.handleRestaurants = this.handleRestaurants.bind(this);
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

  // handleRestaurants(e) {
  //   e.preventDefault();

  //   if (!this.props.near) {
  //     this.props.near = 'Dalaran';
  //   }   
    
  //   this.props.changeFilter('near', this.props.near)
  //     .then(() => {
  //       this.props.changeFilter('find', 'Restaurant')
  //         .then(() => { this.props.history.push('/search?find=Restaurant&near=Dalaran') })
  //     });
  // };

  componentDidUpdate(prevProps) {

    if (prevProps.near !== this.state.near || prevProps.find !== this.state.find) {
      this.props.changeFilter('near', this.state.near)
        .then(() => {
          this.props.changeFilter('find', this.state.find)
            .then(() => { this.props.history.push('/search?find=Restaurant&near=Dalaran') })
        });
    } 
  }

  render() { 
    
    return (
      <div className="sub-nav-categories">
        <div className="wrapper">
          <div className="container">
            <div className="dropdown">
              <a href=""
                className="dropbtn"
                onClick={() => this.setState({ find: 'Restaurant' })}
              >
                <div className="header-wrapper">
                  <i className="fas fa-utensils"></i>
                  <h3>Restaurants</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a >
              <div className="dropdown-content">
                <a href="#">
                  <i className="fas fa-beer"></i>
                  <p>Bars</p> 
                </a>
                <a href="#">
                  <i className="fas fa-home"></i>
                  <p>Inn</p> 
                </a>
              </div>
            </div>
            
            <div className="dropdown">
              <a href="">
                <div className="header-wrapper">
                  <i className="fas fa-hammer"></i>
                  <h3>Services</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a>
              <div className="dropdown-content">
                <a href="#">Blacksmithing</a>
                <a href="#">Jewelcrafting</a>
                <a href="#">Mechanic</a>
                <a href="#">Barber</a>
                <a href="#">Tailoring</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="">
                <div className="header-wrapper">
                  <i className="fas fa-chess-rook"></i>
                  <h3>Cities</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a>
              <div className="dropdown-content">
                <a >
                  Orgrimmar
                </a>
                <a href="#">Dalaran</a>
                <a href="#">Stormwind</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="">
                <div className="header-wrapper">
                  <h3>More</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a>
              <div className="dropdown-content">
                <a href="#">
                  Horde
                </a>
                <a href="#">
                  Alliance
                </a>
              </div>
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

export default withRouter(SubNavCategories)
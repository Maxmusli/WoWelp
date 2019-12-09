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

    this.handleFilter = this.handleFilter.bind(this);
    this.handleCity = this.handleCity.bind(this);
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

  handleFilter(e, filter) {
    e.preventDefault();

    if (!this.props.near) {
      this.props.near = 'Dalaran';
    }
    this.state.find = filter

    this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', filter)
          .then(() => { this.props.history.push(`/search?find=${filter}&near=${this.props.near}`) })
      });
  };

  handleCity(e, city) {
    e.preventDefault();

    this.state.near = city
    this.props.changeFilter('near', city)
      .then(() => {
        this.props.changeFilter('find', this.state.find)
          .then(() => { this.props.history.push(`/search?find=${this.state.find}&near=${city}`) })
      });
  };

  handleDalaran(e) {
    e.preventDefault();

    this.state.near = 'Dalaran'
    this.props.changeFilter('near', 'Dalaran')
      .then(() => {
        this.props.changeFilter('find', this.state.find)
          .then(() => { this.props.history.push(`/search?find=${this.state.find}&near=Dalaran`) })
      });
  };

  handleOrgrimmar(e) {
    e.preventDefault();

    this.state.near = 'Orgrimmar'
    this.props.changeFilter('near', 'Orgrimmar')
      .then(() => {
        this.props.changeFilter('find', this.state.find)
          .then(() => { this.props.history.push(`/search?find=${this.state.find}&near=Orgrimmar`) })
      });
  };

  handleStormwind(e) {
    e.preventDefault();

    this.state.near = 'Stormwind'
    this.props.changeFilter('near', 'Stormwind')
      .then(() => {
        this.props.changeFilter('find', this.state.find)
          .then(() => { this.props.history.push(`/search?find=${this.state.find}&near=Stormwind`) })
      });
  };

  handleHorde(e) {
    e.preventDefault();

    if (!this.props.near) {
      this.state.near = 'Dalaran';
    }   
    this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', 'Horde')
          .then(() => { this.props.history.push(`/search?find=Horde&near=${this.state.near}`) })
      });
  };
  
  handleAlliance(e) {
    e.preventDefault();

    if (!this.props.near) {
      this.state.near = 'Dalaran';
    }   
    this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', 'Alliance')
          .then(() => { this.props.history.push(`/search?find=Alliance&near=${this.state.near}`) })
      });
  };

  render() { 
    
    return (
      <div className="sub-nav-categories">
        <div className="wrapper">
          <div className="container">
            <div className="dropdown">
              <a href=""
                className="dropbtn"
                onClick={e => this.handleFilter(e, 'Restaurant')}
              >
                <div className="header-wrapper">
                  <i className="fas fa-utensils"></i>
                  <h3>Restaurants</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a >
              <div className="dropdown-content">
                <a onClick={e => this.handleFilter(e, 'Bars')}>
                  <i className="fas fa-beer"></i>
                  <p>Bars</p> 
                </a>
                <a onClick={e => this.handleFilter(e, 'Inn')}>
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
                <a onClick={e => this.handleFilter(e, 'Blacksmithing')}>Blacksmithing</a>
                <a onClick={e => this.handleFilter(e, 'Jewelry Shop')}>Jewelcrafting</a>
                <a onClick={e => this.handleFilter(e, 'Mechanic')}>Mechanic</a>
                <a onClick={e => this.handleFilter(e, 'Barber')}>Barber</a>
                <a onClick={e => this.handleFilter(e, 'Tailoring')}>Tailoring</a>
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
                <a onClick={e => this.handleCity(e, 'Orgrimmar')}>
                  Orgrimmar
                </a>
                <a onClick={e => this.handleCity(e, 'Dalaran')}>
                  Dalaran
                </a>
                <a onClick={e => this.handleCity(e, 'Stormwind')}>
                  Stormwind
                </a>
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
                <a onClick={e => this.handleFilter(e, 'Horde')}>
                  Horde
                </a>
                <a onClick={e => this.handleFilter(e, 'Alliance')}>
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
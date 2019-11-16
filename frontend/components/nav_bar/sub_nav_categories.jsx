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

    this.handleRestaurants = this.handleRestaurants.bind(this);
    this.handleBars = this.handleBars.bind(this);
    this.handleInn = this.handleInn.bind(this);
    this.handleBlacksmithing = this.handleBlacksmithing.bind(this);
    this.handleJewelcrafting = this.handleJewelcrafting.bind(this);
    this.handleMechanic = this.handleMechanic.bind(this);
    this.handleBarber = this.handleBarber.bind(this);
    this.handleTailoring = this.handleTailoring.bind(this);
    this.handleOrgrimmar = this.handleOrgrimmar.bind(this);
    this.handleDalaran = this.handleDalaran.bind(this);
    this.handleStormwind = this.handleStormwind.bind(this);
    this.handleHorde = this.handleHorde.bind(this);
    this.handleAlliance = this.handleAlliance.bind(this);
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

  // componentDidUpdate(prevProps) {
    
    //   if (prevProps.near !== this.state.near || prevProps.find !== this.state.find) {
      //     this.props.changeFilter('near', this.state.near)
      //       .then(() => {
        //         this.props.changeFilter('find', this.state.find)
        //           .then(() => { this.props.history.push('/search?find=Restaurant&near=Dalaran') })
        //       });
        //   } 
  // }
  
  handleRestaurants(e) {
    e.preventDefault();

    if (!this.props.near) {
      this.state.near = 'Dalaran';
    }   
    this.state.find = 'Restaurant'

    this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', 'Restaurant')
          .then(() => { this.props.history.push(`/search?find=${this.state.find}&near=${this.state.near}`) })
      });
  };

  handleBars(e) {
    e.preventDefault();

    if (!this.props.near) {
      this.state.near = 'Dalaran';
    }   
    this.state.find = 'Bars'

    this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', 'Bars')
          .then(() => { this.props.history.push(`/search?find=${this.state.find}&near=${this.state.near}`) })
      });
  };

  handleInn(e) {
    e.preventDefault();

    if (!this.props.near) {
      this.state.near = 'Dalaran';
    }   
    this.state.find = 'Inn'

    this.props.changeFilter('near', this.state.near)
      .then(() => {
        this.props.changeFilter('find', 'Inn')
          .then(() => { this.props.history.push(`/search?find=${this.state.find}&near=${this.state.near}`) })
      });
  };

  handleBlacksmithing(e) {
    e.preventDefault();

    if (!this.props.near) {
      this.state.near = 'Dalaran';
    }   
    this.state.find = 'Blacksmithing'

    this.props.changeFilter('near', this.state.near)
      .then(() => {
        this.props.changeFilter('find', 'Blacksmithing')
          .then(() => { this.props.history.push(`/search?find=${this.state.find}&near=${this.state.near}`) })
      });
  };

  handleJewelcrafting(e) {
    e.preventDefault();

    if (!this.props.near) {
      this.state.near = 'Dalaran';
    }   
    this.state.find = 'Jewelcrafting'

    this.props.changeFilter('near', this.state.near)
      .then(() => {
        this.props.changeFilter('find', 'Jewelry Shop')
          .then(() => { this.props.history.push(`/search?find=${this.state.find}&near=${this.state.near}`) })
      });
  };

  handleMechanic(e) {
    e.preventDefault();

    if (!this.props.near) {
      this.state.near = 'Dalaran';
    }  
    this.state.find = 'Mechanic'
 
    this.props.changeFilter('near', this.state.near)
      .then(() => {
        this.props.changeFilter('find', 'Mechanic')
          .then(() => { this.props.history.push(`/search?find=${this.state.find}&near=${this.state.near}`) })
      });
  };

  handleBarber(e) {
    e.preventDefault();

    if (!this.props.near) {
      this.state.near = 'Dalaran';
    }   
    this.state.find = 'Barber'

    this.props.changeFilter('near', this.state.near)
      .then(() => {
        this.props.changeFilter('find', 'Barber')
          .then(() => { this.props.history.push(`/search?find=${this.state.find}&near=${this.state.near}`) })
      });
  };

  handleTailoring(e) {
    e.preventDefault();

    if (!this.props.near) {
      this.state.near = 'Dalaran';
    }
    this.state.find = 'Tailoring'

    this.props.changeFilter('near', this.state.near)
      .then(() => {
        this.props.changeFilter('find', this.state.find)
          .then(() => { this.props.history.push(`/search?find=${this.state.find}&near=${this.state.near}`) })
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
                onClick={this.handleRestaurants}
              >
                <div className="header-wrapper">
                  <i className="fas fa-utensils"></i>
                  <h3>Restaurants</h3>
                  <i className="fas fa-caret-down"></i>
                </div>
              </a >
              <div className="dropdown-content">
                <a onClick={this.handleBars}>
                  <i className="fas fa-beer"></i>
                  <p>Bars</p> 
                </a>
                <a onClick={this.handleInn}>
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
                <a onClick={this.handleBlacksmithing}>Blacksmithing</a>
                <a onClick={this.handleJewelcrafting}>Jewelcrafting</a>
                <a onClick={this.handleMechanic}>Mechanic</a>
                <a onClick={this.handleBarber}>Barber</a>
                <a onClick={this.handleTailoring}>Tailoring</a>
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
                <a onClick={this.handleOrgrimmar}>
                  Orgrimmar
                </a>
                <a onClick={this.handleDalaran}>Dalaran</a>
                <a onClick={this.handleStormwind}>Stormwind</a>
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
                <a onClick={this.handleHorde}>
                  Horde
                </a>
                <a onClick={this.handleAlliance}>
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
import React from 'react';
import { withRouter } from 'react-router-dom';

class BrowseCategory extends React.Component {
  constructor(props) {
    super(props);

    this.handleRestaurants = this.handleRestaurants.bind(this);
    this.handleBlacksmith = this.handleBlacksmith.bind(this);
    this.handleBarber = this.handleBarber.bind(this);
    this.handleBars = this.handleBars.bind(this);
    this.handleMechanic = this.handleMechanic.bind(this);
    this.handleJewelry = this.handleJewelry.bind(this);
    this.handleTailoring = this.handleTailoring.bind(this);
  }

  handleRestaurants(e) {
    e.preventDefault();
    
    if (!this.props.near) {
      this.props.near = 'Dalaran';
    }
    
    this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', 'Restaurant')
          .then(() => { this.props.history.push('/search?find=Restaurant&near=Dalaran') })
      });
  };
  
  handleBlacksmith(e) {
    e.preventDefault();
    
    if (!this.props.near) {
      this.props.near = 'Dalaran';
    }
    
    this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', 'Blacksmithing')
          .then(() => { this.props.history.push('/search?find=Blacksmithing&near=Dalaran') })
      });
  };
  
  handleBarber(e) {
    e.preventDefault();
    
    if (!this.props.near) {
      this.props.near = 'Dalaran';
    }
    
    this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', 'Barber')
          .then(() => { this.props.history.push('/search?find=Barber&near=Dalaran') })
      });
  };
  
  handleBars(e) {
    e.preventDefault();
    
    if (!this.props.near) {
      this.props.near = 'Dalaran';
    }
    
    this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', 'Bars')
          .then(() => { this.props.history.push('/search?find=Bars&near=Dalaran') })
      });
  };
  
  handleMechanic(e) {
    e.preventDefault();
    
    if (!this.props.near) {
      this.props.near = 'Dalaran';
    }
    
    this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', 'Mechanic')
          .then(() => { this.props.history.push('/search?find=Mechanic&near=Dalaran') })
      });
  };
  
  handleJewelry(e) {
    e.preventDefault();
    
    if (!this.props.near) {
      this.props.near = 'Dalaran';
    }
    
    this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', 'Jewelry Shop')
          .then(() => { this.props.history.push('/search?find=Jewelry Shop&near=Dalaran') })
      });
  };
  
  handleTailoring(e) {
    e.preventDefault();
    
    if (!this.props.near) {
      this.props.near = 'Dalaran';
    }
    
    this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', 'Tailoring')
          .then(() => { this.props.history.push('/search?find=Tailoring&near=Dalaran') })
      });
  };

  render () {
    
    return (
      <div className="browse-category">
        <div className="browse-category-wrapper">
          <div className="browse-category-title">
            Browse Businesses by Category
            </div>
          <ul className="browse-categories level-1">
            <li className="browse-nav-category">
              <a onClick={this.handleRestaurants}>
                <img src="https://i.imgur.com/2HCTLcU.png" alt="" />
                <h3>Restaurants</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a onClick={this.handleBlacksmith}>
                <img src="https://i.imgur.com/xQHZCsP.png" alt="" />
                <h3>Blacksmithing</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a onClick={this.handleBarber}>
                <img src="https://i.imgur.com/Hs6T4to.png" alt="" />
                <h3>Beauty & Barber</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a onClick={this.handleBars}>
                <img src="https://i.imgur.com/Mwtuz2p.png" alt="" />
                <h3>Bars</h3>
              </a>
            </li>
          </ul>
          <ul className="browse-categories level-2">
            <li className="browse-nav-category">
              <a onClick={this.handleMechanic}>
                <img src="https://i.imgur.com/TdKKEKn.png" alt="" />
                <h3>Mechanic</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a onClick={this.handleJewelry}>
                <img src="https://i.imgur.com/Lhrytji.png" alt="" />
                <h3>Jewelry Shops</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a onClick={this.handleTailoring}>
                <img src="https://i.imgur.com/geQLRuc.png" alt="" />
                <h3>Tailoring</h3>
              </a>
            </li>
            <li className="browse-nav-category">
              <a className="more-cate" href="">
                <i className="fas fa-ellipsis-h"></i>
                <h3>More Categories</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(BrowseCategory);
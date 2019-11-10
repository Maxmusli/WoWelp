import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      find: "",
      near: this.props.near,
    };

    this.handleRestaurants = this.handleRestaurants.bind(this);
  }

  handleRestaurants(e) {
    e.preventDefault();

    this.props.changeFilter('near', 'Orgrimmar')
      .then(() => {
        this.props.changeFilter('find', 'Restaurant')
          .then(() => {this.props.history.push('/search?find=restaurant&near=orgrimmar')})
      });
  };

  render() {
    
    return (
      <div>
        <form className="search-filter">
          <div className="search">
            <span className="input-title">Find</span>
            <span className="input-body">
              beer, ramen, blacksmith, action house...
              </span>
            <div className="split-line"></div>
          </div>
          <div className="filter">
            <span className="input-title">Near</span>
          </div>
          <div className="search-btn-wrapper">
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <ul className="nav-categories">
          <li className="nav-category">
            <i className="fas fa-utensils"></i>
            <a onClick={this.handleRestaurants}>Restaurants</a>
          </li>
          <li className="nav-category">
            <i className="fas fa-hammer"></i>
            <a href="">Blacksmith</a>
          </li>
          <li className="nav-category">
            <i className="fas fa-cut"></i>
            <a href="">Barber Shops</a>
          </li>
          <li className="nav-category">
            <i className="fas fa-cocktail"></i>
            <a href="">Bars</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Search);
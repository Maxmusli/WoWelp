import React from 'react';
import BusinessIndex from '../business/business_index';
import SubNavContainer from '../nav_bar/sub_nav_container';
import Footer from '../nav_bar/footer_nav'
import FilterBar from './filter_bar';

export default class Search extends React.Component {
  componentDidMount() {
    this.props.fetchBusinesses();
  }

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
            <a href="">Restaurants</a>
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
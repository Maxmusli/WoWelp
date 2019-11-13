import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import BrowseCategoryContainer from './browse_category_container';
import Footer from '../nav_bar/footer_nav';
import CityNavContainer from '../nav_bar/city_nav_container';


export default class Home extends React.Component {

  render() {
    
    return (
      <div>
        <header>
          <NavBarContainer />
        </header>
        <div className="home">
          <div className="bar-1"></div>

          <CityNavContainer />
        
          <div className="bar-2"></div>

          <BrowseCategoryContainer />

          <div className="bar-2"></div>

          <div className="footer-background">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

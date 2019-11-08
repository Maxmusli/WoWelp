import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import BrowseCategory from './browse_category';
import Footer from './footer';

export default () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <div className="home">
      <div className="bar-1"></div>

      <div className="city-nav">
        <div className="cities-wrapper">
          <div className="cities-title">
            WoWelp Cities
          </div>
          <ul className="city-themes">
            <li className="city">
              <a href="">
                <img src="dalaran.jpg" alt=""/>
                <h3>Dalaran</h3>
              </a>
            </li>
            <li className="city">
              <a href="">
                <img src="orgrimmar-logo.jpg" alt="" />
                <h3>Orgrimmar</h3>
              </a>
            </li>
            <li className="city">
              <a href="">
                <img src="stormwind.jpg" alt="" />
                <h3>Stormwind</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    
      <div className="bar-2"></div>

      <BrowseCategory />

      <div className="bar-2"></div>

      <div className="footer-background">
        <Footer />
      </div>
    </div>
  </div>
)
import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import BrowseCategory from './browse_category';
import Footer from '../nav_bar/footer_nav';

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
                <img src="https://i.imgur.com/MvRlnQH.jpg" alt=""/>
                <h3>Dalaran</h3>
              </a>
            </li>
            <li className="city">
              <a href="">
                <img src="https://i.imgur.com/kRHOAxB.jpg" alt="" />
                <h3>Orgrimmar</h3>
              </a>
            </li>
            <li className="city">
              <a href="">
                <img src="https://i.imgur.com/ydHGkt3.jpg" alt="" />
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
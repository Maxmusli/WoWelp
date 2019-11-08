import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();

    const menuNav = document.querySelector('.menu-nav');
    const navItems = document.querySelectorAll('.nav-item');

    if (!$(".menu-nav").hasClass("show")) {
      menuNav.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));
    } else {
      menuNav.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));
    }
  }

  render() {
    const { currentUser, logout } = this.props;

    const display = currentUser ? (
      <div>
        <div className="user-display">
          <p>Greetings, {currentUser.fname}</p>
          <button className="menu-btn"
            onClick={(e) => {this.handleClick(e)}}
          ><i className="far fa-caret-square-down"></i></button>
        </div>
        <ul className="menu-nav">
          <li>
            {/* <Link>About Me</Link> */}
            <p className="menu-nav-btn">About Me</p>
          </li>
          <li>
            {/* <Link>My Reviews</Link> */}
            <p className="menu-nav-btn">My Reviews</p>
          </li>
          <li>
            <button className="menu-nav-btn" onClick={logout}>Log Out</button>
          </li>
        </ul>
      </div>
    ) : (
        <div className="headernav">
          <Link className="btn-login" to="/login">
            Log In
          </Link>
          <Link className="btn-signup" to="/signup">
            Sign Up
          </Link>
        </div>
      );
    
    return (
      <header className="topheader">
        <div className="nav-bar">
          <div className="topbar">
            <div className="topleft-wrapper">
              <a className="topleft" href="">
                Write a Review
              </a>
              <a className="topleft" href="">
                News
              </a>
              <a className="topleft" href="">
                Forum
              </a>
            </div>
            {display}
          </div>
          <div className="midbar">
            <div className="header">
              WoWelp
              <img src="https://i.imgur.com/4n3wSAR.png" />
            </div>
          </div>
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
      </header>
    );
  }
}


import React from 'react'
import { Link } from 'react-router-dom'
import SearchContainer from '../search/search_container';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

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
            <Link className="topleft" to='/underconstruction'>
              About Me
            </Link>
          </li>
          <li>
            <Link className="topleft" to='/underconstruction'>
              My Reviews
            </Link>
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
              <Link className="topleft" to='/underconstruction'>
                Write a Review
              </Link>
              <Link className="topleft" to='/underconstruction'>
                News
              </Link>
              <Link className="topleft" to='/underconstruction'>
                Forum
              </Link>
            </div>
            {display}
          </div>
          <div className="midbar">
            <div className="header">
              WoWelp
              <img src="https://i.imgur.com/4n3wSAR.png" />
            </div>
          </div>
          <SearchContainer />
        </div>
      </header>
    );
  }
}


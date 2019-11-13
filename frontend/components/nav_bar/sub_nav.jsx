import React from 'react'
import { Link } from 'react-router-dom'
import SubNavCategories from './sub_nav_categories';
import { withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBody: "",
      find: "",
      near: this.props.near,
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
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
            onClick={(e) => { this.handleClick(e) }}
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
            <h3>Log In</h3>
          </Link>
          <Link className="btn-signup" to="/signup">
            <h3>Sign Up</h3>
          </Link>
        </div>
      );
    
    return (
      <div>
        <div className="sub-nav-wrapper">
          <div className="sub-top-bar">
            <div className="sub-logo">
              <div className="header">
                <Link className="btn-home" to="/">
                  WoWelp
                  <img src="https://i.imgur.com/4n3wSAR.png" />
                </Link>
              </div>
            </div>
            <form className="sub-search-filter">
              <div className="search">
                <span className="input-title">Find</span>
                <div>
                  <input className="input-body"
                    type="text"
                    onChange={this.handleInput('searchBody')}
                    value={this.state.searchBody}
                    placeholder="beer, ramen, blacksmith, action house..."
                  />
                </div>
                <div className="split-line"></div>
              </div>
              <div className="filter">
                <span className="input-title">Near</span>
                <div>
                  <input className="input-body"
                    type="text"
                    onChange={this.handleInput('near')}
                    value={this.state.near}
                  />
                </div>
              </div>
              <div className="search-btn-wrapper">
                <button className="search-btn">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
            <div className="sub-user-display">
              {display}
            </div>
          </div>
        </div>

        <div>
          <SubNavCategories 
            changeFilter={this.props.changeFilter}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar)
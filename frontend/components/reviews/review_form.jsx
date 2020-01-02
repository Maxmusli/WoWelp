import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import FooterNav from '../nav_bar/footer_nav';
import Ratings from 'react-ratings-declarative';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.review

    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToShow = this.redirectToShow.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  redirectToShow() {
    const url = `/search/${this.props.match.params.businessId}`
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const businessId = parseInt(this.props.match.params.businessId);
    const review = Object.assign({}, this.state, { business_id: businessId });
    this.props.submitReview(review);
    this.redirectToShow();
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleEventListener(e, type, star) {
    e.preventDefault()

    let five = document.getElementById('five');
    let four = document.getElementById('four');
    let three = document.getElementById('three');
    let two = document.getElementById('two');
    let one = document.getElementById('one');

    if (type === 'mouseover') {
      // star.addEventListener('mouseover', () => {
        five.style.backgroundColor = '#dd050b';
        four.style.backgroundColor = '#dd050b';
        three.style.backgroundColor = '#dd050b';
        two.style.backgroundColor = '#dd050b';
        one.style.backgroundColor = '#dd050b';
      // })
    }

    if (type === 'mouseout') {
      // star.addEventListener('mouseout', () => {
        five.style.backgroundColor = '';
        four.style.backgroundColor = '';
        three.style.backgroundColor = '';
        two.style.backgroundColor = '';
        one.style.backgroundColor = '';
      // })
    }
  }

  render() {
    const { currentUser, logout } = this.props;
    let placeholder = "Your review helps others learn about great local businesses. \n \nPlease don’t review this business if you received a freebie for writing this review, or if you’re connected in any way to the owner or employees.";

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
          <div className="review-sub-top-bar">
            <div className="sub-logo">
              <div className="header">
                <Link className="btn-home" to="/">
                  WoWelp
                  <img src="https://i.imgur.com/4n3wSAR.png" />
                </Link>
              </div>
            </div>
            <div className="sub-user-display">
              {display}
            </div>
          </div>
        </div>
        <div className="bar-2"></div>
        <div className="review-form-container">
          <div className="review-form-wrapper">
            <div className="review-form-title">
              {this.props.business.name}
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="text-box">
                <div className="select-rating">
                  <div>
                    <input
                      type="radio" name="rating" className="one"
                      value={5} onChange={this.handleInput('rating')}
                      checked={this.state.rating === 5 ? true : false}
                      onMouseOver={e => this.handleEventListener(e, 'mouseover', one)}
                      onMouseOut={e => this.handleEventListener(e, 'mouseout', one)}
                    />
                    <label id="one" >
                      <i className="far fa-star"></i>
                    </label>

                    <input
                      type="radio" name="rating" className="two"
                      value={4} onChange={this.handleInput('rating')}
                      checked={this.state.rating === 4 ? true : false}
                      onMouseOver={e => this.handleEventListener(e, 'mouseover', two)}
                      onMouseOut={e => this.handleEventListener(e, 'mouseout', two)}
                    />
                    <label id="two" >
                      <i className="far fa-star"></i>
                    </label>

                    <input
                      type="radio" name="rating" className="three"
                      value={3} onChange={this.handleInput('rating')}
                      checked={this.state.rating === 3 ? true : false}
                      onMouseOver={e => this.handleEventListener(e, 'mouseover', three)}
                      onMouseOut={e => this.handleEventListener(e, 'mouseout', three)}
                    />
                    <label id="three" >
                      <i className="far fa-star"></i>
                    </label>

                    <input
                      type="radio" name="rating" className="four"
                      value={2} onChange={this.handleInput('rating')}
                      checked={this.state.rating === 2 ? true : false}
                      onMouseOver={e => this.handleEventListener(e, 'mouseover', four)}
                      onMouseOut={e => this.handleEventListener(e, 'mouseout', four)}
                    />
                    <label id="four" >
                      <i className="far fa-star"></i>
                    </label>

                    <input
                      type="radio" name="rating" className="five"
                      value={1} onChange={this.handleInput('rating')}
                      checked={this.state.rating === 1 ? true : false}
                      onMouseOver={e => this.handleEventListener(e, 'mouseover', five)}
                      onMouseOut={e => this.handleEventListener(e, 'mouseout', five)}
                    />
                    <label id="five" >
                      <i className="far fa-star"></i>
                    </label>
                  </div>
                  <label>Select your rating</label>
                </div>
                <div className="write-review">
                  <textarea
                    className="" 
                    cols="30" 
                    rows="10"
                    value={this.state.body} 
                    onChange={this.handleInput('body')}
                    placeholder={placeholder}
                  />
                </div>
              </div>
              <div className="post-review">
                <input type="submit" value={this.props.formType} className="btn" />
              </div>
            </form>
          </div>
        </div>
        <div className="bar-2"></div>
        <FooterNav />
      </div>
    )
  }
};

export default withRouter(ReviewForm);
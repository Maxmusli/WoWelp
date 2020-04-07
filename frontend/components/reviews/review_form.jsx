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
    this.changeRating = this.changeRating.bind(this);
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

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
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
            <Link className="menu-nav-btn" to={`/users/${currentUser.id}`}>
              About Me
            </Link>
          </li>
          {/* <li>
            <Link>My Reviews</Link>
            <p className="menu-nav-btn">My Reviews</p>
          </li> */}
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
                  <Ratings
                    rating={this.state.rating}
                    widgetRatedColors="#0B86CA"
                    widgetHoverColor="red"
                    widgetSpacings="3px"
                    changeRating={this.changeRating}
                  >
                    <Ratings.Widget 
                      widgetDimension="30px"                      
                    />
                    <Ratings.Widget
                      widgetDimension="30px"
                    />
                    <Ratings.Widget
                      widgetDimension="30px"
                    />
                    <Ratings.Widget 
                      widgetDimension="30px"
                    />
                    <Ratings.Widget 
                      widgetDimension="30px"
                    />
                  </Ratings>
                  <label> Select your rating</label>
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
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../home/footer';

export default class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fname: '',
      lname: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      // .then(() => this.props.histroy.push())
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error:${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  guestLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, {
      email: 'guest_user@gmail.com',
      fname: 'Guest',
      lname: 'Guest',
      password: 'password'
    })
    this.props.login(user)
  }

  render() {
    const display = this.props.formType === 'login' ? (
      <div className="login">
        <div className="header">Log In to WoWelp</div>
        <div className="social">
          <button className="fb-btn">
            <i className="fab fa-facebook-square"></i>
            <p>Facebook</p>
          </button>
          <button className="google-btn">
            <img src="https://i.imgur.com/4KIne8b.jpg" />
            <p>Google</p>
          </button>
        </div>
        <div className="demo">
          <button onClick={(e) => { this.guestLogin(e) }} className="demo-btn">
            Log In as Guest
          </button>
        </div>
        <fieldset className="hr-line">
          <legend align="center">OR</legend>
        </fieldset>
        <form onSubmit={(e) => { this.handleSubmit(e) }}>
          <div className="err-container">
            {this.renderErrors()}
          </div>
          <div className="login-form">
            <label className="placeholder-sub">Email:</label>
              <input
                id="email"
                type="text"
                onChange={this.handleInput('email')}
                value={this.state.email}
                placeholder="Email"
              />
            <label className="placeholder-sub">Password:</label>
              <input
                id="password"
                type="password"
                onChange={this.handleInput('password')}
                value={this.state.password}
                placeholder="Password"
              />
            <input type="submit" value="Log In" className="btn" />
          </div>
          <div className="sub-text">
            New to WoWelp?
            <Link className="link-btn" to='/signup' > Sign Up</Link>
          </div>
        </form>
      </div>
    ) : (
        <div className="signup">
          <div className="header">Sign Up for WoWelp</div>
          <div className="social">
            <button className="fb-btn">
              <i className="fab fa-facebook-square"></i>
              <p>Facebook</p>
            </button>
            <button className="google-btn">
              <img src="https://i.imgur.com/4KIne8b.jpg" />
              <p>Google</p>
            </button>
          </div>
          <div className="demo">
            <button onClick={(e) => { this.guestLogin(e) }} className="demo-btn">
              Log In as Guest
          </button>
          </div>
          <fieldset className="hr-line">
            <legend align="center">OR</legend>
          </fieldset>
          <form onSubmit={(e) => { this.handleSubmit(e) }}>
            <div className="err-container">
              {this.renderErrors()}
            </div>
            <div className="signup-form">
              <ul className="inline-layout">
                <li>
                  <label className="placeholder-sub">First Name</label>
                    <input
                      id="fname"
                      type="text"
                      onChange={this.handleInput('fname')}
                      value={this.state.fname}
                      placeholder="First Name"
                    />
                </li>
                <li>
                  <label className="placeholder-sub">Last Name</label>
                    <input
                      id="lname"
                      type="text"
                      onChange={this.handleInput('lname')}
                      value={this.state.lname}
                      placeholder="Last Name"
                    />
                </li>
              </ul>
              <label className="placeholder-sub">Email</label>
                <input
                  id="email"
                  type="text"
                  onChange={this.handleInput('email')}
                  value={this.state.email}
                  placeholder="Email"
                />
              <label className="placeholder-sub">Password</label>
                <input
                  id="password"
                  type="password"
                  onChange={this.handleInput('password')}
                  value={this.state.password}
                  placeholder="Password"
                />
              <input type="submit" value="Sign Up" className="btn" />
            </div>
            <div className="sub-text">
              Already on WoWely?
              <Link className="link-btn" to='/login' > Log In</Link>
            </div>
          </form>
        </div>
      )

    return (
      <div className="background">
        <div className="session-page">
          <div className="homepage-redirect">
            <Link className="btn-home" to='/'>WoWelp</Link>
            <img src="https://i.imgur.com/4n3wSAR.png" />
          </div>
          <div className="session-form">
            <div className="form">
              {display}
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    )
  }
}

import React, { Component } from 'react'
import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_action";

class OAuth extends Component {
  constructor(props) {
    super(props);

    this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin(e) {
    e.preventDefault();
    const user = {
      email: 'guest123@gmail.com',
      fname: 'Guest',
      lname: 'Guest',
      password: 'password'
    }
    this.props.login(user)
      .then(() => this.props.history.goBack());
  }

  render() {
    return (
      <div>
        <div>
          <p>Sorry, this functionality is under construction</p>
        </div>
        <div>
          <span>Want to try demo login?</span>
          <a onClick={this.guestLogin}> Demo Login</a>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  null, 
  mapDispatchToProps
)(OAuth)
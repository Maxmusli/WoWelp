import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class UnderConstruction extends Component {
  constructor(props) {
    super(props)

    this.handleBack = this.handleBack.bind(this);
  }

  handleBack(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  render() {
    
    return (
      <div>
        <div className="const-homepage-redirect">
          <Link className="btn-home" to='/'>WoWelp</Link>
          <img src="https://i.imgur.com/4n3wSAR.png" />
        </div>

        <div className="under-const-wrapper">
          <div className="under-const-container">
            <div className="under-const-message">
              <p>Under Construction</p>
              <button onClick={this.handleBack}>
                <h3>Back</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(UnderConstruction)
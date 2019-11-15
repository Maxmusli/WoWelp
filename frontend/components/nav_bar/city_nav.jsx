import React from 'react';
import { withRouter } from 'react-router-dom';

class CityNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      find: '',
      near: '',
    }

  }

  componentDidUpdate(prevProps) {

    if (prevProps.near !== this.state.near) {
      this.props.changeFilter('near', this.state.near)
        .then(() => {
          this.props.changeFilter('find', this.state.find)
            .then(() => { this.props.history.push(`/search?near=${this.state.near}`) })
        });
    } else {
      this.props.history.push(`/search?find=${this.state.find}&near=${this.state.near}`)
    }
  }

  render() {
    
    return (
      <div className="city-nav">
        <div className="cities-wrapper">
          <div className="cities-title">
            WoWelp Cities
              </div>
          <ul className="city-themes">
            <li className="city">
              <a onClick={() => this.setState({ near: 'Dalaran' })}>
                <img src="https://i.imgur.com/MvRlnQH.jpg" alt="" />
                <h3>Dalaran</h3>
              </a>
            </li>
            <li className="city">
              <a onClick={() => this.setState({ near: 'Orgrimmar' })}>
                <img src="https://i.imgur.com/kRHOAxB.jpg" alt="" />
                <h3>Orgrimmar</h3>
              </a>
            </li>
            <li className="city">
              <a onClick={() => this.setState({ near: 'Stormwind' })}>
                <img src="https://i.imgur.com/ydHGkt3.jpg" alt="" />
                <h3>Stormwind</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(CityNav);
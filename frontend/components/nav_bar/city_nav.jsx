import React from 'react';
import { withRouter } from 'react-router-dom';

class CityNav extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   find: '',
    //   near: '',
    // }

    this.handleCity = this.handleCity.bind(this);
  }

  handleCity(e, city) {
    e.preventDefault();

    this.props.changeFilter('near', city)
      .then(() => {
        this.props.changeFilter('find', '')
          .then(() => { this.props.history.push(`/search?near=${city}`) })
      })
    // this.props.changeFilter('near', city)
    //   .then(() => { this.props.history.push(`/search?near=${city}`) })
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
              <a onClick={e => this.handleCity(e, 'Dalaran')}>
                <img src="https://i.imgur.com/MvRlnQH.jpg" alt="" />
                <h3>Dalaran</h3>
              </a>
            </li>
            <li className="city">
              <a onClick={e => this.handleCity(e, 'Orgrimmar')}>
                <img src="https://i.imgur.com/kRHOAxB.jpg" alt="" />
                <h3>Orgrimmar</h3>
              </a>
            </li>
            <li className="city">
              <a onClick={e => this.handleCity(e, 'Stormwind')}>
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
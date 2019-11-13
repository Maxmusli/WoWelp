import React from 'react';
import { withRouter } from 'react-router-dom';

class CityNav extends React.Component {
  constructor(props) {
    super(props);


  }

  handleRestaurants(e) {
    e.preventDefault();

    this.props.changeFilter('near', 'Dalaran')
      .then(() => {
        this.props.changeFilter('find', 'Restaurant')
          .then(() => { this.props.history.push('/search?find=Restaurant&near=Dalaran') })
      });
  };

  render() {

    return (
      <div className="city-nav">
        <div className="cities-wrapper">
          <div className="cities-title">
            WoWelp Cities
              </div>
          <ul className="city-themes">
            <li className="city">
              <a href="">
                <img src="https://i.imgur.com/MvRlnQH.jpg" alt="" />
                <h3>Dalaran</h3>
              </a>
            </li>
            <li className="city">
              <a href="">
                <img src="https://i.imgur.com/kRHOAxB.jpg" alt="" />
                <h3>Orgrimmar</h3>
              </a>
            </li>
            <li className="city">
              <a href="">
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
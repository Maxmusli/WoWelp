import React from 'react';
import { withRouter } from 'react-router-dom';

class CityNav extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   find: '',
    //   near: '',
    // }

    this.handleDalaran = this.handleDalaran.bind(this);
    this.handleOrgrimmar = this.handleOrgrimmar.bind(this);
    this.handleStormwind = this.handleStormwind.bind(this);
  }

  // componentDidUpdate(prevProps) {

  //   if (prevProps.near !== this.state.near) {
  //     this.props.changeFilter('near', this.state.near)
  //       .then(() => {
  //         this.props.changeFilter('find', this.state.find)
  //           .then(() => { this.props.history.push(`/search?near=${this.state.near}`) })
  //       });
  //   } else {
  //     this.props.history.push(`/search?find=${this.state.find}&near=${this.state.near}`)
  //   }
  // }

  handleDalaran(e) {
    e.preventDefault(); 

    this.props.changeFilter('near', 'Dalaran')
      .then(() => { 
        this.props.changeFilter('find', '')
          .then(() => { this.props.history.push('/search?near=Dalaran') })
      })
  };

  handleOrgrimmar(e) {
    e.preventDefault(); 

    this.props.changeFilter('near', 'Orgrimmar')
      .then(() => {
        this.props.changeFilter('find', '')
          .then(() => { this.props.history.push('/search?near=Orgrimmar') })
      })  };

  handleStormwind(e) {
    e.preventDefault(); 

    this.props.changeFilter('near', 'Stormwind')
      .then(() => {
        this.props.changeFilter('find', '')
          .then(() => { this.props.history.push('/search?near=Stormwind') })
      })  };

  render() {
    
    return (
      <div className="city-nav">
        <div className="cities-wrapper">
          <div className="cities-title">
            WoWelp Cities
              </div>
          <ul className="city-themes">
            <li className="city">
              <a onClick={this.handleDalaran}>
                <img src="https://i.imgur.com/MvRlnQH.jpg" alt="" />
                <h3>Dalaran</h3>
              </a>
            </li>
            <li className="city">
              <a onClick={this.handleOrgrimmar}>
                <img src="https://i.imgur.com/kRHOAxB.jpg" alt="" />
                <h3>Orgrimmar</h3>
              </a>
            </li>
            <li className="city">
              <a onClick={this.handleStormwind}>
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
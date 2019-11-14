import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBody: "",
      find: "",
      near: this.props.near,
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRestaurants = this.handleRestaurants.bind(this);
    this.handleBlacksmith = this.handleBlacksmith.bind(this);
    this.handleBarber = this.handleBarber.bind(this);
    this.handleBars = this.handleBars.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  // componentDidMount

  // handleSubmit(e) {
  //   e.preventDefault();

  //   this.props.changeFilter()
  // }

  handleRestaurants(e) {
    e.preventDefault();

    this.props.changeFilter('near', 'Dalaran')
      .then(() => {
        this.props.changeFilter('find', 'Restaurant')
          .then(() => {
            this.props.history.push(`/search?find=Restaurant&near=Dalaran`)
          })
      });
  }

  handleBlacksmith(e) {
    e.preventDefault();

    this.props.changeFilter('near', 'Dalaran')
      .then(() => {
        this.props.changeFilter('find', 'Blacksmithing')
          .then(() => {
            this.props.history.push(`/search?find=Blacksmithing&near=Dalaran`)
          })
      });
  }

  handleBarber(e) {
    e.preventDefault();

    this.props.changeFilter('near', 'Dalaran')
      .then(() => {
        this.props.changeFilter('find', 'Barber')
          .then(() => {
            this.props.history.push(`/search?find=Barber&near=Dalaran`)
          })
      });
  }

  handleBars(e) {
    e.preventDefault();

    this.props.changeFilter('near', 'Dalaran')
      .then(() => {
        this.props.changeFilter('find', 'Bars')
          .then(() => {
            this.props.history.push(`/search?find=Bars&near=Dalaran`)
          })
      });
  }

  render() {
    
    return (
      <div>
        <form className="search-filter">
          <div className="search">
            <div className="input-title">Find</div>
            <div>
              <input className="input-body" 
                type="text"
                onChange={this.handleInput('searchBody')}
                value={this.state.searchBody}
                placeholder= "beer, ramen, blacksmithing, action house..."
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
            <button className="search-btn" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <ul className="nav-categories">
          <li className="nav-category">
            <i className="fas fa-utensils"></i>
            <a onClick={this.handleRestaurants}>Restaurants</a>
          </li>
          <li className="nav-category">
            <i className="fas fa-hammer"></i>
            <a onClick={this.handleBlacksmith}>Blacksmithing</a>
          </li>
          <li className="nav-category">
            <i className="fas fa-cut"></i>
            <a onClick={this.handleBarber}>Barber Shops</a>
          </li>
          <li className="nav-category">
            <i className="fas fa-cocktail"></i>
            <a onClick={this.handleBars}>Bars</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Search);
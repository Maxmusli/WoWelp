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

    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleFilter(e, filter) {
    e.preventDefault();

    if (!this.props.near) {
      this.props.near = 'Dalaran';
      this.props.changeFilter('near', this.props.near)
        .then(() => {
          this.props.changeFilter('find', filter)
            .then(() => { this.props.history.push(`/search?find=${filter}&near=${this.props.near}`) })
        });
    } else {
      this.props.changeFilter('find', filter)
        .then(() => { this.props.history.push(`/search?find=${filter}&near=${this.props.near}`) })
    }
  };

  handleSubmit(e) {
    e.preventDefault();

    let find = this.state.find.split(' ').join('-');
    // let near = this.state.near.split(' ').join('-');
    let near;
    if (!this.state.near) {
      near = 'Dalaran';
    } else {
      near = this.state.near.split(' ').join('-');
    }

    this.props.changeFilter('near', near)
      .then(() => {
        this.props.changeFilter('find', this.state.find)
          .then(() => { this.props.history.push(`/search?find=${find}&near=${near}`) })
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
                onChange={this.handleInput('find')}
                value={this.state.find}
                placeholder= "beer, inn, blacksmithing, mechanic..."
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
            <button 
              className="search-btn"
              onClick={this.handleSubmit}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <ul className="nav-categories">
          <li className="nav-category">
            <i className="fas fa-utensils"></i>
            <a onClick={e => this.handleFilter(e, 'Restaurant')}>Restaurants</a>
          </li>
          <li className="nav-category">
            <i className="fas fa-hammer"></i>
            <a onClick={e => this.handleFilter(e, 'Blacksmithing')}>Blacksmithing</a>
          </li>
          <li className="nav-category">
            <i className="fas fa-cut"></i>
            <a onClick={e => this.handleFilter(e, 'Barber')}>Barber Shops</a>
          </li>
          <li className="nav-category">
            <i className="fas fa-cocktail"></i>
            <a onClick={e => this.handleFilter(e, 'Bars')}>Bars</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Search);
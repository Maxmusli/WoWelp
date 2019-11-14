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

  componentDidUpdate(prevProps) {
    
    if (prevProps.near !== this.state.near || prevProps.find !== this.state.find) {
      this.props.changeFilter('near', this.state.near)
        .then(() => {
          this.props.changeFilter('find', this.state.find)
            .then(() => { this.props.history.push(`/search?find=${tihs.state.find}&near=${this.state.near}`) })
        });
    } else {
      this.props.history.push(`/search?find=${this.state.find}&near=${this.state.near}`)
    }
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
            <a onClick={() => this.setState({ find: 'Restaurant' })}>Restaurants</a>
          </li>
          <li className="nav-category">
            <i className="fas fa-hammer"></i>
            <a onClick={() => this.setState({ find: 'Blacksmithing' })}>Blacksmithing</a>
          </li>
          <li className="nav-category">
            <i className="fas fa-cut"></i>
            <a onClick={() => this.setState({ find: 'Barber' })}>Barber Shops</a>
          </li>
          <li className="nav-category">
            <i className="fas fa-cocktail"></i>
            <a onClick={() => this.setState({ find: 'Bars' })}>Bars</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Search);
import React, { Component } from 'react'

export default class FilterBar extends Component {

  render() {
    
    return (
      <div className="filter-bar-wrapper">
        <div className="filter-bar-container">
          <div className="filter-bar-info">
            <div>
              {this.props.near}
            </div>
            <div>
              >
            </div>
            {/* <div>
              {this.props.find}
            </div> */}
          </div>
          <div className="filter-bar">
            <div className="all-filter">
              <button className="filter-btn">
                All Filters
              </button>
            </div>
            <div className="price-range">
                <button 
                  className="cheap"
                  onClick={e => this.handlePrice(e, 'cheap')}
                >
                  $
                </button>
                <button 
                  className="medium"
                  onClick={e => this.handlePrice(e, 'medium')}
                >
                  $$
                </button>
                <button
                  className="expensive"
                  onClick={e => this.handlePrice(e, 'expensive')}
                >
                  $$$
                </button>
                <button 
                  className="luxury"
                  onClick={e => this.handlePrice(e, 'luxury')}
                >
                  $$$$
                </button>
         
            </div>
            <div className="reservation">
              <button className="filter-btn">
                Reservation
              </button>
            </div>
            <div className="takeout">
              <button className="filter-btn">
                Takeout
              </button>
            </div>
            <div className="stable">
              <button className="filter-btn">
                Stable
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

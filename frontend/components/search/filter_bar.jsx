import React, { Component } from 'react'

export default class FilterBar extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e, type) {
    e.preventDefault();

    const priceTag = document.querySelector('.price-tag')

    if (!$('.price-tage').hasClass('toggled')) {
      priceTag.classList.add('toggled')
    } else {
      priceTag.classList.remove('toggled')
    }
  }

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
            <div>
              {this.props.find}
            </div>
          </div>
          <div className="filter-bar">
            <div className="all-filter">
              <button className="filter-btn">
                All Filters
              </button>
            </div>
            <div className="price-range">
                <button 
                  className="price-tag"
                  id="cheap"
                  onClick={e => this.handleClick(e, '$')}
                >
                  $
                </button>
                <button 
                  className="price-tag"
                  id="medium"
                >
                  $$
                </button>
                <button
                  className="price-tag"
                  id="expensive"
                >
                  $$$
                </button>
                <button 
                  className="price-tag"
                  id="luxury"
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

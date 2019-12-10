import React, { Component } from 'react'

export default class FilterBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      businesses = this.props.businesses
      
    }

    this.handlePrice = this.handlePrice.bind(this)
  }

  handlePrice(e, type) {
    e.preventDefault();
    debugger
    const priceTag = document.querySelector('.price-tag')

    if (!$('.price-tag').hasClass('toggled')) {
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
                  onClick={e => this.handlePrice(e, '$')}
                >
                  $
                </button>
                <button 
                  className="price-tag"
                  id="medium"
                  onClick={e => this.handlePrice(e, '$$')}
                >
                  $$
                </button>
                <button
                  className="price-tag"
                  id="expensive"
                  onClick={e => this.handlePrice(e, '$$$')}
                >
                  $$$
                </button>
                <button 
                  className="price-tag"
                  id="luxury"
                  onClick={e => this.handlePrice(e, '$$$$')}
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

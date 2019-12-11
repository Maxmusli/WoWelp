import React, { Component } from 'react'

export default class FilterBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      businesses: this.props.businesses,
      filtered: []
    }

    this.handlePrice = this.handlePrice.bind(this)
  }

  handlePrice(e, type) {
    e.preventDefault();

    let addBusi = this.props.businesses.filter(business => {
      return business.price_range === type
    })

    let removeBusi = this.state.filtered.filter(business => {
      return !addBusi.includes(business)
    })
    
    const priceTag = document.querySelector(`.${type}`)

    if (!$(`.${type}`).hasClass('toggled')) {
      priceTag.classList.add('toggled')

      this.setState({
        filtered: this.state.filtered.concat(addBusi)
      })
    } else {
      priceTag.classList.remove('toggled')

      this.setState({
        filtered: removeBusi
      })
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

import React from 'react';
import BusinessIndexItem from './business_index_item';
import SubNavContainer from '../nav_bar/sub_nav_container';
import FooterNav from '../nav_bar/footer_nav';
import FilterBar from '../search/filter_bar';

export default class BusinessIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filtered: [],
      priceArr: []
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
        filtered: this.state.filtered.concat(addBusi),
        priceArr: this.state.priceArr.concat(type)
      })
    } else {
      priceTag.classList.remove('toggled')

      this.setState({
        filtered: removeBusi,
        priceArr: this.state.priceArr.slice(0, -1)
      })
    }
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.businesses.length === 0) {
      this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', this.props.find)
      });
    }
  }

  render() {
    
    const { businesses } = this.props;

    if(!businesses) return null;

    let selectedBusinesses;

    if (this.state.priceArr.length > 0) {
      selectedBusinesses = this.state.filtered;
    } else {
      selectedBusinesses = businesses;
    }

    
    return (
      <div>
        <div>
          <SubNavContainer 
            find={this.props.find}
            near={this.props.near}
          />
        </div>
        <div className="bar-2"></div>
        <div className="index-main-section">
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
          <div>
            <div className="business-index-wrapper">
              <div className="business-info-wrapper">
                {selectedBusinesses.map(business => (
                  <BusinessIndexItem
                  business={business}
                  key={business.id}
                  />
                ))}
              </div>
              <div className="map">
                
              </div>
            </div>
          </div>
        </div>
        <div className="bar-2"></div>
        <div>
          <FooterNav />
        </div>
      </div>
      
    )
  }
}
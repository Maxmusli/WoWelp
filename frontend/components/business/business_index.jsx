import React from 'react';
import BusinessIndexItem from './business_index_item';
import SubNavContainer from '../nav_bar/sub_nav_container';
import FooterNav from '../nav_bar/footer_nav';
import { selectBusiness } from '../../reducers/selectors';
import BusinessMap from '../map/business_map';

export default class BusinessIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filtered: [],
      priceArr: [],
      attrs: []
    }

    this.handlePrice = this.handlePrice.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(e, type) {
    e.preventDefault();
    
    let selectedBusinesses = [];
    let filterAttrs = [];
    let priceAttrs = [];
    let businesses;

    if (this.state.attrs.includes(type)) {
      filterAttrs = this.state.attrs.filter(attr => {
        return attr !== type;
      })
    } else if (['reservation', 'take_out', 'parking'].includes(type)) {
      
      filterAttrs = this.state.attrs.concat(type);
    } 
    
    if (this.state.priceArr.includes(type)) {
      priceAttrs = this.state.priceArr.filter(attr => {
        return attr !== type;
      })
    } else if (['cheap', 'medium', 'expensive', 'luxury'].includes(type)) {
      priceAttrs = this.state.priceArr.concat(type);
    } 

    // if (this.state.filtered.length > 0) {
    //   businesses = this.state.filtered;
    // } else {
      businesses = this.props.businesses
    // }

    if (this.state.attrs.length > 0 || filterAttrs.length > 0) {
      businesses.map(business => {
        if (filterAttrs.every(
          sub => {
            return business[sub] === 'Yes'
          }) && !selectedBusinesses.includes(business)) {
          selectedBusinesses.push(business)
        }
      })
    }

    if (this.state.priceArr.length > 0 || priceAttrs.length > 0) {
      businesses.map(business => {
        priceAttrs.forEach(attr => {
          if (business.price_range === attr && !selectedBusinesses.includes(business)) {
            selectedBusinesses.push(business)
          }
        })
      })
    }

    const priceTag = document.querySelector(`.${type}`)
    if (!$(`.${type}`).hasClass('toggled')) {
      priceTag.classList.add('toggled')
      
      if (['reservation', 'take_out', 'parking'].includes(type)) {
        this.setState({
          filtered: selectedBusinesses,
          attrs: filterAttrs
        })
      } else {
        this.setState({
          filtered: selectedBusinesses,
          priceArr: priceAttrs
        })
      }
    } else {
      priceTag.classList.remove('toggled')

      if (['reservation', 'take_out', 'parking'].includes(type)) {
        this.setState({
          filtered: selectedBusinesses,
          attrs: filterAttrs
        })
      } else {
        this.setState({
          filtered: selectedBusinesses,
          priceArr: priceAttrs
        })
      }
    }
  }

  handlePrice(e, type) {
    e.preventDefault();

    let selectedBusinesses = [];
    let priceAttrs;
    let businesses;

    if (this.state.priceArr.includes(type)) {
      priceAttrs = this.state.priceArr.filter(attr => {
        return attr !== type;
      })
    } else {
      priceAttrs = this.state.priceArr.concat(type);
    }

    if (this.state.attrs.length > 0) {
      businesses = this.state.filtered;
    } else {
      businesses = this.props.businesses
    }

    businesses.map(business => {
      priceAttrs.forEach(attr => {
        if (business.price_range === attr) {
          selectedBusinesses.push(business)
        }
      })
    })

    const priceTag = document.querySelector(`.${type}`)
    if (!$(`.${type}`).hasClass('toggled')) {
      priceTag.classList.add('toggled')

      this.setState({
        filtered: selectedBusinesses,
        priceArr: priceAttrs
      })
    } else {
      priceTag.classList.remove('toggled')

      this.setState({
        filtered: selectedBusinesses,
        priceArr: priceAttrs
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

    if (
      this.state.attrs.length > 0 ||
      this.state.priceArr.length > 0
    ) {
      
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
                    onClick={e => this.handleFilter(e, 'cheap')}
                  >
                    $
                  </button>
                  <button 
                    className="medium"
                    onClick={e => this.handleFilter(e, 'medium')}
                  >
                    $$
                  </button>
                  <button
                    className="expensive"
                    onClick={e => this.handleFilter(e, 'expensive')}
                  >
                    $$$
                  </button>
                  <button 
                    className="luxury"
                    onClick={e => this.handleFilter(e, 'luxury')}
                  >
                    $$$$
                  </button>
                </div>
                <div>
                  <button 
                    className="reservation"
                    onClick={e => this.handleFilter(e, 'reservation')}
                  >
                    Reservation
                  </button>
                </div>
                <div>
                  <button 
                    className="take_out" 
                    onClick={e => this.handleFilter(e, 'take_out')}
                  >
                    Takeout
                  </button>
                </div>
                <div>
                  <button 
                    className="parking"
                    onClick={e => this.handleFilter(e, 'parking')}
                  >
                    Parking
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
              <div className="map-container">
                <BusinessMap 
                businesses={selectedBusinesses}
                changeFilter={this.props.changeFilter}
                find={this.props.find}
                near={this.props.near}
                />
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
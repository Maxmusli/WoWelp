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
      // initial: this.props.businesses,
      filtered: [],
      priceArr: [],
      // reservation: 'inactive',
      // take_out: 'inactive',
      // parking: 'inactive',
      attrs: []
    }

    this.handlePrice = this.handlePrice.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(e, type) {
    e.preventDefault();
    
    let selectedBusinesses = [];
    let filterAttrs;
    if (this.state.attrs.includes(type)) {
      filterAttrs = this.state.attrs.filter(attr => {
        return attr !== type;
      })
    } else {
      filterAttrs = this.state.attrs.concat(type);
    }

    this.props.businesses.map(business => {
      
      if (filterAttrs.every(
        sub => {
            return business[sub] === 'Yes'
        })) {
        // console.log('true')
        selectedBusinesses.push(business)
      }
    })

    const priceTag = document.querySelector(`.${type}`)
    if (!$(`.${type}`).hasClass('toggled')) {
      priceTag.classList.add('toggled')
     
      this.setState({
        filtered: selectedBusinesses,
        attrs: filterAttrs
      })
    } else {
      priceTag.classList.remove('toggled')
      
      this.setState({
        filtered: selectedBusinesses,
        attrs: filterAttrs
      })
    }
  }

  handlePrice(e, type) {
    e.preventDefault();
    let that = this;
    let addBusi;

    if (this.state.attrs.length > 0) {
      addBusi = that.state.filtered.filter(business => {
        return business.price_range === type;
      })
    } else {
      addBusi = this.props.businesses.filter(business => {
        return business.price_range === type;
      }) 
    }


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
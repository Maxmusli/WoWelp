import React from 'react';
import BusinessIndexItem from './business_index_item';
import SubNavContainer from '../nav_bar/sub_nav_container';
import FooterNav from '../nav_bar/footer_nav';

export default class BusinessIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filtered: [],
      priceArr: [],
      reservation: 'inactive',
      take_out: 'inactive',
      parking: 'inactive',
    }

    this.handlePrice = this.handlePrice.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handlePrice(e, type) {
    e.preventDefault();
    let that = this;
    let addBusi;

    if (
      that.state.reservation === 'active' || 
      that.state.take_out === 'active' ||
      that.state.parking === 'active'
    ) {
      addBusi = that.state.filtered.filter(business => {
        return business.price_range === type;
      })
    } else {
      addBusi = this.props.businesses.filter(business => {
        return business.price_range === type;
      }) 
    }


    let removeBusi = this.state.filtered.filter(business => {``
      return !addBusi.includes(business)
    })

    const priceTag = document.querySelector(`.${type}`)
    console.log(this.state.filtered)
    if (!$(`.${type}`).hasClass('toggled')) {
      priceTag.classList.add('toggled')
      let addFilter = addBusi.filter(business => {
        return business.price_range === type
      })
      console.log(addFilter)
      console.log(type)
      this.setState({
        filtered: addFilter,
        priceArr: this.state.priceArr.concat(type)
      })
    } else {
      priceTag.classList.remove('toggled')
      console.log(addBusi)
      this.setState({
        filtered: removeBusi,
        priceArr: this.state.priceArr.slice(0, -1)
      })
    }
  }

  handleFilter(e, type) {
    e.preventDefault();
    let that = this;
    let addBusi;

    if (that.state.priceArr.length > 0) {
      addBusi = that.state.filtered.filter(business => {
        if (type === 'reservation') {
          return business.reservation === 'Yes';
        } else if (type === 'take_out') {
          return business.take_out === 'Yes';
        } else if (type === 'parking') {
          return business.parking === 'Yes';
        }
      })
    } else {
      addBusi = this.props.businesses.filter(business => {
        if (type === 'reservation') {
          return business.reservation === 'Yes';
        } else if (type === 'take_out') {
          return business.take_out === 'Yes';
        } else if (type === 'parking') {
          return business.parking === 'Yes';
        }
      })
    }
    console.log(addBusi)
    
    let removeBusi = this.state.filtered.filter(business => {
      return !addBusi.includes(business);
    })

    const priceTag = document.querySelector(`.${type}`);

    if (!$(`.${type}`).hasClass('toggled')) {
      priceTag.classList.add('toggled')
      // let that = this;
      
      if (type === 'reservation') {

        this.setState({
          filtered: addBusi,
          reservation: 'active'
        })
      } else if (type === 'take_out') {
        addBusi.filter(business => {
          return !that.state.filtered.includes(business)
        })

        this.setState({
          filtered: addBusi,
          take_out: 'active'
        })
      } else if (type === 'parking') {
        addBusi.filter(business => {
          return !that.state.filtered.includes(business)
        })

        this.setState({
          filtered: addBusi,
          parking: 'active'
        })
      }
    } else {
      priceTag.classList.remove('toggled')
      if (type === 'reservation') {
        this.setState({
          filtered: removeBusi,
          reservation: 'inactive'
        })
      } else if (type === 'take_out') {
        this.setState({
          filtered: removeBusi,
          take_out: 'inactive'
        })
      } else if (type === 'parking') {
        this.setState({
          filtered: removeBusi,
          parking: 'inactive'
        })
      }
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
      this.state.priceArr.length > 0 || 
      this.state.reservation === 'active' || 
      this.state.take_out === 'active' ||
      this.state.parking === 'active'
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
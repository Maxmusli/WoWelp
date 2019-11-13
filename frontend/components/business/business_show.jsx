import React, { Component } from 'react';
import SubNavContainer from '../nav_bar/sub_nav_container';
import Footer from '../nav_bar/footer_nav';
import BusinessDetail from './business_detail'

export default class BusinessShow extends Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  render() {
    const { business, reviews } = this.props
    
    if (!business) return null;
    
    return (
      <div>
        <div>
          <SubNavContainer />
        </div>
        <div className="bar-2"></div>
        <div>
          <BusinessDetail
            business={business}
            reviews={reviews}
          />
        </div>
        <div className="bar-2"></div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

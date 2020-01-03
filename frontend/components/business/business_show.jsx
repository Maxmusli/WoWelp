import React, { Component } from 'react';
import SubNavContainer from '../nav_bar/sub_nav_container';
import Footer from '../nav_bar/footer_nav';
import BusinessDetail from './business_detail'

export default class BusinessShow extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  render() {
    const { business, reviews, deleteReview, find, near } = this.props
    
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
            deleteReview={deleteReview}
            find={find}
            near={near}
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

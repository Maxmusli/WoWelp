import React, { Component } from 'react';
import SubNavContainer from '../nav_bar/sub_nav_container';
import Footer from '../home/footer';
import BusinessDetail from './business_detail'

export default class BusinessShow extends Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  render() {
    const { business } = this.props
    
    if (!business) return null;
    return (
      <div>
        <div>
          <SubNavContainer />
        </div>
        <div>
          <BusinessDetail
            business={business}
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

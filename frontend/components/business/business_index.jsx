import React from 'react';
import BusinessIndexItem from './business_index_item'

export default class BusinessIndex extends React.Component {

  render() {
    
    const { businesses } = this.props
  
    return (
      <div className="business-info-wrapper">
        {businesses.map(business => (
          <BusinessIndexItem
          business={business}
          key={business.id}
          />
        ))}
      </div>
    )
  }
}
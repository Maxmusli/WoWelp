import React from 'react';
import BusinessIndexItem from './business_index_item'

export default class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { businesses } = this.props
    return (
      <div>
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
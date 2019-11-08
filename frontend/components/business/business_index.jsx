import React from 'react';
import BusinessIndexItem from './business_index_item'

// const BusinessIndex = ({ businesses }) => (
//   <div>
//     {businesses.map(business => (
//       <BusinessIndexItem
//         business={business}
//         key={business.id}
//       />
//     ))}
//   </div>
// );

// export default BusinessIndex;

export default class BusinessIndex extends React.Component {

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
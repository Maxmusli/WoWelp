import React from 'react';
import BusinessIndexItem from './business_index_item';
import SubNavContainer from '../nav_bar/sub_nav_container';
import FooterNav from '../nav_bar/footer_nav';
import FilterBar from '../search/filter_bar';

export default class BusinessIndex extends React.Component {
  
  // componentDidMount() {
  //   this.props.fetchBusinesses();
  // }

  render() {
    
    const { businesses } = this.props
  
    return (
      <div>
        <div>
          <SubNavContainer />
        </div>
        <div>
          <FilterBar />
        </div>
        <div>
          <div className="business-index-wrapper">
            <div className="business-info-wrapper">
              {businesses.map(business => (
                <BusinessIndexItem
                business={business}
                key={business.id}
                />
              ))}
            </div>
            <div>
              map
            </div>
          </div>
        </div>
        <div>
          <FooterNav />
        </div>
      </div>
      
    )
  }
}
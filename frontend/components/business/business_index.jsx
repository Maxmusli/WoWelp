import React from 'react';
import BusinessIndexItem from './business_index_item';
import SubNavContainer from '../nav_bar/sub_nav_container';
import FooterNav from '../nav_bar/footer_nav';
import FilterBar from '../search/filter_bar';

export default class BusinessIndex extends React.Component {
  
  componentDidMount() {
    
    if (this.props.businesses.length === 0) {
      this.props.changeFilter('near', this.props.near)
      .then(() => {
        this.props.changeFilter('find', this.props.find)
      });
    }
  }

  render() {
    
    const { businesses } = this.props

    if(!businesses) return null;
    
    return (
      <div>
        <div>
          <SubNavContainer />
        </div>
        <div className="bar-2"></div>
        <div className="index-main-section">
          <div>
            <FilterBar 
              find={this.props.find}
              near={this.props.near}
            />
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
        </div>
        <div className="bar-2"></div>
        <div>
          <FooterNav />
        </div>
      </div>
      
    )
  }
}
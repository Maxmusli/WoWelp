import React from 'react';
import BusinessIndex from '../business/business_index';
import SubNavContainer from '../nav_bar/sub_nav_container';
import Footer from '../home/footer'
import FilterBar from './filter_bar';

export default class Search extends React.Component {
  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    
    const { businesses } = this.props;
    
    return (
      <div>
        <div>
          <SubNavContainer />
        </div>
        <div>
          <FilterBar />
        </div>
        <div>
          <div className="main-section-wrapper">
            <BusinessIndex businesses={businesses} />
            <div>
              map
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
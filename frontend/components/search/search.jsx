import React from 'react';
import BusinessIndex from './business_index';
import SubNavContainer from '../nav_bar/sub_nav_container';
import Footer from '../home/footer'

export default class Search extends React.Component {

  render() {
    
    const { businesses } = this.props;

    return (
      <div>
        <div>
          <SubNavContainer />
        </div>
        <div>
          <BusinessIndex businesses={businesses} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
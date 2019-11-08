import React from 'react';
import BusinessIndex from './business_index';
import SubNavContainer from '../nav_bar/sub_nav_container';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { businesses } = this.props;

    return (
      <div>
        <div>
          <SubNavContainer />
        </div>

        <BusinessIndex businesses={businesses} />
      </div>
    );
  }
}
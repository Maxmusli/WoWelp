import React, { useState } from 'react';
import SubNavContainer from '../nav_bar/sub_nav_container';
import Footer from '../nav_bar/footer_nav';

function UserShowPage() {
  
  return (
    <div>
      <div>
        <SubNavContainer />
      </div>
      <div className="bar-2"></div>
      <div className="bar-2"></div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default UserShowPage
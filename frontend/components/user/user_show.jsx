import React, { useState } from 'react';
import UserShowNavContainer from '../nav_bar/user_show_nav_container';
import Footer from '../nav_bar/footer_nav';

function UserShowPage() {
  
  return (
    <div>
      <div>
        <UserShowNavContainer />
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
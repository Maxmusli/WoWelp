import React, { useEffect } from 'react';
import UserShowNavContainer from '../nav_bar/user_show_nav_container';
import Footer from '../nav_bar/footer_nav';

function UserShowPage(props) {
  
  useEffect(() => {
    props.fetchCurrentUser(props.match.params.userId)
  }, [])
  
  return (
    <div>
      <div>
        <UserShowNavContainer />
      </div>
      <div className="bar-2"></div>
      <div className="user-show">
        <div className="user-top-section-wrapper">
          <div className="top-content-container">
            <div className="profile-avatar">

            </div>
            <div className="top-content">
              <div className="avator-dummy"></div>
              <div className="profile-info">
                <div>
                  {props.users[0].fname}
                </div>
              </div>
              <div className="profile-action">

              </div>
            </div>
          </div>
        </div>
        <div className="user-bottom-section-wrapper">

        </div>
      </div>
      <div className="bar-2"></div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default UserShowPage
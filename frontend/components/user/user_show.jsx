import React, { useEffect } from 'react';
import UserShowNavContainer from '../nav_bar/user_show_nav_container';
import TabsContainer from './tabs_container';
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
            <div className="profile-content">
              <div className="profile-avatar">

              </div>
              <div className="top-content">
                <div className="avatar-dummy arrange_unit"></div>
                <div className="profile-info arrange_unit">
                  <div className="username">
                    {props.users[0].fname}
                  </div>
                  <div className="faction">

                  </div>
                  <div className="user-stats">

                  </div>
                </div>
                <div className="profile-action arrange_unit">
                  <ul className="action-link-list">
                    <li>
                      <p>Add Profile Photos</p>
                    </li>
                    <li>
                      <p>Update Your Profile</p>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user-bottom-section-wrapper">
          <TabsContainer
            userReviews = {props.users[0].reviews}
            reviewBusinesses = {props.users[0].businesses}
          />
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
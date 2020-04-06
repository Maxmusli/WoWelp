import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Overview from './display_tabs/profile_overview';
import UserReviews from './display_tabs/user_review';
import Header from './header';

function Tabs(props) {
  const [activeTab, setTab] = useState(0)

  function handleClick(num) {
    setTab(num)
  }

  function handleTabContent(displayTab) {
    if (displayTab.title === "Profile Overview") {
      return (
        <Overview 
          reviews={displayTab.content} 
          businesses={displayTab.businesses} 
          user = {displayTab.user}
        />
      );
    } else if (displayTab.title === "Reviews") {
      
      return (
        <UserReviews 
          reviews={displayTab.content}
          businesses={displayTab.businesses} 
          deleteReview={props.deleteReview}
        />
      );
    }
  }

  let displayTab = props.tabSections[activeTab];
  if (displayTab.content.length < 0) return null;
  
  return (
    <div className="bottom-content-container">
      <Header
        activeTab={activeTab}
        onTabChosen={handleClick}
        tabs={props.tabSections}
        username={props.user.fname}
      />
      <div className="right-content">
        {handleTabContent(displayTab)}
      </div>
    </div>
  )
}

export default Tabs
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

  function handleEmptyTab() {
    const displayTab = props.tabSections[activeTab];
    if (displayTab.content.length < 1) {
      return (
        <ul>
          <li>Get started today!</li>
          <li>
            <Link to="/campsites">Explore campsites...</Link>
          </li>
          <li>
            <Link to="/campsites/new">Or establish your own!</Link>
          </li>
        </ul>
      );
    }
  }

  function handleTabContent(displayTab) {
    if (displayTab.title === "Profile Overview") {
      return <Overview reviews={displayTab.content} />;
    } else if (displayTab.title === "Reviews") {
      return <UserReviews photos={displayTab.content} />;
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
        username={props.username}
      />
      <div>
        {handleEmptyTab()}
        {handleTabContent(displayTab)}
      </div>
    </div>
  )
}

export default Tabs
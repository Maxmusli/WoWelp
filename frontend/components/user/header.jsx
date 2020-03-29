import React from 'react';

function Header(props) {
  let { activeTab, tabs, onTabChosen } = props;
  const headers = tabs.map((tab, index) => {
    const title = tab.title;
    const klass = index === activeTab ? "active" : "";

    return (
      <li key={index} className={klass} onClick={() => onTabChosen(index)}>
        {title}{" "}
      </li>
    );
  });

  return (
    <div className="left-column">
      <div className="header-title">
        {props.username}'s Profile
      </div>
      <ul>
        {headers}
      </ul>
    </div>
  )
}

export default Header
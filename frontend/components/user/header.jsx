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
    <ul className="tab-header">
      <li>{props.username}'s profile</li>
      {headers}
    </ul>
  )
}

export default Header
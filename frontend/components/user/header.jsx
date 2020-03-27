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
    <ul className="left-column">
      <li>{props.username}'s Profile</li>
      {headers}
    </ul>
  )
}

export default Header
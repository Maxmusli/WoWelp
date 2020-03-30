import React from 'react';
import { Link } from 'react-router-dom';
import Ratings from 'react-ratings-declarative';

function Overview(props) {
  let recentReviews = props.reviews.slice(-4);
  var businesses = props.businesses;
  let content = [];

  for (let i = recentReviews.length - 1; i >= 0; i--) {
    let temp = {};
    temp['review'] = recentReviews[i];
    temp['business'] = businesses[recentReviews[i].business_id];
    content.push(temp);
  }

  const temp = props.user.created_at.split('-');
  const dateTable = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'Aprial',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'Auguest',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  };

  const createMonth = dateTable[temp[1]];
  const createYear = temp[0];

  function starRating(rating) {
    return (
      <Ratings
        rating={parseFloat(rating)}
        widgetDimensions="18px"
        widgetSpacings="1px"
        widgetRatedColors="#f8b700"
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
    )
  }

  let display = content.map((info, idx) => {
    return (
      <li key={idx}>
        <div className="business-info">
          <div className="business-profile-pic">
            <img src={info.business.pictureUrls[0]} alt="" />
          </div>
          <div className="info">
            <Link to={`/search/${info.business.id}`}>{info.business.name}</Link>
            <div>
              {info.business.category}
            </div>
            <div>
              {info.business.address}
            </div>
          </div>
        </div>
        <div className="rating">
          {starRating(info.review.rating)}
        </div>
        <div className="body"> 
          {info.review.body}
        </div>
      </li>
    )
  });
  
  return (
    <div className="user-show-content">
      <div className="main-section">
        <div>
          <h2>Recent Activity</h2>
        </div>
        <ul>
          {display}
        </ul>
      </div>
      <div className="side-bar">
        <div className="about-title">
          About {props.user.fname}
        </div>
        <ul>
          <li>
            <h3>Faction</h3>
            {props.user.faction || "You haven't choosen your side."}
          </li>
          <li>
            <h3>WoWelping Since</h3>
            {createMonth + ' ' + createYear}
          </li>
          <li>
            <h3>Things I Love</h3>
            {props.user.hobby || "You haven't told us yet ... do tell!"}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Overview;
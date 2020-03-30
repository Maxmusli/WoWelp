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
          <div className="img">
            Pic
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
        <div>
          About 
        </div>
      </div>
    </div>
  )
}

export default Overview;
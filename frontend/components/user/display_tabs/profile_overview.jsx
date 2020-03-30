import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="reviewRating">
          {info.review.rating}
        </div>
        <div className="reviewBody"> 
          {info.review.body}
        </div>
      </li>
    )
  });
  return (
    <div className="overview-content">
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
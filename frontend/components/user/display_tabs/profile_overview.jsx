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
        <div className="businessInfo">
          <div className="left">
            Pic
          </div>
          <div className="right">
            <Link to={`/search/${info.business.id}`}>{info.business.name}</Link>
            {info.business.category}
            {info.business.address}
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
    <div>
      <ul className="overviewContent">
        <li>Most Recent Activity</li>
        {display}
      </ul>
      <div>
        <div>
          About 
        </div>
      </div>
    </div>
  )
}

export default Overview;
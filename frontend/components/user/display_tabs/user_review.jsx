import React from 'react';
import { Link } from 'react-router-dom';

function UserReview(props) {
  let userReviews = props.reviews;
  var businesses = props.businesses;
  let content = [];
  for (let i = userReviews.length - 1; i >= 0; i--) {
    let temp = {};
    temp['review'] = userReviews[i];
    temp['business'] = businesses[userReviews[i].business_id];
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
    <ul className="overviewContent">
      <li>Reviews</li>
      {display}
    </ul>
  )
}

export default UserReview
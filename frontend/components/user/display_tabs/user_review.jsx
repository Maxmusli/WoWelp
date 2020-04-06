import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ratings from 'react-ratings-declarative';

function UserReview(props) {
  let userReviews = props.reviews;
  var businesses = props.businesses;
  let content = [];
  const [totalContent, setTotal] = useState(0)

  for (let i = userReviews.length - 1; i >= 0; i--) {
    let temp = {};
    temp['review'] = userReviews[i];
    temp['business'] = businesses[userReviews[i].business_id];
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
        <div>
          <div className="rating">
            {starRating(info.review.rating)}
          </div>
          <div className="body">
            {info.review.body}
          </div>
          <div className="edit-delete-review">
            <div>
              <Link className="edit-review" to={`/search/${info.business.id}/reviews/${info.review.id}/edit`}>
                Edit Review
              </Link>
            </div>
            <div>
              <button className="delete-review" onClick={() => props.deleteReview(info.review.id).then(setTotal(info.review.lenght))}>Delete Review</button>
            </div> 
          </div>
        </div>
      </li>
    )
  });
  
  return (
    <div className="user-show-content">
      <div className="main-section reviews-section">
        <div>
          <h2>Reviews</h2>
        </div>
        <ul>
          {display}
        </ul>
      </div>
    </div>
  )
}

export default UserReview
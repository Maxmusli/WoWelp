import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Ratings from 'react-ratings-declarative';

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
  
  function handleDelete(reviewId) {
    props.deleteReview(reviewId);
  }

  function handleEmptyTab() {

    const displayTab = props.reviews.length;
    if (displayTab < 1) {
      return (
        <div className="empty-content">
          <div>It’s your turn — review everything from your favorite burger to your favorite root canal. Write reviews to contribute to the WoWelp community and help your friends find all the local gems that you love.</div>
          <div>
            <Link to="/search">Explore local businesses...</Link>
          </div>
          {/* <div>
            <Link to="/campsites/new">Or establish your own!</Link>
          </div> */}
        </div>
      );
    }
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
              <button className="delete-review" onClick={() => handleDelete(info.review.id)}>Delete Review</button>
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
        <div>
          {handleEmptyTab()}
        </div>
        <ul>
          {/* {display} */}
          {
            content.map((info, idx) => {

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
                        <button className="delete-review" onClick={() => handleDelete(info.review.id)}>Delete Review</button>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default withRouter(UserReview)
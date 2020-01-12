import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteReview } from '../../actions/review_actions';
import Ratings from 'react-ratings-declarative';

const Review = ({ review, currentUser, deleteReview, businessId }) => {
  const { rating, body, id, username, author_id } = review;
  
  return (
    <div className="review-wrapper">
      <div className="author-info-wrapper">
        <div className="profile-pic">
          <img src="user_avatar.jpg" alt=""/>
        </div>
        <div className="username">
          {username}
        </div>
      </div>
      <div className="review-info-wrapper">
        <div className="review-rating">
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
        </div>
        <div className="review-body">
          {body}
        </div>
          { 
            currentUser.id === author_id ? 
            <div className="edit-delete-wrapper">
              <div>
                <Link className="edit-review" to={`/search/${businessId}/reviews/${id}/edit`}>
                  Edit Review
                </Link>
              </div>
              <div>
                <button className="delete-review" onClick={() => deleteReview(id)}>Delete Review</button>
              </div> 
            </div>
            :
            null
          }
        </div>
    </div>
  );
};

const mapStateToProps = ( state, { review }) => {
    
  return {
    currentUser: state.session,
    review
  };
};

const mapDispatchToProps = dispatch => ({
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Review);

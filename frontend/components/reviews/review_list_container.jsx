import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteReview } from '../../actions/review_actions';

const Review = ({ review, author, deleteReview }) => {
  const { rating, body, id } = review;
  
  return (
    <div className="review-wrapper">
      <div className="author-info-wrapper">
        <div className="profile-pic">
          picture
        </div>
        <div className="username">
          {review.username}
        </div>
      </div>
      <div className="review-info-wrapper">
        <div className="review-rating">
          {rating}
        </div>
        <div className="review-body">
          {body}
        </div>
        <div>
          <Link to={`/search/reviews/${id}/edit`}>
            Edit Review
          </Link>
          
        </div>
        <div>
          <button onClick={() => deleteReview(id)}>Delete Review</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ entities: { users } }, { review }) => {
  return {
    author: users[review.author_id]
  };
};

const mapDispatchToProps = dispatch => ({
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Review);

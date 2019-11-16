import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author, deleteReview }) => {
  const { rating, body, id } = review;
  debugger
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
          <button>Edit Review</button>
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

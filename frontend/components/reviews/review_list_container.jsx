import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author }) => {
  const { rating, body } = review;
  return (
    <div className="review-wrapper">
      <div className="author-info-wrapper">
        <div>
          picture
        </div>
        <div>
          {author.fname}
        </div>
      </div>
      <div className="review-info-wrapper">
        <div className="review-rating">
          {rating}
        </div>
        <div className="review-body">
          {body}
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

export default connect(mapStateToProps)(Review);

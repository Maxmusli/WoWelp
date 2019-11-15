import * as APIUtil from '../util/review';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = ({ review, average_rating, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  author,
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const createReview = review => dispatch => (
  APIUtil.createReview(review)
    .then(review => (
      dispatch(receiveReview(review))
    ))
);

export const deleteReview = reviewId => dispatch => (
  API.removeReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
);
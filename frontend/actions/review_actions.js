import * as APIUtil from '../util/review';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveReview = ({ review, average_rating, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  author,
});

export const createReview = review => dispatch => (
  APIUtil.createReview(review)
    .then(review => (
      dispatch(receiveReview(review))
    ))
);
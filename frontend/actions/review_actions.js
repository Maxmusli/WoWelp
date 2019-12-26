import * as APIUtil from '../util/review';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';

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

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  review,
})

export const fetchReview = reviewId => dispatch => (
  APIUtil.fetchReview(reviewId)
    .then(review => (
      dispatch(receiveReview(review))
    ))
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review)
    .then(review => (
      dispatch(receiveReview(review))
    ))
);

export const editReview = review => dispatch => (
  APIUtil.updateReview(review)
    .then(review => (
      dispatch(updateReview(review))
    ))
)

export const deleteReview = reviewId => dispatch => (
  API.removeReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
);
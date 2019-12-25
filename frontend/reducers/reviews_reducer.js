import { RECEIVE_REVIEW, REMOVE_REVIEW, UPDATE_REVIEW } from '../actions/review_actions'
import { RECEIVE_BUSINESS } from '../actions/business_actions'

const reviewsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESS:
      return Object.assign({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      newState = Object.assign({}, state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
}

export default reviewsReducer;
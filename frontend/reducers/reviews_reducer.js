import { RECEIVE_REVIEW } from '../actions/review_actions'
import { RECEIVE_BUSINESS } from '../actions/business_actions'

const reviewsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BUSINESS:
      return Object.assign({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review })
    default:
      return state;
  }
}

export default reviewsReducer;
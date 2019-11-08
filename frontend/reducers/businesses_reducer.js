import {
  RECEIVE_BUSINESSES,
  RECEIVE_BUSINESS,
} from '../actions/business_actions';

const businessesReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      // payload?
      business = action.payload.business
      return Object.assign(
        {}, state, { [business.id]: business }
      )
    default:
      return state;
  }
};

export default businessesReducer;
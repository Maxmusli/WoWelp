import {
  RECEIVE_BUSINESSES,
  RECEIVE_BUSINESS,
  LOAD_BUSINESSES,
  LOAD_BUSINESS
} from '../actions/business_actions';

const loaderState = {
  indexLoader: false,
  showLoader: false
}

const loaderReducer = (state = loaderState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case LOAD_BUSINESSES:
      return Object.assign({}, { indexLoader: true })
    case LOAD_BUSINESS:
      return Object.assign({}, { showLoader: true })
    case RECEIVE_BUSINESSES:
      return Object.assign({}, { indexLoader: false })
    case RECEIVE_BUSINESS:
      return Object.assign({}, { showLoader: false })
    default:
      return state;
  }
}

export default loaderReducer;
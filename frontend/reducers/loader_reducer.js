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

const loaderReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    
  }
}
import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},
  find: "",
  near: "",
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      Object.assign({}, state, { [action.filter]: action.value })
    default:
      return state;
  }
};

export default filtersReducer;
import { fetchBusinesses } from './business_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const changeFilter = (filter, value) => (dispatch, getState) => {
  // debugger
  dispatch(updateFilter(filter, value));
  return fetchBusinesses(getState().filters)(dispatch);
};
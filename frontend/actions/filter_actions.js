import { fetchBusinesses } from './business_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

const changeFilter = (find, near) => ({
  type: UPDATE_FILTER,
  find,
  near,
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchBusinesses(getState().ui.filters)(dispatch);
};
import { fetchBusinesses } from './business_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

const updateFilter = (find, near) => ({
  type: UPDATE_FILTER,
  find,
  near,
});

export const changeFilter = (filter, value) => (dispatch, getState) => {
  dispatch(updateFilter(filter, value));
  return fetchBusinesses(getState().filters)(dispatch);
};
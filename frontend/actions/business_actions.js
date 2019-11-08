import * as APIUtil from '../util/business';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses
})

export const fetchBusinesses = (filters) => dispatch => {
  return APIUtil.fetchBusinesses(filters)
    .then(businesses => dispatch(receiveBusinesses(businesses)))
}
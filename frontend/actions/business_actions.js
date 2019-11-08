import * as APIUtil from '../util/business';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

export const fetchBusinesses = (filters) => dispatch => {
  return APIUtil.fetchBusinesses(filters)
    .then(businesses => dispatch(receiveBusinesses(businesses)))
};

export const fetchBusiness = id => dispatch => {
  return APIUtil.fetchBusiness(id)
    .then(payload => dispatch(receiveBusiness(payload)))
};
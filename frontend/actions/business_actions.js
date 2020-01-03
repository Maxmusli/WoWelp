import * as APIUtil from '../util/business';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const CLEAR_BUSINESSES = 'CLEAR_BUSINESSES'

const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

const receiveBusiness = business => {
  return ({
    type: RECEIVE_BUSINESS,
    business,
    reviews: business.reviews,
    author: business.author,
  })
};

export const clearBusinesses = () => ({
  type: CLEAR_BUSINESSES
})

export const fetchBusinesses = (filters) => dispatch => {
  return APIUtil.fetchBusinesses(filters)
    .then(businesses => dispatch(receiveBusinesses(businesses)))
};

export const fetchBusiness = id => dispatch => {
  return APIUtil.fetchBusiness(id)
    .then(payload => dispatch(receiveBusiness(payload)))
};
import * as APIUtil from '../util/business';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const CLEAR_BUSINESSES = 'CLEAR_BUSINESSES';
export const LOAD_BUSINESSES = 'LOAD_BUSINESSES';
export const LOAD_BUSINESS = 'LOAD_BUSINESS';

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

const loadBusinesses = () => ({
  type: LOAD_BUSINESSES
})

const loadBusiness = () => ({
  type: LOAD_BUSINESS
})

export const clearBusinesses = () => ({
  type: CLEAR_BUSINESSES
})

export const fetchBusinesses = (filters) => dispatch => {
  // dispatch(loadBusinesses());
  return APIUtil.fetchBusinesses(filters)
    .then(businesses => dispatch(receiveBusinesses(businesses)))
};

export const fetchBusiness = id => dispatch => {
  // dispatch(loadBusiness());
  return APIUtil.fetchBusiness(id)
    .then(payload => dispatch(receiveBusiness(payload)))
};
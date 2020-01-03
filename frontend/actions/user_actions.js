import * as APIUtil from '../util/user';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => {
  return ({
    type: RECEIVE_USER,
    user,
    reviews: user.reviews,
    // author: user.author,
  })
};

export const fetchUser = id => dispatch => {
  return APIUtil.fetchUser(id)
    .then(payload => dispatch(receiveUser(payload)))
};
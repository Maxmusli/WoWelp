import { RECEIVE_CURRENT_USER } from '../actions/session_action';
import { RECEIVE_USER } from '../actions/user_actions'

export default (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, 
        { [action.user.id]: action.user }
      )
    // case RECEIVE_USER:
    //   return Object.assign({}, 
        
    //   )
    default:
      return state;
  }
}
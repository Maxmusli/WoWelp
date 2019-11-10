import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import filtersReducer from './filters_reducer';
// import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  filters: filtersReducer,
  // ui: uiReducer,
})

export default rootReducer;
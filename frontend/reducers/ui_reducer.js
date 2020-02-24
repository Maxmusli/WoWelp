import { combineReducers } from "redux";
import ModalReducer from "./modal_reducer";
import LoaderReducer from './loader_reducer';

export default combineReducers({
  modal: ModalReducer,
  loader: LoaderReducer
});
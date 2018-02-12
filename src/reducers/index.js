import { combineReducers } from 'redux';
import RouterReducer from './RouterReducer';

export default combineReducers({
  router: RouterReducer,
});

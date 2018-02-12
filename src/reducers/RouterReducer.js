import {
  DRAWER_PUSH
 } from '../actions/types';

const INITIAL_STATE = {
  // phoneBookList : {},
  drawerPush : false
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type){
    case DRAWER_PUSH:
    return {...state, drawerPush: !state.drawerPush};
    default:
      return state;
  }
};

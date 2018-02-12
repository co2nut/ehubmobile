// import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
   DRAWER_PUSH,
 } from './types';


export const rightMenuClick = () => {
  return (dispatch) => {
    dispatch({
      type: DRAWER_PUSH
    })
  }
}
